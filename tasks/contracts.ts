import { task } from "hardhat/config";

task("contracts", "Print all deployed contracts' addresses").setAction(async ({}, hre) => {
  const contracts = [
    ["Multicall"],
    ["FNSRegistry"],
    ["ReverseRegistrar"],
    ["Registrar"],
    ["FixedPriceOracle"],
    ["RegistrarController"],
    ["PublicResolver"],
  ];
  for (const cn of contracts) {
    const contract = await ethers.getContract(cn);
    console.log(`${cn}: ${contract.address}`);
  }
});
