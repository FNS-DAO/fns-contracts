// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "../ResolverBase.sol";
import "./ITextResolver.sol";

abstract contract TextResolver is ITextResolver, ResolverBase {
    mapping(uint64 => mapping(bytes32 => mapping(string => string))) versionable_texts;

    /**
     * Sets the text data associated with an FNS node and key.
     * May only be called by the owner of that node in the FNS registry.
     * @param node The node to update.
     * @param key The key to set.
     * @param value The text data value to set.
     */
    function setText(bytes32 node, string calldata key, string calldata value) external virtual authorised(node) {
        versionable_texts[recordVersions[node]][node][key] = value;
        emit TextChanged(node, key, key, value);
    }

    /**
     * Sets the text data associated with an FNS node and keys.
     * May only be called by the owner of that node in the FNS registry.
     * @param node The node to update.
     * @param keys The keys to set.
     * @param values The text data value to set.
     */
    function setTexts(bytes32 node, string[] calldata keys, string[] calldata values)
        external
        virtual
        authorised(node)
    {
        uint256 count = keys.length;
        require(count == values.length, "length");
        for (uint256 i = 0; i < count; i++) {
            versionable_texts[recordVersions[node]][node][keys[i]] = values[i];
            emit TextChanged(node, keys[i], keys[i], values[i]);
        }
    }

    /**
     * Returns the text data associated with an FNS node and key.
     * @param node The FNS node to query.
     * @param key The text data key to query.
     * @return The associated text data.
     */
    function text(bytes32 node, string calldata key) external view virtual override returns (string memory) {
        return versionable_texts[recordVersions[node]][node][key];
    }

    function supportsInterface(bytes4 interfaceID) public view virtual override returns (bool) {
        return interfaceID == type(ITextResolver).interfaceId || super.supportsInterface(interfaceID);
    }
}
