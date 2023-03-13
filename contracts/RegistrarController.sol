//SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "./Registrar.sol";
import "./interfaces/IPriceOracle.sol";
import "./interfaces/IRegistrarController.sol";
import "./interfaces/IResolver.sol";
import "./interfaces/IReverseRegistrar.sol";
import "./libs/Address.sol";
import "./libs/IERC165.sol";
import "./libs/Ownable.sol";
import "./libs/SafeERC20.sol";
import "./libs/StringUtils.sol";

/**
 * @dev A registrar controller for registering and renewing names at fixed cost.
 */
contract RegistrarController is IRegistrarController, Ownable, IERC165 {
    using StringUtils for *;
    using Address for address;
    using SafeERC20 for IERC20;

    uint256 public constant MIN_REGISTRATION_DURATION = 28 days;
    // namehash("fil")
    bytes32 private constant FIL_NODE = 0x78f6b1389af563cc5c91f234ea46b055e49658d8b999eeb9e0baef7dbbc93fdb;
    uint64 private constant MAX_EXPIRY = type(uint64).max;
    IRegistrar public immutable base;
    IReverseRegistrar public immutable reverseRegistrar;
    IPriceOracle public prices;
    uint256 private _maxExpirationTime;
    uint256 private _minLengthAvailable;

    constructor(IRegistrar _base, IPriceOracle _prices, IReverseRegistrar _reverseRegistrar) {
        base = _base;
        prices = _prices;
        reverseRegistrar = _reverseRegistrar;
        _maxExpirationTime = 0;
        _minLengthAvailable = 3;
    }

    function valid(string memory name) public view override returns (bool) {
        return name.strlen() >= _minLengthAvailable;
    }

    function available(string memory name) public view override returns (bool) {
        bytes32 label = keccak256(bytes(name));
        return valid(name) && base.available(uint256(label));
    }

    function nameExpires(string memory name) external view override returns (uint256) {
        bytes32 label = keccak256(bytes(name));
        return base.nameExpires(uint256(label));
    }

    function rentPrice(
        string memory name,
        uint256 duration
    ) public view override returns (IPriceOracle.Price memory price) {
        bytes32 label = keccak256(bytes(name));
        price = prices.price(name, base.nameExpires(uint256(label)), duration);
    }

    function register(
        string calldata name,
        address _owner,
        uint256 duration,
        address resolver,
        bytes[] calldata data,
        bool reverseRecord
    ) public payable override {
        if (!available(name)) {
            revert NameNotAvailable(name);
        }
        if (duration < MIN_REGISTRATION_DURATION) {
            revert DurationTooShort(duration);
        }
        if (data.length > 0 && resolver == address(0)) {
            revert ResolverRequiredWhenDataSupplied();
        }

        IPriceOracle.Price memory price = rentPrice(name, duration);
        uint256 totalPrice = price.base + price.premium;
        if (msg.value < totalPrice) {
            revert InsufficientValue();
        }

        uint256 expires = base.register(name, _owner, duration, resolver);
        if (_maxExpirationTime > 0 && expires > _maxExpirationTime) {
            revert InvalidExpirationTime();
        }

        bytes32 label = keccak256(bytes(name));
        if (data.length > 0) {
            _setRecords(resolver, label, data);
        }

        if (reverseRecord) {
            _setReverseRecord(name, resolver, msg.sender);
        }

        emit NameRegistered(name, label, _owner, price.base, price.premium, expires);

        if (msg.value > totalPrice) {
            payable(msg.sender).transfer(msg.value - totalPrice);
        }
    }

    function renew(string calldata name, uint256 duration) external payable override {
        IPriceOracle.Price memory price = rentPrice(name, duration);
        if (msg.value < price.base) {
            revert InsufficientValue();
        }
        uint256 expires;
        bytes32 label = keccak256(bytes(name));
        expires = base.renew(uint256(label), duration);
        if (_maxExpirationTime > 0 && expires > _maxExpirationTime) {
            revert InvalidExpirationTime();
        }

        if (msg.value > price.base) {
            payable(msg.sender).transfer(msg.value - price.base);
        }

        emit NameRenewed(name, label, msg.value, expires);
    }

    function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
        return interfaceID == type(IERC165).interfaceId || interfaceID == type(IRegistrarController).interfaceId;
    }

    function maxExpirationTime() external view override returns (uint256) {
        return _maxExpirationTime;
    }

    function minLengthAvailable() external view override returns (uint256) {
        return _minLengthAvailable;
    }

    /********************* Owner functions *********************/

    function setPriceOracle(IPriceOracle _prices) external onlyOwner {
        prices = _prices;
    }

    function withdraw(address to) external onlyOwner {
        if (to == address(0)) {
            revert InvalidRecipient();
        }
        payable(to).transfer(address(this).balance);
    }

    function withdrawERC20(IERC20 token, address to, uint256 amount) external onlyOwner {
        if (to == address(0)) {
            revert InvalidRecipient();
        }
        token.safeTransfer(to, amount);
    }

    function setMaxExpirationTime(uint256 expTime) external onlyOwner {
        _maxExpirationTime = expTime;
    }

    function setMinLengthAvailable(uint256 minLen) external onlyOwner {
        if (minLen < 1) {
            revert InvalidNameLength();
        }
        emit MinLengthUpdated(_minLengthAvailable, minLen);
        _minLengthAvailable = minLen;
    }

    /********************* Internal functions *********************/

    function _setRecords(address resolverAddress, bytes32 label, bytes[] calldata data) internal {
        bytes32 nodehash = keccak256(abi.encodePacked(FIL_NODE, label));
        IResolver resolver = IResolver(resolverAddress);
        resolver.multicallWithNodeCheck(nodehash, data);
    }

    function _setReverseRecord(string memory name, address resolver, address _owner) internal {
        reverseRegistrar.setNameForAddr(msg.sender, _owner, resolver, string.concat(name, ".fil"));
    }
}
