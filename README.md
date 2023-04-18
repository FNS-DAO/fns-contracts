# filns-contracts

FilNS contracts

## Deployments

### Filecoin Mainnet

* Multicall: 0x8ccEEf57F2E092562DBB969f38B68711F493b543
* FNSRegistry: 0x916915d0d41EaA8AAEd70b2A5Fb006FFc213961b
* ReverseRegistrar: 0xc49833d827b01e1465c65221A59885Fb71614a26
* Registrar: 0x45d9d6408d5159a379924cf423cb7e15C00fA81f
* FixedPriceOracle: 0x5e838eF42d5D1D8B3F691d7dbFC49D8a9f6aC577
* RegistrarController: 0xDA3c407a23Ef96930f1A07903fB8360D8926991E
* PublicResolver: 0xed9bd04b1BB87Abe2EfF583A977514940c95699c

### Filecoin Mainnet - pre

* FNSRegistry: 0x5eefe33358d32a61aceb2a13640b72bb6f4bfd11
* ReverseRegistrar: 0x805bCf9D3038c0e0F0e8Ab4FbeDaFeD62B300443
* Registrar: 0x6dfb3d26c3b9e45d95ca035cc06033532c08beb9
* FixedPriceOracle: 0xD74A826d67A5E1AC84eB026eeb844053b8fB0b92
* RegistrarController: 0x3d5ec2dbe382e293fa8c6a53f15fb0ef3b070cb6
* PublicResolver: 0x1620524ae061C8Ec6EDBfA19bB6cd138191A834A
* Multicall: 0x6f9221b89F56BC250d78A08B504ab8f5A6f8aDdc

### Hyperspace Testnet

* FNSRegistry: 0xc68c0ef9aec3f1a54921b354eb848482b91d70fe
* ReverseRegistrar: 0xF21FA45eaadABe38F0526CDc178e36093b89D3b1
* Registrar: 0x90E76AE5533E8d588B833A0A96A0308760a63863
* FixedPriceOracle: 0x3891df69Fac2E7104398D41DeC99dFB1962928AF
* RegistrarController: 0xcf38A805f2F5f0b9E96cE6Cfb1059D5CDEDa5cf0
* PublicResolver: 0xb28f7372f27dC2Ef104F2a3347FdcAaA86D2d3Cc
* Multicall: 0x96d9E41B5Febffd8833c2A0723E269aBe0B2e748

## Build

```
yarn install
yarn compile
```

## Show accounts

```
yarn hardhat accounts
```

## Deploy FNS contracts

```
cp .env.example .env
config PRIVATE_KEY in .env
yarn hardhat deploy --tags resolver
```

## Show deployed contracts

Hyperspace testnet:

```
yarn hardhat fns-contracts
```

Filecoin mainnet:
```
yarn hardhat --network filecoin fns-contracts
```
