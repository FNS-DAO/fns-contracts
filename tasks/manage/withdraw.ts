import { formatEther } from "@ethersproject/units";
import { task } from "hardhat/config";
import { txParams, AddressZero } from "../common";
import { RegistrarController } from "../../typechain-types";

task("withdraw", "Withdraw fund from RegistrarController")
  .addOptionalParam("to", "The recipient address, default is the operator")
  .addOptionalParam("controller", "Withdraw from a specific RegistrarController")
  .setAction(async ({ controller, to }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    let registrarController: RegistrarController = await hre.ethers.getContract("RegistrarController");
    if (controller && controller.toLowerCase() != AddressZero) {
      registrarController = registrarController.attach(controller);
    }
    to = to || operator.address;
    console.log(`Withdraw all FIL from ${registrarController.address} to ${to}`);

    const overrides = txParams(await operator.provider!.getFeeData());
    const balance = await operator.provider!.getBalance(registrarController.address);

    if (balance.isZero()) {
      console.log(`Balance is 0, no need to withdraw`);
    } else {
      console.log(`Withdraw all ${formatEther(balance)} FIL to owner`);
      const tx = await registrarController.withdraw(to, overrides);
      console.log(`> tx: ${tx.hash}`);
      await tx.wait();
    }
  });
