import { task, types } from "hardhat/config";
import { AddressZero, isEqualIgnoreCase, txParams } from "../common";
import { IPriceOracle, RegistrarController } from "../../typechain-types";

task("update-price-oracle", "Update price oracle for RegistrarController")
  .addOptionalPositionalParam("oracle", "contract address of price oracle", undefined, types.string)
  .setAction(async ({ oracle }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    const regController: RegistrarController = await hre.ethers.getContract("RegistrarController", operator);
    const deployedOracle: IPriceOracle = await hre.ethers.getContract("FixedPriceOracle");
    let newOracle = deployedOracle.address;
    if (oracle && !isEqualIgnoreCase(oracle, AddressZero)) {
      newOracle = oracle;
    }
    const oldOracle = await regController.prices();
    if (isEqualIgnoreCase(oldOracle, newOracle)) {
      console.log(`No need to update, already set to ${newOracle}`);
      return;
    }
    console.log(`Changing price oracle: ${oldOracle} -> ${newOracle}`);
    const overrides = txParams(await operator.provider!.getFeeData());
    const tx = await regController.setPriceOracle(newOracle, overrides);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });
