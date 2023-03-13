import { task, types } from "hardhat/config";
import { AddressZero, isEqualIgnoreCase, txParams } from "../common";
import { IPriceOracle, RegistrarController } from "../../typechain-types";
import { BigNumber } from "ethers";

task("get-remain-registerable", "Get remain registerable for RegistrarController").setAction(async ({ count }, hre) => {
  const regController: RegistrarController = await hre.ethers.getContract("RegistrarController");
  const remain = await regController.remainRegisterable();
  console.log(`remain: ${remain}`);
});

task("set-remain-registerable", "Set remain registerable for RegistrarController")
  .addParam("count", "the remain count", undefined, types.string)
  .setAction(async ({ count }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    const regController: RegistrarController = await hre.ethers.getContract("RegistrarController", operator);
    const oldRemainCount = await regController.remainRegisterable();
    count = BigNumber.from(count);
    if (count < 0) {
      count = BigNumber.from("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
    }
    console.log(`setRemainRegsiterable: ${oldRemainCount} -> ${count}`);
    const tx = await regController.setRemainRegisterable(count);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });
