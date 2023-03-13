import { task, types } from "hardhat/config";
import { RegistrarController } from "../../typechain-types";

task("get-max-expiration", "Get max expiration time of RegistrarController").setAction(async ({ count }, hre) => {
  const regController: RegistrarController = await hre.ethers.getContract("RegistrarController");
  const exp = await regController.maxExpirationTime();
  if (exp.isZero()) {
    console.log(`maxExpirationTime: unlimited`);
  } else {
    console.log(`maxExpirationTime: ${exp.toNumber()}`);
  }
});

task("set-max-expiration", "Set max expiration time of RegistrarController")
  .addParam("time", "The max expiration time, 0 for unlimited", undefined, types.string)
  .setAction(async ({ len }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    const regController: RegistrarController = await hre.ethers.getContract("RegistrarController", operator);
    const oldMinLen = await regController.minLengthAvailable();
    console.log(`setMinLengthAvailable: ${oldMinLen} -> ${len}`);
    const tx = await regController.setMinLengthAvailable(len);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });
