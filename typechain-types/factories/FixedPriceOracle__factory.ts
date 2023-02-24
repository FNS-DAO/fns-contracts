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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261007060201b60201c565b61007860201b60201c565b6548c273950000600181905550650746a528800060028190555064ba43b74000600381905550641bf08eb0006004819055506404a817c80060058190555061013c565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6110568061014b6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b1461017b578063a200e15314610199578063a34e3596146101b7578063cd5d2c74146101e7578063d820ed4214610205578063f2fde38b14610223576100b4565b806301ffc9a7146100b957806316015d4b146100e95780632c0fd74c1461010557806350e9a7151461012357806359b6b86c14610153578063715018a614610171575b600080fd5b6100d360048036038101906100ce91906109f8565b61023f565b6040516100e09190610a40565b60405180910390f35b61010360048036038101906100fe9190610a91565b610311565b005b61010d6103e9565b60405161011a9190610b1b565b60405180910390f35b61013d60048036038101906101389190610b9b565b6103ef565b60405161014a9190610c4d565b60405180910390f35b61015b610541565b6040516101689190610b1b565b60405180910390f35b610179610547565b005b61018361055b565b6040516101909190610ca9565b60405180910390f35b6101a1610584565b6040516101ae9190610b1b565b60405180910390f35b6101d160048036038101906101cc9190610b9b565b61058a565b6040516101de9190610b1b565b60405180910390f35b6101ef6105e5565b6040516101fc9190610b1b565b60405180910390f35b61020d6105eb565b60405161021a9190610b1b565b60405180910390f35b61023d60048036038101906102389190610cf0565b6105f1565b005b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061030a57507f50e9a715000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b610319610674565b6000850361035c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035390610d7a565b60405180910390fd5b838511801561036a57508284115b801561037557508183115b801561038057508082115b6103bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b690610de6565b60405180910390fd5b84600181905550836002819055508260038190555081600481905550806005819055505050505050565b60015481565b6103f761097c565b600061044686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506106f2565b905060006005821061046757836005546104609190610e35565b90506104d2565b60048203610484578360045461047d9190610e35565b90506104d1565b600382036104a1578360035461049a9190610e35565b90506104d0565b600282036104be57836002546104b79190610e35565b90506104cf565b836001546104cc9190610e35565b90505b5b5b5b604051806040016040528082815260200161053289898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505088886108a7565b81525092505050949350505050565b60055481565b61054f610674565b61055960006108b0565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b60006105db85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505084846108a7565b9050949350505050565b60025481565b60045481565b6105f9610674565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90610ee9565b60405180910390fd5b610671816108b0565b50565b61067c610974565b73ffffffffffffffffffffffffffffffffffffffff1661069a61055b565b73ffffffffffffffffffffffffffffffffffffffff16146106f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e790610f55565b60405180910390fd5b565b60008060008084519050600092505b8082101561089c57600085838151811061071e5761071d610f75565b5b602001015160f81c60f81b9050608060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916101561076d576001836107669190610fa4565b9250610888565b60e060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191610156107af576002836107a89190610fa4565b9250610887565b60f060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191610156107f1576003836107ea9190610fa4565b9250610886565b60f8801b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191610156108325760048361082b9190610fa4565b9250610885565b60fc60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191610156108745760058361086d9190610fa4565b9250610884565b6006836108819190610fa4565b92505b5b5b5b5b50828061089490610fd8565b935050610701565b829350505050919050565b60009392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b604051806040016040528060008152602001600081525090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6109d5816109a0565b81146109e057600080fd5b50565b6000813590506109f2816109cc565b92915050565b600060208284031215610a0e57610a0d610996565b5b6000610a1c848285016109e3565b91505092915050565b60008115159050919050565b610a3a81610a25565b82525050565b6000602082019050610a556000830184610a31565b92915050565b6000819050919050565b610a6e81610a5b565b8114610a7957600080fd5b50565b600081359050610a8b81610a65565b92915050565b600080600080600060a08688031215610aad57610aac610996565b5b6000610abb88828901610a7c565b9550506020610acc88828901610a7c565b9450506040610add88828901610a7c565b9350506060610aee88828901610a7c565b9250506080610aff88828901610a7c565b9150509295509295909350565b610b1581610a5b565b82525050565b6000602082019050610b306000830184610b0c565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610b5b57610b5a610b36565b5b8235905067ffffffffffffffff811115610b7857610b77610b3b565b5b602083019150836001820283011115610b9457610b93610b40565b5b9250929050565b60008060008060608587031215610bb557610bb4610996565b5b600085013567ffffffffffffffff811115610bd357610bd261099b565b5b610bdf87828801610b45565b94509450506020610bf287828801610a7c565b9250506040610c0387828801610a7c565b91505092959194509250565b610c1881610a5b565b82525050565b604082016000820151610c346000850182610c0f565b506020820151610c476020850182610c0f565b50505050565b6000604082019050610c626000830184610c1e565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c9382610c68565b9050919050565b610ca381610c88565b82525050565b6000602082019050610cbe6000830184610c9a565b92915050565b610ccd81610c88565b8114610cd857600080fd5b50565b600081359050610cea81610cc4565b92915050565b600060208284031215610d0657610d05610996565b5b6000610d1484828501610cdb565b91505092915050565b600082825260208201905092915050565b7f3020707269636500000000000000000000000000000000000000000000000000600082015250565b6000610d64600783610d1d565b9150610d6f82610d2e565b602082019050919050565b60006020820190508181036000830152610d9381610d57565b9050919050565b7f696e76616c696420707269636500000000000000000000000000000000000000600082015250565b6000610dd0600d83610d1d565b9150610ddb82610d9a565b602082019050919050565b60006020820190508181036000830152610dff81610dc3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e4082610a5b565b9150610e4b83610a5b565b9250828202610e5981610a5b565b91508282048414831517610e7057610e6f610e06565b5b5092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ed3602683610d1d565b9150610ede82610e77565b604082019050919050565b60006020820190508181036000830152610f0281610ec6565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610f3f602083610d1d565b9150610f4a82610f09565b602082019050919050565b60006020820190508181036000830152610f6e81610f32565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610faf82610a5b565b9150610fba83610a5b565b9250828201905080821115610fd257610fd1610e06565b5b92915050565b6000610fe382610a5b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361101557611014610e06565b5b60018201905091905056fea2646970667358221220090a827b6b0a6218becf041d9995561a6ab461a2be27d618bb1f62544267284364736f6c63430008110033";

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
