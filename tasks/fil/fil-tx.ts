import { task } from "hardhat/config";
import { CID } from 'multiformats/cid';

task("fil-tx", "Get filecoin transaction")
  .addVariadicPositionalParam("tx", "Transactions in cid or hex format", ["0x8822caa3a4f80d1a6ff37cb7a97cbd51669f84ff8e6d2e16ea9e64fca7a4e2d6", "bafy2bzacececfsvdut4a2gtp6n6lpkl4xviwnh4e76hg2lqw5kpgj7fhutrnm"])
  .setAction(async ({ tx: txs }, hre) => {
    const provider = hre.ethers.provider;
    // console.log(await provider.getBalance("0x0000000000000000000000000000000000000000"));
    for (const txHash of txs) {
      // todo: convert cid to hex format
      // CID.parse("ok");
      const txDetail = await provider.getTransaction(txHash);
      console.log(`${JSON.stringify(txDetail, null, 2)}`);
    }
  });;