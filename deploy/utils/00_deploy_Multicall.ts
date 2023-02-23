import { namehash } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { txParams } from "../../tasks/common";

const PubResolverName = "resolver.fil";
const PubResolverNode = namehash(PubResolverName);

const df: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy } = hre.deployments;
  const [deployer] = await ethers.getSigners();
  const provider = deployer.provider!;
  const overrides = txParams(await provider.getFeeData());

  const deployed = await deploy("Multicall", {
    from: deployer.address,
    ...overrides,
    log: true,
  });
  // const multicall = await ethers.getContract("Multicall", deployer);
};

df.id = "Multicall";
df.tags = ["multicall"];
df.dependencies = [];
export default df;
