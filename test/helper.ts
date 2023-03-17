import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import { namehash } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { AddressZero, labelhash, RootNode } from "../tasks/common";
import {
  FixedPriceOracle,
  FixedPriceOracle__factory,
  FNSRegistry,
  FNSRegistry__factory,
  Registrar,
  RegistrarController,
  RegistrarController__factory,
  Registrar__factory,
} from "../typechain-types";

export async function deployFNS(deployer: SignerWithAddress): Promise<FNSRegistry> {
  return await new FNSRegistry__factory().connect(deployer).deploy();
}

export async function deployRegistrar(deployer: SignerWithAddress, fns: FNSRegistry): Promise<Registrar> {
  const registrar = await new Registrar__factory().connect(deployer).deploy(fns.address, namehash("fil"));
  await fns.connect(deployer).setSubnodeOwner(RootNode, labelhash("fil"), registrar.address);
  return registrar;
}

export async function deployFixedPriceOracle(deployer: SignerWithAddress): Promise<FixedPriceOracle> {
  return await new FixedPriceOracle__factory().connect(deployer).deploy();
}

export async function deployRegistrarController(
  deployer: SignerWithAddress,
  registrar: Registrar,
  fixedPriceOracle: string,
  reverseRegistrar?: string,
): Promise<RegistrarController> {
  const registrarController = await new RegistrarController__factory()
    .connect(deployer)
    .deploy(registrar.address, fixedPriceOracle, reverseRegistrar ?? AddressZero);
  await registrar.connect(deployer).addController(registrarController.address);
  return registrarController;
}

export const DAY = 24 * 60 * 60;
export const MIN_REG_DURATION = 28 * DAY;
export const YEAR = 365 * DAY;

export const U256_MAX = BigNumber.from("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
