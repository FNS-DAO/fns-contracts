import { namehash } from "ethers/lib/utils";
import { task, types } from "hardhat/config";
import {
  AddressZero,
  COIN_TYPE_FIL,
  get2LD,
  get2LDName,
  getFNSRegistry,
  getMulticall,
  getRegistrar,
  getRegistrarController,
  getResolver,
  isFilDomain,
  labelhash,
  printNameDetails,
  toNode,
} from "../common";
import { PublicResolver__factory } from "../../typechain-types";

task("fns-query", "Query fns names")
  .addVariadicPositionalParam("namenodes", "Full FNS names or node hashes", undefined, types.string, false)
  .setAction(async ({ namenodes }, hre) => {
    const registry = await getFNSRegistry(hre);
    const regController = await getRegistrarController(hre);
    const registrar = await getRegistrar(hre);
    for (const nn of namenodes) {
      // todo: use multicall
      const node = toNode(nn);
      const nowOwner = await registry.owner(node);
      const resolverAddr = await registry.resolver(node);

      console.log(`[${nn}]:`);
      console.log(`> node ID: ${node}`);
      console.log(`> owner(controller): ${nowOwner}`);
      console.log(`> resolver: ${resolverAddr}`);

      if (resolverAddr != AddressZero) {
        const resolver = PublicResolver__factory.connect(resolverAddr, registry.provider);
        console.log(`> resolve-addr: ${await resolver["addr(bytes32,uint256)"](node, COIN_TYPE_FIL)}`);
        console.log(`> resolve-content: ${await resolver.contenthash(node)}`);
      }
      if (isFilDomain(nn)) {
        let sld = get2LD(nn);
        let sldName = get2LDName(nn);
        const tokenId = labelhash(sldName);
        const expiresAt = await regController.nameExpires(sldName);
        let expireTime = "n/a";
        if (!expiresAt.isZero()) {
          expireTime = new Date(expiresAt.toNumber() * 1000).toString();
        }
        const registrant = await registrar.ownerOf(tokenId);
        console.log(`> SLD: ${sld}`);
        console.log(`> TokenID: ${tokenId}`);
        console.log(`> Registrant: ${registrant}`);
        console.log(`> expires at: ${expireTime}`);
      }
    }
  });

task("fns-query-common", "Query common info of FNS names")
  .addVariadicPositionalParam("names", "Full FNS names or node hashes", undefined, types.string, false)
  .setAction(async ({ names }, hre) => {
    const fnsRegistry = await getFNSRegistry(hre);
    const resolver = await getResolver(hre);
    const multicall = await getMulticall(hre);
    for (const name of names) {
      await printNameDetails(name, fnsRegistry, resolver, multicall);
    }
  });
