import { existsSync, lstatSync, writeFile, writeFileSync } from "fs";
import { task } from "hardhat/config";
import { join } from "path";
import {
  FixedPriceOracle__factory,
  FNSRegistry__factory,
  Multicall__factory,
  PublicResolver__factory,
  RegistrarController__factory,
  Registrar__factory,
  ReverseRegistrar__factory,
} from "../typechain-types";

task("abi", "Export abi of all contracts addresses")
  .addParam("out", "Output directory")
  .setAction(async ({ out }, hre) => {
    const contracts = [
      ["Multicall", Multicall__factory],
      ["FNSRegistry", FNSRegistry__factory],
      ["ReverseRegistrar", ReverseRegistrar__factory],
      ["Registrar", Registrar__factory],
      ["FixedPriceOracle", FixedPriceOracle__factory],
      ["RegistrarController", RegistrarController__factory],
      ["PublicResolver", PublicResolver__factory],
    ];

    if (!lstatSync(out).isDirectory()) {
      throw `Output dir not exist: ${out}`;
    }
    for (const c of contracts) {
      const [name, factory] = c;
      writeFileSync(join(out, `${name}.json`), JSON.stringify(factory.abi, null, "  "));
    }
  });
