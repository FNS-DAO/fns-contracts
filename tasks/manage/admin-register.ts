import { ensNormalize } from "@ethersproject/hash";
import { task, types } from "hardhat/config";
import * as fs from "fs";
import * as dayjs from "dayjs";
import { AddressZero, getRegistrar, getResolver, labelhash, txParams } from "../common";
import { isAddress } from "@ethersproject/address";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type NameItem = {
  name: string;
  owner: string;
  duration: number;
};

const MIN_DURATION = 3600 * 24 * 1;
const MAX_DURATION = 3600 * 24 * 365 * 100;

task("admin-register", "Register .fil names by admin")
  .addParam(
    "file",
    "Data file contains all names to register, should be a json file like admin-register-data-sample.json",
    undefined,
    types.string,
  )
  .setAction(async ({ file }, hre) => {
    const [controller] = await hre.ethers.getSigners();
    const items: NameItem[] = JSON.parse(fs.readFileSync(file, "utf8"));
    const registrar = (await getRegistrar(hre)).connect(controller);
    if (!registrar.controllers(controller.address)) {
      throw `Permission denied for ${controller.address}`;
    }
    const resolver = await getResolver(hre);
    let nonce = await controller.getTransactionCount();
    const now = new Date().getTime();
    for (let item of items) {
      const name = ensNormalize(item.name);
      const expiresAt = new Date(now + item.duration * 1000);
      console.log(`Register ${name}.fil for ${item.owner}, expiresAt ${expiresAt}`);
      if (name.indexOf(".") >= 0 || name.length < 3) {
        console.error(`Invalid name: ${name}`);
        continue;
      }
      if (item.duration < MIN_DURATION || item.duration > MAX_DURATION) {
        console.error(`Invalid duration: ${item.duration}`);
        continue;
      }
      if (!isAddress(item.owner)) {
        console.error(`Invalid owner: ${item.owner}`);
        continue;
      }
      const id = labelhash(name);
      if (!(await registrar.available(id))) {
        console.error(`Name is not available: ${name}`);
        continue;
      }
      const overrides = txParams(await controller.provider!.getFeeData(), nonce++);
      const tx = await registrar.register(name, item.owner, item.duration, resolver.address, {
        ...overrides,
      });
      console.log(`> nonce=${nonce - 1}, tx: ${tx.hash}`);
      // await tx.wait();
      await sleep(1000);
    }
  });
