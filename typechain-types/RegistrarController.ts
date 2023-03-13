/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IPriceOracle {
  export type PriceStruct = {
    base: PromiseOrValue<BigNumberish>;
    premium: PromiseOrValue<BigNumberish>;
  };

  export type PriceStructOutput = [BigNumber, BigNumber] & {
    base: BigNumber;
    premium: BigNumber;
  };
}

export interface RegistrarControllerInterface extends utils.Interface {
  functions: {
    "MIN_REGISTRATION_DURATION()": FunctionFragment;
    "available(string)": FunctionFragment;
    "base()": FunctionFragment;
    "maxExpirationTime()": FunctionFragment;
    "minLengthAvailable()": FunctionFragment;
    "nameExpires(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "prices()": FunctionFragment;
    "register(string,address,uint256,address,bytes[],bool)": FunctionFragment;
    "remainRegisterable()": FunctionFragment;
    "renew(string,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rentPrice(string,uint256)": FunctionFragment;
    "reverseRegistrar()": FunctionFragment;
    "setMaxExpirationTime(uint256)": FunctionFragment;
    "setMinLengthAvailable(uint256)": FunctionFragment;
    "setPriceOracle(address)": FunctionFragment;
    "setRemainRegisterable(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "valid(string)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawERC20(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MIN_REGISTRATION_DURATION"
      | "available"
      | "base"
      | "maxExpirationTime"
      | "minLengthAvailable"
      | "nameExpires"
      | "owner"
      | "prices"
      | "register"
      | "remainRegisterable"
      | "renew"
      | "renounceOwnership"
      | "rentPrice"
      | "reverseRegistrar"
      | "setMaxExpirationTime"
      | "setMinLengthAvailable"
      | "setPriceOracle"
      | "setRemainRegisterable"
      | "supportsInterface"
      | "transferOwnership"
      | "valid"
      | "withdraw"
      | "withdrawERC20"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MIN_REGISTRATION_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "available",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "base", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxExpirationTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minLengthAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nameExpires",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "prices", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "remainRegisterable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renew",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rentPrice",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reverseRegistrar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxExpirationTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinLengthAvailable",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceOracle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRemainRegisterable",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "valid",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_REGISTRATION_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "base", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxExpirationTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minLengthAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nameExpires",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remainRegisterable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rentPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reverseRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxExpirationTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinLengthAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRemainRegisterable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "valid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;

  events: {
    "MinLengthUpdated(uint256,uint256)": EventFragment;
    "NameRegistered(string,bytes32,address,uint256,uint256,uint256)": EventFragment;
    "NameRenewed(string,bytes32,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinLengthUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameRenewed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface MinLengthUpdatedEventObject {
  oldMinLen: BigNumber;
  newMinLen: BigNumber;
}
export type MinLengthUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  MinLengthUpdatedEventObject
>;

export type MinLengthUpdatedEventFilter =
  TypedEventFilter<MinLengthUpdatedEvent>;

export interface NameRegisteredEventObject {
  name: string;
  label: string;
  owner: string;
  baseCost: BigNumber;
  premium: BigNumber;
  expires: BigNumber;
}
export type NameRegisteredEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber],
  NameRegisteredEventObject
>;

export type NameRegisteredEventFilter = TypedEventFilter<NameRegisteredEvent>;

export interface NameRenewedEventObject {
  name: string;
  label: string;
  cost: BigNumber;
  expires: BigNumber;
}
export type NameRenewedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  NameRenewedEventObject
>;

export type NameRenewedEventFilter = TypedEventFilter<NameRenewedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RegistrarController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistrarControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    base(overrides?: CallOverrides): Promise<[string]>;

    maxExpirationTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    minLengthAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    prices(overrides?: CallOverrides): Promise<[string]>;

    register(
      name: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remainRegisterable(overrides?: CallOverrides): Promise<[BigNumber]>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IPriceOracle.PriceStructOutput] & {
        price: IPriceOracle.PriceStructOutput;
      }
    >;

    reverseRegistrar(overrides?: CallOverrides): Promise<[string]>;

    setMaxExpirationTime(
      expTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinLengthAvailable(
      minLen: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPriceOracle(
      _prices: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRemainRegisterable(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  available(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  base(overrides?: CallOverrides): Promise<string>;

  maxExpirationTime(overrides?: CallOverrides): Promise<BigNumber>;

  minLengthAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  nameExpires(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  prices(overrides?: CallOverrides): Promise<string>;

  register(
    name: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    resolver: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>[],
    reverseRecord: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remainRegisterable(overrides?: CallOverrides): Promise<BigNumber>;

  renew(
    name: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rentPrice(
    name: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IPriceOracle.PriceStructOutput>;

  reverseRegistrar(overrides?: CallOverrides): Promise<string>;

  setMaxExpirationTime(
    expTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinLengthAvailable(
    minLen: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPriceOracle(
    _prices: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRemainRegisterable(
    count: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  valid(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawERC20(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    base(overrides?: CallOverrides): Promise<string>;

    maxExpirationTime(overrides?: CallOverrides): Promise<BigNumber>;

    minLengthAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    prices(overrides?: CallOverrides): Promise<string>;

    register(
      name: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    remainRegisterable(overrides?: CallOverrides): Promise<BigNumber>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IPriceOracle.PriceStructOutput>;

    reverseRegistrar(overrides?: CallOverrides): Promise<string>;

    setMaxExpirationTime(
      expTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinLengthAvailable(
      minLen: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceOracle(
      _prices: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRemainRegisterable(
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MinLengthUpdated(uint256,uint256)"(
      oldMinLen?: null,
      newMinLen?: null
    ): MinLengthUpdatedEventFilter;
    MinLengthUpdated(
      oldMinLen?: null,
      newMinLen?: null
    ): MinLengthUpdatedEventFilter;

    "NameRegistered(string,bytes32,address,uint256,uint256,uint256)"(
      name?: null,
      label?: PromiseOrValue<BytesLike> | null,
      owner?: PromiseOrValue<string> | null,
      baseCost?: null,
      premium?: null,
      expires?: null
    ): NameRegisteredEventFilter;
    NameRegistered(
      name?: null,
      label?: PromiseOrValue<BytesLike> | null,
      owner?: PromiseOrValue<string> | null,
      baseCost?: null,
      premium?: null,
      expires?: null
    ): NameRegisteredEventFilter;

    "NameRenewed(string,bytes32,uint256,uint256)"(
      name?: null,
      label?: PromiseOrValue<BytesLike> | null,
      cost?: null,
      expires?: null
    ): NameRenewedEventFilter;
    NameRenewed(
      name?: null,
      label?: PromiseOrValue<BytesLike> | null,
      cost?: null,
      expires?: null
    ): NameRenewedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    base(overrides?: CallOverrides): Promise<BigNumber>;

    maxExpirationTime(overrides?: CallOverrides): Promise<BigNumber>;

    minLengthAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    prices(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      name: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remainRegisterable(overrides?: CallOverrides): Promise<BigNumber>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reverseRegistrar(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxExpirationTime(
      expTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinLengthAvailable(
      minLen: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPriceOracle(
      _prices: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRemainRegisterable(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_REGISTRATION_DURATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    base(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxExpirationTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minLengthAvailable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prices(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      name: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remainRegisterable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reverseRegistrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMaxExpirationTime(
      expTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinLengthAvailable(
      minLen: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPriceOracle(
      _prices: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRemainRegisterable(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
