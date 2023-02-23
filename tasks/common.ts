import { FeeData } from "@ethersproject/providers";
import { ensNormalize } from "@ethersproject/hash";
import { BytesLike, isHexString, namehash, toUtf8String } from "ethers/lib/utils";
import { keccak256, toUtf8Bytes } from "ethers/lib/utils";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  FNSRegistry,
  Multicall,
  PublicResolver,
  Registrar,
  RegistrarController,
  ReverseRegistrar,
} from "../typechain-types";
import { Contract } from "ethers";

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
export const COIN_TYPE_FIL = 461;

// BlockGasLimit / 10 = 1000000000
export const DefaultGasLimit = 500000000;
export const txParams = (feeData: FeeData) => {
  return {
    // gasLimit: DefaultGasLimit,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas!,
  };
};

export const RootNode = "0x0000000000000000000000000000000000000000000000000000000000000000";
export const AddressZero = "0x0000000000000000000000000000000000000000";

export const labelhash = (label: string): string => keccak256(toUtf8Bytes(ensNormalize(label)));

// Top Level Domain
export const TLD_FIL_NAME = "fil";
export const TLD_FIL_SUFFIX = `.${TLD_FIL_NAME}`;

export const isEqualIgnoreCase = (a: string, b: string): boolean => a.toLowerCase() === b.toLowerCase();

export function isFilDomain(name: string): boolean {
  name = ensNormalize(name);
  return name.endsWith(TLD_FIL_NAME);
}

// get 2LD(Second Level Domain) from full fns name
export function get2LD(fullname: string): string {
  fullname = ensNormalize(fullname);
  let components = fullname.split(".");
  if (components.length < 2) {
    return "";
  }
  return components.slice(-2).join(".");
}

// get name of 2LD(Second Level Domain) from full fns name
// todo: consider subdomains: 3LD, 4LD, 5LD, ...
export function get2LDName(fullname: string): string {
  fullname = ensNormalize(fullname);
  let components = fullname.split(".");
  if (components.length < 2) {
    return "";
  }
  return components.slice(-2, -1).join(".");
}

export function getFNSNameLevel(fullname: string): number {
  fullname = ensNormalize(fullname);
  return fullname.split(".").length;
}

export function toNode(namenode: string): string {
  if (isHexString(namenode) && namenode.length == 66) {
    return namenode;
  }
  return namehash(ensNormalize(namenode));
}

export function getReverseNode(addr: string): string {
  return toNode(`${addr.substring(2).toLocaleLowerCase()}.addr.reverse`);
}

export async function getResolver(hre: HardhatRuntimeEnvironment): Promise<PublicResolver> {
  return await hre.ethers.getContract("PublicResolver");
}

export async function getMulticall(hre: HardhatRuntimeEnvironment): Promise<Multicall> {
  return await hre.ethers.getContract("Multicall");
}

export async function getFNSRegistry(hre: HardhatRuntimeEnvironment): Promise<FNSRegistry> {
  return await hre.ethers.getContract("FNSRegistry");
}

export async function getRegistrar(hre: HardhatRuntimeEnvironment): Promise<Registrar> {
  return await hre.ethers.getContract("Registrar");
}

export async function getRegistrarController(hre: HardhatRuntimeEnvironment): Promise<RegistrarController> {
  return await hre.ethers.getContract("RegistrarController");
}

export async function getReverseRegistrar(hre: HardhatRuntimeEnvironment): Promise<ReverseRegistrar> {
  return await hre.ethers.getContract("ReverseRegistrar");
}

// export type CallItem = Multicall.CallStruct & {
export type CallItem = {
  target: string;
  callData: BytesLike;
  handler: (success: boolean, data: BytesLike) => void;
};

export async function tryMulticall(multicall: Multicall, calls: CallItem[]) {
  const ret = await multicall.callStatic.tryAggregate(false, calls);
  for (const i in calls) {
    calls[i].handler(ret[i].success, ret[i].returnData);
  }
}

// Sample usage of Multicall
export async function printNameDetails(
  fullname: string,
  fnsRegistry: FNSRegistry,
  resolver: PublicResolver,
  multicall: Multicall,
) {
  const newCallItem = (
    tag: string,
    contract: Contract,
    func: string,
    params: any[],
    formatter?: (result: any) => any,
  ): CallItem => {
    return {
      target: contract.address,
      callData: contract.interface.encodeFunctionData(func, params),
      handler: (_success, data) => {
        let result = contract.interface.decodeFunctionResult(func, data);
        result = formatter ? formatter(result) : result;
        console.log(`${tag}: ${result}`);
      },
    };
  };
  const addrFormatter = (addrBytes: [BytesLike]) => toUtf8String(addrBytes[0]);
  const node = toNode(fullname);
  const calls: CallItem[] = [
    // Controller
    newCallItem("Controller", fnsRegistry, "owner", [node]),
    // text: email, url, avatar, description, com.github, com.twitter, com.discord, com.reddit, com.telegram
    newCallItem("Email", resolver, "text", [node, "email"]),
    newCallItem("URL", resolver, "text", [node, "url"]),
    newCallItem("Avatar", resolver, "text", [node, "avatar"]),
    newCallItem("Description", resolver, "text", [node, "description"]),
    newCallItem("Github", resolver, "text", [node, "com.github"]),
    newCallItem("Twitter", resolver, "text", [node, "com.twitter"]),
    newCallItem("Discord", resolver, "text", [node, "com.discord"]),
    newCallItem("Reddit", resolver, "text", [node, "com.reddit"]),
    newCallItem("Telegram", resolver, "text", [node, "com.telegram"]),
    // addr: fil, eth, btc, ltc, doge
    newCallItem("Address.FIL", resolver, "addr(bytes32,uint256)", [node, 461], addrFormatter),
    newCallItem("Address.ETH", resolver, "addr(bytes32,uint256)", [node, 40], addrFormatter),
    newCallItem("Address.BTC", resolver, "addr(bytes32,uint256)", [node, 0], addrFormatter),
    newCallItem("Address.LTC", resolver, "addr(bytes32,uint256)", [node, 2], addrFormatter),
    newCallItem("Address.DOGE", resolver, "addr(bytes32,uint256)", [node, 385], addrFormatter),
  ];
  await tryMulticall(multicall, calls);
}
