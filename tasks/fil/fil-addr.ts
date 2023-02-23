import { getAddress, isAddress } from "ethers/lib/utils";
import { newDelegatedEthAddress, Protocol, decode as decodeFilAddress, CoinType } from "@glif/filecoin-address";

import { task } from "hardhat/config";
import { AddressZero } from "../common";

task("fil-addr", "Convert FIL address format")
  .addVariadicPositionalParam("addrs", "Fil addresses in fil/eth format", [
    AddressZero,
    "t410faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaonc6iji",
    "t010",
  ])
  .setAction(async ({ addrs }, hre) => {
    for (const addr of addrs) {
      if (isAddress(addr)) {
        // f4 address in eth format
        const filAddr = newDelegatedEthAddress(addr, CoinType.TEST);
        console.log(`${addr}: ${filAddr}`);
      } else {
        // all fil address types(f0-f4), https://github.com/glifio/modules/blob/primary/packages/filecoin-address/src/protocol.ts
        const filAddr = decodeFilAddress(addr);
        // print eth hex address if it is an f410 address
        if (filAddr.protocol() == Protocol.DELEGATED && filAddr.namespace == 10) {
          // let ethAddr = ethAddressFromDelegated(addr);
          let ethAddr = getAddress(`0x${filAddr.subAddrHex}`);
          console.log(`${addr}: ${ethAddr}`);
        } else {
          console.log(`${addr}: ${filAddr}`);
        }
      }
    }
  });
