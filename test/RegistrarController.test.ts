import { ensNormalize } from "@ethersproject/hash";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { AddressZero, labelhash, RootNode } from "../tasks/common";
import { FixedPriceOracle, FNSRegistry, Registrar, RegistrarController } from "../typechain-types";
import { DAY, deployFixedPriceOracle, deployFNS, deployRegistrar, deployRegistrarController, U256_MAX } from "./helper";
const provider = ethers.provider;

describe("RegistrarController", () => {
  let fns: FNSRegistry;
  let registrar: Registrar;
  let fixedPriceOracle: FixedPriceOracle;
  let registrarController: RegistrarController;

  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;

  before(async function () {
    accounts = await ethers.getSigners();
    [owner, user1, user2] = accounts;

    fns = await deployFNS(owner);
    registrar = await deployRegistrar(owner, fns);
    fixedPriceOracle = await deployFixedPriceOracle(owner);
    registrarController = await deployRegistrarController(owner, registrar, fixedPriceOracle.address);
  });

  describe("Init states", () => {
    it("maxExpirationTime should be 0", async () => {
      expect(await registrarController.maxExpirationTime()).to.eq(0);
    });
    it("minLengthAvailable should be 3", async () => {
      expect(await registrarController.minLengthAvailable()).to.eq(3);
    });
    it("remainRegisterable should be 0", async () => {
      expect(await registrarController.remainRegisterable()).to.eq(0);
    });
    it("Can not register at first", async () => {
      const name = "init-reg";
      const duration = 30 * DAY;
      // register should revert for RegisterCountLimited()
      await expect(register(user1, name, duration)).to.be.revertedWithCustomError(
        registrarController,
        "RegisterCountLimited",
      );
    });
  });

  describe("setMaxExpirationTime", () => {
    it("Non-owner can not setMaxExpirationTime()", async () => {
      const originMaxExpirationTime = await registrarController.maxExpirationTime();
      await expect(
        registrarController.connect(user1).setMaxExpirationTime(originMaxExpirationTime.add(1)),
      ).to.be.revertedWith("Ownable: caller is not the owner");
      // state should not be changed
      expect(await registrarController.maxExpirationTime()).to.eq(originMaxExpirationTime);
    });

    it("Owner can setMaxExpirationTime()", async () => {
      const time = Math.trunc(new Date().getTime() / 1000) + 365 * DAY;
      await registrarController.connect(owner).setMaxExpirationTime(time);
      // state should be changed
      expect(await registrarController.maxExpirationTime()).to.eq(time);

      await registrarController.connect(owner).setMaxExpirationTime(0);
      // state should be changed
      expect(await registrarController.maxExpirationTime()).to.eq(0);
    });
  });

  describe("Register with different maxExpirationTime", () => {
    const nowTime = Math.trunc(new Date().getTime() / 1000);
    const expTime = nowTime + 365 * DAY;

    before(async function () {
      await registrarController.connect(owner).setRemainRegisterable(U256_MAX);
      // setMaxExpirationTime
      await registrarController.connect(owner).setMaxExpirationTime(expTime);
    });

    it("Can register within maxExpirationTime", async () => {
      const name = "register-before-maxExpirationTime";
      const tid = labelhash(name);
      const prevCount = await registrar.balanceOf(user1.address);
      // register 1 fns
      const duration = 30 * DAY;
      await register(user1, name, duration);
      // check register result
      expect(await registrar.nameExpires(tid)).to.gte(nowTime + duration);
      expect(await registrar.balanceOf(user1.address)).to.eq(prevCount.add(1));
      expect(await registrar.ownerOf(tid)).to.eq(user1.address);
    });

    it("Can not register beyond maxExpirationTime", async () => {
      const name = "register-after-maxExpirationTime";
      const duration = expTime - nowTime + 1 * DAY;
      await expect(register(user1, name, duration)).to.be.revertedWithCustomError(
        registrarController,
        "InvalidExpirationTime",
      );
    });

    it("Can register if maxExpirationTime is 0", async () => {
      // setMaxExpirationTime
      await registrarController.connect(owner).setMaxExpirationTime(0);

      const name = "register-with-0-maxExpirationTime";
      const tid = labelhash(name);
      const prevCount = await registrar.balanceOf(user1.address);
      // register 1 fns
      const duration = 10 * 365 * DAY;
      await register(user1, name, duration);
      // check register result
      expect(await registrar.nameExpires(tid)).to.gte(nowTime + duration);
      expect(await registrar.balanceOf(user1.address)).to.eq(prevCount.add(1));
      expect(await registrar.ownerOf(tid)).to.eq(user1.address);
    });
  });

  describe("setMinLengthAvailable", () => {
    it("Non-owner can not setMinLengthAvailable()", async () => {
      const originMinLengthAvailable = await registrarController.minLengthAvailable();
      await expect(
        registrarController.connect(user1).setMaxExpirationTime(originMinLengthAvailable.add(1)),
      ).to.be.revertedWith("Ownable: caller is not the owner");
      // state should not be changed
      expect(await registrarController.minLengthAvailable()).to.eq(originMinLengthAvailable);
    });

    it("Owner can setMinLengthAvailable()", async () => {
      const originMinLengthAvailable = await registrarController.minLengthAvailable();
      await registrarController.connect(owner).setMinLengthAvailable(originMinLengthAvailable.add(1));
      expect(await registrarController.minLengthAvailable()).to.eq(originMinLengthAvailable.add(1));

      for (let i = 1; i < 7; i++) {
        await registrarController.connect(owner).setMinLengthAvailable(i);
        // state should be changed
        expect(await registrarController.minLengthAvailable()).to.eq(i);
      }

      await registrarController.connect(owner).setMinLengthAvailable(originMinLengthAvailable);
      // state should be changed
      expect(await registrarController.minLengthAvailable()).to.eq(originMinLengthAvailable);
    });

    it("Can not setMinLengthAvailable with 0", async () => {
      await expect(registrarController.connect(owner).setMinLengthAvailable(0)).to.be.revertedWithCustomError(
        registrarController,
        "InvalidNameLength",
      );
    });
  });

  describe("Register with different length", () => {
    const duration = 365 * DAY;
    const minLen = 4;

    before(async function () {
      await registrarController.connect(owner).setRemainRegisterable(U256_MAX);
      await registrarController.connect(owner).setMaxExpirationTime(0);
      await registrarController.connect(owner).setMinLengthAvailable(minLen);
    });

    it("Can not register with length < minLengthAvailable", async () => {
      const name = "sho";
      await expect(register(user1, name, duration)).to.be.revertedWithCustomError(
        registrarController,
        "NameNotAvailable",
      );
    });

    it("Can register with length = minLengthAvailable", async () => {
      const name = "same";
      const tid = labelhash(name);
      const prevCount = await registrar.balanceOf(user1.address);
      await register(user1, name, duration);
      // check register result
      expect(await registrar.balanceOf(user1.address)).to.eq(prevCount.add(1));
      expect(await registrar.ownerOf(tid)).to.eq(user1.address);
    });

    it("Can register with length > minLengthAvailable", async () => {
      const names = ["long", "longer", "register-with-long-name"];
      for (let name of names) {
        const tid = labelhash(name);
        const prevCount = await registrar.balanceOf(user1.address);
        await register(user1, name, duration);
        // check register result
        expect(await registrar.balanceOf(user1.address)).to.eq(prevCount.add(1));
        expect(await registrar.ownerOf(tid)).to.eq(user1.address);
      }
    });
  });

  describe("setRemainRegisterable", () => {
    it("Non-owner can not setRemainRegisterable()", async () => {
      const originRemainRegisterable = await registrarController.remainRegisterable();
      const count = 9023187542;
      expect(originRemainRegisterable).to.not.eq(count);
      await expect(registrarController.connect(user1).setRemainRegisterable(count)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
      // state should not be changed
      expect(await registrarController.remainRegisterable()).to.eq(originRemainRegisterable);
    });

    it("Owner can setRemainRegisterable()", async () => {
      const count = 123456789;
      await registrarController.connect(owner).setRemainRegisterable(count);
      // state should be changed
      expect(await registrarController.remainRegisterable()).to.eq(count);

      await registrarController.connect(owner).setRemainRegisterable(U256_MAX);
      // state should be changed
      expect(await registrarController.remainRegisterable()).to.eq(U256_MAX);

      await registrarController.connect(owner).setRemainRegisterable(3);
      // state should be changed
      expect(await registrarController.remainRegisterable()).to.eq(3);
    });
  });

  describe("withdraw", () => {
    before(async function () {
      registrarController.connect(owner).setRemainRegisterable(U256_MAX);
      const duration = 365 * DAY;
      await register(user1, "for-withdraw-only", duration);
      expect(await provider.getBalance(registrarController.address)).to.be.gt(0);
    });

    it("Non-owner can not withdraw", async () => {
      await expect(registrarController.connect(user1).withdraw(user1.address)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
    });

    it("Owner can withdraw", async () => {
      const prevContractBalance = await provider.getBalance(registrarController.address);
      expect(prevContractBalance).to.be.gt(0);
      const prevUserBalance = await provider.getBalance(user2.address);
      await registrarController.connect(owner).withdraw(user2.address);
      expect(await provider.getBalance(registrarController.address)).to.eq(0);
      expect(await provider.getBalance(user2.address)).to.eq(prevUserBalance.add(prevContractBalance));
    });
  });

  async function getPrice(name: string, duration: number): Promise<BigNumber> {
    const prices = await registrarController.rentPrice(name, duration);
    return prices.base.add(prices.premium);
  }

  async function register(user: SignerWithAddress, name: string, duration: number, value?: BigNumber) {
    const price = getPrice(name, duration);
    return registrarController
      .connect(user)
      .register(ensNormalize(name), user.address, duration, AddressZero, [], false, {
        value: value ?? price,
        gasLimit: 10000000,
      });
  }
});
