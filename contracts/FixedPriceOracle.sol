//SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "./interfaces/IPriceOracle.sol";
import "./libs/StringUtils.sol";
import "./libs/Ownable.sol";
import "./libs/IERC165.sol";

// FixedPriceOracle sets a price in FIL
contract FixedPriceOracle is IPriceOracle, IERC165, Ownable {
    using StringUtils for *;

    event PricesUpdated(uint256 price1, uint256 price2, uint256 price3, uint256 price4, uint256 price5);

    // Rent in base price units by length
    uint256 public price1Letter;
    uint256 public price2Letter;
    uint256 public price3Letter;
    uint256 public price4Letter;
    uint256 public price5Letter;

    constructor() {
        price1Letter = 158 * 1e14;
        price2Letter = 158 * 1e12;
        price3Letter = 158 * 1e9;
        price4Letter = 317 * 1e8;
        price5Letter = 634 * 1e7;
    }

    function price(
        string calldata name,
        uint256 expires,
        uint256 duration
    ) external view override returns (IPriceOracle.Price memory) {
        uint256 len = name.strlen();
        uint256 basePrice;

        if (len >= 5) {
            basePrice = price5Letter * duration;
        } else if (len == 4) {
            basePrice = price4Letter * duration;
        } else if (len == 3) {
            basePrice = price3Letter * duration;
        } else if (len == 2) {
            basePrice = price2Letter * duration;
        } else {
            basePrice = price1Letter * duration;
        }

        return IPriceOracle.Price({ base: basePrice, premium: _premium(name, expires, duration) });
    }

    /**
     * @dev Returns the pricing premium in wei.
     */
    function premium(string calldata name, uint256 expires, uint256 duration) external view returns (uint256) {
        return _premium(name, expires, duration);
    }

    /**
     * @dev Returns the pricing premium in internal base units.
     */
    function _premium(
        string memory,
        /*name*/ uint256,
        /*expires*/ uint256 /*duration*/
    ) internal view virtual returns (uint256) {
        return 0;
    }

    function setBasePrices(
        uint256 price1,
        uint256 price2,
        uint256 price3,
        uint256 price4,
        uint256 price5
    ) external onlyOwner {
        require(price1 != 0, "price1 is 0");
        require(price1 > price2 && price2 > price3 && price3 > price4 && price4 > price5, "invalid price");
        price1Letter = price1;
        price2Letter = price2;
        price3Letter = price3;
        price4Letter = price4;
        price5Letter = price5;
        emit PricesUpdated(price1, price2, price3, price4, price5);
    }

    function supportsInterface(bytes4 interfaceID) public pure override returns (bool) {
        return interfaceID == type(IERC165).interfaceId || interfaceID == type(IPriceOracle).interfaceId;
    }
}
