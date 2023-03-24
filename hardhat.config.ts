import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "./tasks";

import * as dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hyperspace",
  networks: {
    hardhat: {},
    hyperspace: {
      // url: "https://hyperspace.filfox.info/rpc/v1",
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY!],
      chainId: 3141,
      timeout: 100_000,
    },
    filecoin: {
      // url: "https://api.node.glif.io",
      url: "https://filfox.info/rpc/v1",
      // url: "https://rpc.ankr.com/filecoin",
      accounts: [PRIVATE_KEY!],
      chainId: 314,
      timeout: 100_000,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
