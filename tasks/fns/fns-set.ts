import { task, types } from "hardhat/config";
import { getFNSRegistry, isFilDomain, labelhash, TLD_FIL_NAME, toNode, txParams } from "../common";
import { FNS } from "../../typechain-types";

task("fns-set-subnode", "Set subnode")
  .addParam("parent", "Full name or node hash", undefined, types.string, false)
  .addOptionalParam("owner", "Specify owner address")
  .addVariadicPositionalParam("subnames", "Subnode names", undefined, types.string, false)
  .setAction(async ({ parent, owner, subnames }, hre) => {
    const registry: FNS = await hre.ethers.getContract("FNSRegistry");
    const resolver = await hre.ethers.getContract("PublicResolver");
    const [operator] = await hre.ethers.getSigners();
    owner = owner || operator.address;
    const parentNode = toNode(parent);
    const overrides = txParams(await operator.provider!.getFeeData());
    for (let name of subnames) {
      const fullName = `${name}.${parent}`;
      console.log(`Set subnode: ${fullName}`);
      console.debug(`node: ${toNode(fullName)}`);
      console.debug(`parent: ${parentNode}`);
      console.debug(`labelhash: ${labelhash(name)}`);
      const tx = await registry.setSubnodeRecord(parentNode, labelhash(name), owner, resolver.address, 0, overrides);
      console.log(`> tx: ${tx.hash}`);
      await tx.wait();
    }
  });

task("fns-set-owner", "Set fns node owner")
  .addParam("owner", "Specify owner address")
  .addVariadicPositionalParam("names", "Full name or node hash", undefined, types.string, false)
  .setAction(async ({ owner, names }, hre) => {
    const registry = await getFNSRegistry(hre);
    const overrides = txParams(await registry.provider.getFeeData());
    for (let name of names) {
      if (!isFilDomain(name)) {
        name = `${name}.${TLD_FIL_NAME}`;
      }
      console.log(`Set owner for: ${name}`);
      const node = toNode(name);
      const tx = await registry.setOwner(node, owner, overrides);
      console.log(`> tx: ${tx.hash}`);
      await tx.wait();
    }
  });
