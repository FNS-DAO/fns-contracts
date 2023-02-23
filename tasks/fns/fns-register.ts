import { ensNormalize } from "@ethersproject/hash";
import { task, types } from "hardhat/config";
import { TLD_FIL_NAME, txParams } from "../common";
import { IRegistrarController, PublicResolver } from "../../typechain-types";

task("fns-register", "Register .fil fns names")
  .addParam("duration", "Specify duratioin in sec, default 365 days", 31536000, types.int)
  .addOptionalParam("owner", "Specify owner address")
  .addVariadicPositionalParam("names", "FNS names to register", undefined, types.string, false)
  .setAction(async ({ owner, duration, names }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    owner = owner || operator.address;
    for (let name of names) {
      name = ensNormalize(name);
      if (name.length == 0) {
        continue;
      }
      if (name.indexOf(".") >= 0 || name.length < 3) {
        console.error(`[${name}]: invalid format`);
        continue;
      }

      const regController: IRegistrarController = await hre.ethers.getContract("RegistrarController", operator);
      if (!(await regController.available(name))) {
        const expiresAt = await regController.nameExpires(name);
        console.error(`[${name}]: not available, expires at ${expiresAt}`);
        continue;
      }
      let price = await regController.rentPrice(name, duration);
      const totalPrice = price.base.add(price.premium);

      const overrides = txParams(await operator.provider.getFeeData());
      const resolver: PublicResolver = await hre.ethers.getContract("PublicResolver", operator);
      console.log(`[${name}]: register ${name}.${TLD_FIL_NAME} for ${duration}s with ${totalPrice} FIL ...`);
      const tx = await regController.register(name, owner, duration, resolver.address, [], true, {
        value: totalPrice,
        ...overrides,
      });
      console.log(`> tx: ${tx.hash}`);
      console.debug(`> tx: ${JSON.stringify(tx)}`);
      await tx.wait();
    }
  });
