/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  FixedPriceOracle,
  FixedPriceOracleInterface,
} from "../FixedPriceOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "premium",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "price",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "base",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256",
          },
        ],
        internalType: "struct IPriceOracle.Price",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1Letter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price2Letter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price3Letter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price4Letter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price5Letter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price5",
        type: "uint256",
      },
    ],
    name: "setBasePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361004e565b6548c273950000600155650746a528800060025564ba43b74000600355641bf08eb0006004556404a817c80060055561009e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610811806100ad6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b1461014c578063a200e15314610167578063a34e359614610170578063cd5d2c7414610183578063d820ed421461018c578063f2fde38b1461019557600080fd5b806301ffc9a7146100b957806316015d4b146100e15780632c0fd74c146100f657806350e9a7151461010d57806359b6b86c1461013b578063715018a614610144575b600080fd5b6100cc6100c7366004610658565b6101a8565b60405190151581526020015b60405180910390f35b6100f46100ef366004610689565b6101df565b005b6100ff60015481565b6040519081526020016100d8565b61012061011b3660046106c4565b61029d565b604080518251815260209283015192810192909252016100d8565b6100ff60055481565b6100f46103c7565b6000546040516001600160a01b0390911681526020016100d8565b6100ff60035481565b6100ff61017e3660046106c4565b6103db565b6100ff60025481565b6100ff60045481565b6100f46101a3366004610743565b610429565b60006001600160e01b031982166301ffc9a760e01b14806101d957506001600160e01b031982166350e9a71560e01b145b92915050565b6101e76104a2565b846000036102265760405162461bcd60e51b81526020600482015260076024820152663020707269636560c81b60448201526064015b60405180910390fd5b838511801561023457508284115b801561023f57508183115b801561024a57508082115b6102865760405162461bcd60e51b815260206004820152600d60248201526c696e76616c696420707269636560981b604482015260640161021d565b600194909455600292909255600355600455600555565b604080518082019091526000808252602082015260006102f286868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104fc92505050565b9050600060058210610313578360055461030c9190610782565b9050610366565b81600403610329578360045461030c9190610782565b8160030361033f578360035461030c9190610782565b81600203610355578360025461030c9190610782565b836001546103639190610782565b90505b60405180604001604052808281526020016103ba89898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b92508a91506105ff9050565b9052979650505050505050565b6103cf6104a2565b6103d96000610608565b565b600061042085858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792508691506105ff9050565b95945050505050565b6104316104a2565b6001600160a01b0381166104965760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161021d565b61049f81610608565b50565b6000546001600160a01b031633146103d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161021d565b8051600090819081905b808210156105f657600085838151811061052257610522610799565b01602001516001600160f81b0319169050600160ff1b8110156105515761054a6001846107af565b92506105e3565b600760fd1b6001600160f81b0319821610156105725761054a6002846107af565b600f60fc1b6001600160f81b0319821610156105935761054a6003846107af565b601f60fb1b6001600160f81b0319821610156105b45761054a6004846107af565b603f60fa1b6001600160f81b0319821610156105d55761054a6005846107af565b6105e06006846107af565b92505b50826105ee816107c2565b935050610506565b50909392505050565b60009392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561066a57600080fd5b81356001600160e01b03198116811461068257600080fd5b9392505050565b600080600080600060a086880312156106a157600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b600080600080606085870312156106da57600080fd5b843567ffffffffffffffff808211156106f257600080fd5b818701915087601f83011261070657600080fd5b81358181111561071557600080fd5b88602082850101111561072757600080fd5b6020928301999098509187013596604001359550909350505050565b60006020828403121561075557600080fd5b81356001600160a01b038116811461068257600080fd5b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176101d9576101d961076c565b634e487b7160e01b600052603260045260246000fd5b808201808211156101d9576101d961076c565b6000600182016107d4576107d461076c565b506001019056fea26469706673582212208c2c8a004b3dc96a15db776698b0ec29725147850af8f149aaae505343a522cd64736f6c63430008110033";

type FixedPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPriceOracle__factory extends ContractFactory {
  constructor(...args: FixedPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FixedPriceOracle> {
    return super.deploy(overrides || {}) as Promise<FixedPriceOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FixedPriceOracle {
    return super.attach(address) as FixedPriceOracle;
  }
  override connect(signer: Signer): FixedPriceOracle__factory {
    return super.connect(signer) as FixedPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPriceOracleInterface {
    return new utils.Interface(_abi) as FixedPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as FixedPriceOracle;
  }
}