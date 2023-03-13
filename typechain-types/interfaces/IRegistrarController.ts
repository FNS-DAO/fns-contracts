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
} from "../common";

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

export interface IRegistrarControllerInterface extends utils.Interface {
  functions: {
    "available(string)": FunctionFragment;
    "maxExpirationTime()": FunctionFragment;
    "minLengthAvailable()": FunctionFragment;
    "nameExpires(string)": FunctionFragment;
    "register(string,address,uint256,address,bytes[],bool)": FunctionFragment;
    "renew(string,uint256)": FunctionFragment;
    "rentPrice(string,uint256)": FunctionFragment;
    "valid(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "available"
      | "maxExpirationTime"
      | "minLengthAvailable"
      | "nameExpires"
      | "register"
      | "renew"
      | "rentPrice"
      | "valid"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "available",
    values: [PromiseOrValue<string>]
  ): string;
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
    functionFragment: "renew",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rentPrice",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "valid",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rentPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "valid", data: BytesLike): Result;

  events: {
    "MinLengthUpdated(uint256,uint256)": EventFragment;
    "NameRegistered(string,bytes32,address,uint256,uint256,uint256)": EventFragment;
    "NameRenewed(string,bytes32,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinLengthUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameRenewed"): EventFragment;
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

export interface IRegistrarController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRegistrarControllerInterface;

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
    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxExpirationTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    minLengthAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    register(
      name: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IPriceOracle.PriceStructOutput]>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  available(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxExpirationTime(overrides?: CallOverrides): Promise<BigNumber>;

  minLengthAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  nameExpires(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  register(
    name: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    resolver: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>[],
    reverseRecord: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renew(
    name: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rentPrice(
    name: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IPriceOracle.PriceStructOutput>;

  valid(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxExpirationTime(overrides?: CallOverrides): Promise<BigNumber>;

    minLengthAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      name: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IPriceOracle.PriceStructOutput>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
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
  };

  estimateGas: {
    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxExpirationTime(overrides?: CallOverrides): Promise<BigNumber>;

    minLengthAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      name: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    available(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxExpirationTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minLengthAvailable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nameExpires(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      name: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      resolver: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      reverseRecord: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renew(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rentPrice(
      name: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    valid(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
