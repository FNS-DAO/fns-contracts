import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { task, types } from "hardhat/config";
import { YEAR } from "../../test/helper";
import { FixedPriceOracle } from "../../typechain-types";
import { txParams } from "../common";

task("get-prices", "Get the registration prices").setAction(async ({}, hre) => {
  const fixedPriceOracle: FixedPriceOracle = await hre.ethers.getContract("FixedPriceOracle");
  const prices = await getPrices(fixedPriceOracle);
  printPrices(prices);
});

task("set-prices", "Set registration prices")
  .addOptionalParam("l1", "The price of 1-letter name registration for one year", undefined, types.string)
  .addOptionalParam("l2", "The price of 2-letter name registration for one year", undefined, types.string)
  .addOptionalParam("l3", "The price of 3-letter name registration for one year", undefined, types.string)
  .addOptionalParam("l4", "The price of 4-letter name registration for one year", undefined, types.string)
  .addOptionalParam("l5", "The price of >= 5-letter name registration for one year", undefined, types.string)
  .setAction(async ({ l1, l2, l3, l4, l5 }, hre) => {
    const [operator] = await hre.ethers.getSigners();
    const fixedPriceOracle: FixedPriceOracle = await hre.ethers.getContract("FixedPriceOracle");
    const oldPrices = await getPrices(fixedPriceOracle);
    console.log(`Origin prices:`);
    printPrices(oldPrices);
    const newPrices = [l1, l2, l3, l4, l5];
    for (let i = 0; i < newPrices.length; i++) {
      if (newPrices[i]) {
        newPrices[i] = parseEther(newPrices[i]).div(YEAR).div("100000000").mul("100000000");
      } else {
        newPrices[i] = oldPrices[i];
      }
    }
    console.log(`\nNew prices:`);
    printPrices(newPrices);

    const overrides = txParams(await operator.provider!.getFeeData(), await operator.getTransactionCount());
    const tx = await fixedPriceOracle.setBasePrices(
      newPrices[0],
      newPrices[1],
      newPrices[2],
      newPrices[3],
      newPrices[4],
      overrides,
    );
    console.log(`> tx: ${tx.hash}`);
    await tx.wait();
  });

async function getPrices(fixedPriceOracle: FixedPriceOracle): Promise<BigNumber[]> {
  const prices: BigNumber[] = [];
  prices.push(await fixedPriceOracle.price1Letter());
  prices.push(await fixedPriceOracle.price2Letter());
  prices.push(await fixedPriceOracle.price3Letter());
  prices.push(await fixedPriceOracle.price4Letter());
  prices.push(await fixedPriceOracle.price5Letter());
  return prices;
}

function printPrices(prices: BigNumber[]) {
  for (let i = 0; i < prices.length; i++) {
    const price1y = formatEther(prices[i].mul(YEAR));
    console.log(`Len ${i + 1}: ${price1y} FIL/Year`);
  }
}
