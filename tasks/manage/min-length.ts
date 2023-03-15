import { task, types } from "hardhat/config";
import { RegistrarController } from "../../typechain-types";
import { txParams } from "../common";

task("get-min-length", "Get min length available of RegistrarController").setAction(async ({ count }, hre) => {
  const regController: RegistrarController = await hre.ethers.getContract("RegistrarController");
  const len = await regController.minLengthAvailable();
  console.log(`minLengthAvailable: ${len.toNumber()}`);
});

task("set-min-length", "Set min length available of RegistrarController")
  .addParam("len", "min length can be registered", undefined, types.string)
  .setAction(async ({ len }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    const regController: RegistrarController = await hre.ethers.getContract("RegistrarController", operator);
    const oldMinLen = await regController.minLengthAvailable();
    console.log(`setMinLengthAvailable: ${oldMinLen} -> ${len}`);
    const overrides = txParams(await operator.provider!.getFeeData(), await operator.getTransactionCount());
    const tx = await regController.setMinLengthAvailable(len, overrides);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });
