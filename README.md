# filns-contracts

FilNS contracts

## Deployments

### Hyperspace Testnet

Multicall: 0x7d130b04797a50fa2a9a80fad01a6a74deaa1f4b
FNSRegistry: 0x889d4f6667ab1aa0a77bc8befbfc9dca5d6ead3d
ReverseRegistrar: 0x7b053507c2e0f9be1632c4b17c2e871c1770cb14
Registrar: 0xf87d4c3c91555fecfe684fa58dd26a817c75892b
FixedPriceOracle: 0xc6eb63fc822d78cd800588584be31ff271e1d458
RegistrarController: 0x12aea3f77ae98b33f27f20825b15e4ab8b381684
PublicResolver: 0xe2c015abb52e22227354f78297f0c2de3807b311

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

```
yarn hardhat fns-contracts
```