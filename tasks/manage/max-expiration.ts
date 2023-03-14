import { task, types } from "hardhat/config";
import { RegistrarController } from "../../typechain-types";
import { txParams } from "../common";

task("get-max-expiration", "Get max expiration time of RegistrarController").setAction(async ({ count }, hre) => {
  const regController: RegistrarController = await hre.ethers.getContract("RegistrarController");
  const exp = await regController.maxExpirationTime();
  if (exp.isZero()) {
    console.log(`maxExpirationTime: unlimited`);
  } else {
    console.log(`maxExpirationTime: ${new Date(exp.toNumber() * 1000)}`);
  }
});

task("set-max-expiration", "Set max expiration time of RegistrarController")
  .addParam("time", "The max expiration time, 0 for unlimited", undefined, types.string)
  .setAction(async ({ time }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    const regController: RegistrarController = await hre.ethers.getContract("RegistrarController", operator);
    const oldExp = await regController.maxExpirationTime();
    const descOldExp = oldExp.isZero() ? "Unlimited" : new Date(oldExp.toNumber() * 1000);
    const descNewExp = time == 0 ? "Unlimited" : new Date(time * 1000);
    console.log(`setMaxExpirationTime: ${descOldExp} -> ${descNewExp}`);
    const overrides = txParams(await operator.provider!.getFeeData(), await operator.getTransactionCount());
    const tx = await regController.setMaxExpirationTime(time, overrides);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });
