import { task, types } from "hardhat/config";
import { Multicall } from "../../typechain-types";
import { COIN_TYPE_FIL, getMulticall, getResolver, toNode, txParams } from "../common";
import { toUtf8Bytes, toUtf8String } from "ethers/lib/utils";

task("fns-resolve-addr", "Resolve address of FNS")
  .addParam("name", "Full FNS names or node hashes")
  .addVariadicPositionalParam(
    "cointypes",
    "Coin types to resolve, ref https://github.com/satoshilabs/slips/blob/master/slip-0044.md",
    [40, 461],
    types.int,
  )
  .setAction(async ({ name, cointypes }, hre) => {
    const resolver = await getResolver(hre);
    const node = toNode(name);
    for (const ct of cointypes) {
      const addrBytes = await resolver["addr(bytes32,uint256)"](node, COIN_TYPE_FIL);
      const addr = toUtf8String(addrBytes);
      console.log(`${ct}: ${addr}`);
    }
  });

task("fns-resolve-addr-set", "Set address of FNS")
  .addParam("name", "Full FNS name or node hash to set", undefined, types.string, false)
  .addOptionalParam(
    "cointype",
    "Coin type of the address, default is FIL(461, https://github.com/satoshilabs/slips/blob/master/slip-0044.md)",
  )
  .addOptionalParam("addr", "Address to set, default is the operator")
  .setAction(async ({ name, cointype, addr }, hre) => {
    const resolver = await getResolver(hre);
    const [operator] = await hre.ethers.getSigners();
    cointype = cointype || COIN_TYPE_FIL;
    addr = addr || operator.address;
    let addrBytes = addr;
    addrBytes = toUtf8Bytes(addr);
    const overrides = txParams(await operator.provider!.getFeeData());
    console.log(`Setting ${addr} as the address(${cointype}) of ${name} ...`);
    const tx = await resolver["setAddr(bytes32,uint256,bytes)"](toNode(name), cointype, addrBytes, overrides);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });

task("fns-resolve-text", "Resolve text of FNS")
  .addParam("name", "Full FNS name or node hash", undefined, types.string, false)
  .addVariadicPositionalParam("keys", "Text record keys", ["url", "email", "com.twitter", "com.github"], types.string)
  .setAction(async ({ name, keys }, hre) => {
    const resolver = await getResolver(hre);
    const node = toNode(name);
    console.log(`node: ${node}`);
    // for (const key of keys) {
    //   const text = await resolver.text(node, key);
    //   console.log(`${key}: ${text}`);
    // }
    // use multicall
    const mc = await getMulticall(hre);
    const calls: Multicall.CallStruct[] = [];
    for (const key of keys) {
      calls.push({
        target: resolver.address,
        callData: resolver.interface.encodeFunctionData("text", [node, key]),
      });
    }
    const ret = await mc.callStatic.tryAggregate(false, calls);
    for (const i in keys) {
      const text = resolver.interface.decodeFunctionResult("text", ret[i][1]);
      console.log(`${keys[i]}: ${text}`);
    }
  });

task("fns-resolve-text-set", "Set text of FNS")
  .addParam("name", "Full FNS name or node hash", undefined, types.string, false)
  .addVariadicPositionalParam("kv", "key value pairs in key:val format", undefined, types.string, false)
  .setAction(async ({ kv, name }, hre) => {
    const resolver = await getResolver(hre);
    const node = toNode(name);
    const [operator] = await hre.ethers.getSigners();
    const overrides = txParams(await operator.provider!.getFeeData());

    let [keys, values]: string[][] = [[], []];
    let calls: string[] = [];
    for (let pair of kv) {
      let splitter = pair.indexOf(":");
      let [key, val] = [pair.substring(0, splitter).trim(), pair.substring(splitter + 1).trim()];
      if (!key || !val) {
        throw `Invalid key value pair: ${pair}`;
      }
      console.debug(`${key}: ${val}`);

      // one by one
      // const tx = await resolver.setText(node, key, val, overrides);
      // console.log(`> tx: ${tx.hash}`);
      // await tx.wait();

      keys.push(key);
      values.push(val);

      // calls.push(resolver.interface.encodeFunctionData("setText", [node, key, val]));
    }

    // setTexts
    console.debug(keys, values);
    const tx = await resolver.setTexts(node, keys, values, overrides);
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();

    // multicallable
    // console.debug(node, calls);
    // todo: multicall 有问题, 等下次测试网重置再试
    // https://github.com/filecoin-project/builtin-actors/pull/994
    // https://github.com/filecoin-project/ref-fvm/issues/1178
    // const tx = await resolver.multicallWithNodeCheck(node, calls, overrides);
    // const tx = await resolver.multicall(calls, overrides);
    // console.log(`> tx: ${tx.hash}`);
    // await tx.wait();
  });

task("fns-resolve-content", "Resolve content hash of FNS")
  .addVariadicPositionalParam("namenodes", "Full FNS names or node hashes", undefined, types.string, false)
  .setAction(async ({ namenodes }, hre) => {});
