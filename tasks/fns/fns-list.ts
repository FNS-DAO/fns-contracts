import { task, types } from "hardhat/config";
import { getFNSRegistry, getRegistrar, TLD_FIL_NAME } from "../common";

task("fns-list-reg", "List all registered 2LD .fil names")
  .addOptionalVariadicPositionalParam("registrants", "Registrants to query", undefined, types.string)
  .setAction(async ({ registrants }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    if (!registrants) {
      registrants = [operator.address];
    }
    let registrar = await getRegistrar(hre);
    for (let addr of registrants) {
      const count = (await registrar.balanceOf(addr)).toNumber();
      console.log(`${addr} owned ${count} names.`);
      for (let i = 0; i < count; i++) {
        const tokenId = await registrar.tokenOfOwnerByIndex(addr, i);
        const name = await registrar.nameOf(tokenId);
        const expiresAt = await registrar.nameExpires(tokenId);
        let expireTime = "n/a";
        if (!expiresAt.isZero()) {
          expireTime = new Date(expiresAt.toNumber() * 1000).toString();
        }
        console.log(`> ${name}.${TLD_FIL_NAME}: expires at ${expireTime}`);
      }
    }
  });

task("fns-list-ctrl", "List all controlled 2LD .fil names")
  .addOptionalVariadicPositionalParam("controllers", "Controllers to query", undefined, types.string)
  .setAction(async ({ controllers }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    if (!controllers) {
      controllers = [operator.address];
    }
    const registry = await getFNSRegistry(hre);
    const registrar = await getRegistrar(hre);
    for (let addr of controllers) {
      console.log(`${addr}:`);
      const filter = registry.filters.Transfer(null, addr);
      let nodes: string[] = [];
      const latestBlock = await registry.provider.getBlockNumber();
      const step = 999;
      for (let from = 0; from <= latestBlock; from += step) {
        const result = await registry.queryFilter(filter, from, from + step);
        // console.debug(result);
        nodes.push(...result.map(event => event.topics[1]));
      }
      nodes = [...new Set(nodes)];
      for (let node of nodes) {
        // check latest owner
        if ((await registry.owner(node)) != addr) {
          continue;
        }
        // try get name from node
        const name = await registrar.getNameByNode(node);
        if (name.length == 0) {
          console.log(`> [unknown node]: ${node}`);
          continue;
        }
        console.log(`> ${name}.${TLD_FIL_NAME}`);
      }
    }
  });
