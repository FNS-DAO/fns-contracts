//SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "./IPriceOracle.sol";

interface IRegistrarController {
    /********************* events *********************/
    event NameRegistered(
        string name,
        bytes32 indexed label,
        address indexed owner,
        uint256 baseCost,
        uint256 premium,
        uint256 expires
    );
    event NameRenewed(string name, bytes32 indexed label, uint256 cost, uint256 expires);
    event MinLengthUpdated(uint256 oldMinLen, uint256 newMinLen);

    /********************* errors *********************/
    error NameNotAvailable(string name);
    error DurationTooShort(uint256 duration);
    error ResolverRequiredWhenDataSupplied();
    error InsufficientValue();
    error InvalidExpirationTime();
    error InvalidRecipient();
    error InvalidNameLength();
    error RegisterCountLimited();

    /********************* functions *********************/
    function valid(string memory name) external view returns (bool);

    function available(string memory name) external view returns (bool);

    function nameExpires(string memory name) external view returns (uint256);

    function rentPrice(string memory name, uint256 duration) external view returns (IPriceOracle.Price memory);

    function register(
        string calldata name,
        address owner,
        uint256 duration,
        address resolver,
        bytes[] calldata data,
        bool reverseRecord
    ) external payable;

    function renew(string calldata name, uint256 duration) external payable;

    /// @dev Max expiration time for register and renew
    /// @dev 0 means no limit.
    function maxExpirationTime() external view returns (uint256);

    /// @dev Minimum name length can be registered
    function minLengthAvailable() external view returns (uint256);

    /// @dev Limit the remaining count that can be registered
    /// @dev type(uint256).max means no limit
    function remainRegisterable() external view returns (uint256);
}
