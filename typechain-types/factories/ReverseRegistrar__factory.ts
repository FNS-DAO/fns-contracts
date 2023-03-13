/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ReverseRegistrar,
  ReverseRegistrarInterface,
} from "../ReverseRegistrar";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FNS",
        name: "_fns",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "ControllerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract NameResolver",
        name: "resolver",
        type: "address",
      },
    ],
    name: "DefaultResolverChanged",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "ReverseClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "claimForAddr",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "claimWithResolver",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "controllers",
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
    inputs: [],
    name: "defaultResolver",
    outputs: [
      {
        internalType: "contract NameResolver",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fns",
    outputs: [
      {
        internalType: "contract FNS",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "node",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "setDefaultResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setNameForAddr",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60a060405234801561001057600080fd5b50604051610d6c380380610d6c83398101604081905261002f91610099565b61003833610049565b6001600160a01b03166080526100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b608051610c7a6100f260003960008181610199015281816102d701526104d50152610c7a6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063b382e4c51161008c578063c66485b211610066578063c66485b2146101e1578063da8c229e146101f4578063e0dba60f14610227578063f2fde38b1461023a57600080fd5b8063b382e4c514610194578063bffbe61c146101bb578063c47f0027146101ce57600080fd5b8063715018a6116100c8578063715018a61461013b5780637a806d6b14610145578063828eab0e146101585780638da5cb5b1461018357600080fd5b80630f5a5466146100ef5780631e83409a146101155780636566963114610128575b600080fd5b6101026100fd366004610982565b61024d565b6040519081526020015b60405180910390f35b6101026101233660046109bb565b610261565b6101026101363660046109d8565b610283565b61014361053c565b005b610102610153366004610ac6565b610550565b60025461016b906001600160a01b031681565b6040516001600160a01b03909116815260200161010c565b6000546001600160a01b031661016b565b61016b7f000000000000000000000000000000000000000000000000000000000000000081565b6101026101c93660046109bb565b6105cb565b6101026101dc366004610b3b565b610626565b6101436101ef3660046109bb565b610643565b6102176102023660046109bb565b60016020526000908152604090205460ff1681565b604051901515815260200161010c565b610143610235366004610b86565b610704565b6101436102483660046109bb565b61076b565b600061025a338484610283565b9392505050565b60025460009061027d90339084906001600160a01b0316610283565b92915050565b6000836001600160a01b0381163314806102ac57503360009081526001602052604090205460ff165b80610342575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa15801561031e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103429190610bb4565b806103515750610351816107e4565b6103ee5760405162461bcd60e51b815260206004820152605b60248201527f526576657273655265676973747261723a2043616c6c6572206973206e6f742060448201527f6120636f6e74726f6c6c6572206f7220617574686f726973656420627920616460648201527f6472657373206f7220746865206164647265737320697473656c660000000000608482015260a4015b60405180910390fd5b60006103f98661085d565b604080517f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2602080830191909152818301849052825180830384018152606090920192839052815191012091925081906001600160a01b038916907f6ada868dd3058cf77a48a74489fd7963688e5464b2b0fa957ace976243270e9290600090a36040516305ef2c7f60e41b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e26004820152602481018390526001600160a01b0387811660448301528681166064830152600060848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b15801561051957600080fd5b505af115801561052d573d6000803e3d6000fd5b50929998505050505050505050565b6105446108c3565b61054e600061091d565b565b60008061055e868686610283565b604051637737221360e01b81529091506001600160a01b0385169063773722139061058f9084908790600401610bd1565b600060405180830381600087803b1580156105a957600080fd5b505af11580156105bd573d6000803e3d6000fd5b509298975050505050505050565b60007f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e26105f78361085d565b604080516020810193909352820152606001604051602081830303815290604052805190602001209050919050565b60025460009061027d90339081906001600160a01b031685610550565b61064b6108c3565b6001600160a01b0381166106ba5760405162461bcd60e51b815260206004820152603060248201527f526576657273655265676973747261723a205265736f6c76657220616464726560448201526f07373206d757374206e6f7420626520360841b60648201526084016103e5565b600280546001600160a01b0319166001600160a01b0383169081179091556040517feae17a84d9eb83d8c8eb317f9e7d64857bc363fa51674d996c023f4340c577cf90600090a250565b61070c6108c3565b6001600160a01b038216600081815260016020908152604091829020805460ff191685151590811790915591519182527f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf87910160405180910390a25050565b6107736108c3565b6001600160a01b0381166107d85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103e5565b6107e18161091d565b50565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610840575060408051601f3d908101601f1916820190925261083d91810190610c27565b60015b61084c57506000919050565b6001600160a01b0316331492915050565b600060285b80156108b757600019016f181899199a1a9b1b9c1cb0b131b232b360811b600f84161a8153601090920491600019016f181899199a1a9b1b9c1cb0b131b232b360811b600f84161a8153601083049250610862565b50506028600020919050565b6000546001600160a01b0316331461054e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103e5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146107e157600080fd5b6000806040838503121561099557600080fd5b82356109a08161096d565b915060208301356109b08161096d565b809150509250929050565b6000602082840312156109cd57600080fd5b813561025a8161096d565b6000806000606084860312156109ed57600080fd5b83356109f88161096d565b92506020840135610a088161096d565b91506040840135610a188161096d565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610a4a57600080fd5b813567ffffffffffffffff80821115610a6557610a65610a23565b604051601f8301601f19908116603f01168101908282118183101715610a8d57610a8d610a23565b81604052838152866020858801011115610aa657600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610adc57600080fd5b8435610ae78161096d565b93506020850135610af78161096d565b92506040850135610b078161096d565b9150606085013567ffffffffffffffff811115610b2357600080fd5b610b2f87828801610a39565b91505092959194509250565b600060208284031215610b4d57600080fd5b813567ffffffffffffffff811115610b6457600080fd5b610b7084828501610a39565b949350505050565b80151581146107e157600080fd5b60008060408385031215610b9957600080fd5b8235610ba48161096d565b915060208301356109b081610b78565b600060208284031215610bc657600080fd5b815161025a81610b78565b82815260006020604081840152835180604085015260005b81811015610c0557858101830151858201606001528201610be9565b506000606082860101526060601f19601f830116850101925050509392505050565b600060208284031215610c3957600080fd5b815161025a8161096d56fea2646970667358221220b26a486d3d1de241804a9ef319ab3ba839b28a9a77bbdd0a3b87eb6f3a06ede564736f6c63430008110033";

type ReverseRegistrarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReverseRegistrarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReverseRegistrar__factory extends ContractFactory {
  constructor(...args: ReverseRegistrarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fns: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReverseRegistrar> {
    return super.deploy(_fns, overrides || {}) as Promise<ReverseRegistrar>;
  }
  override getDeployTransaction(
    _fns: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fns, overrides || {});
  }
  override attach(address: string): ReverseRegistrar {
    return super.attach(address) as ReverseRegistrar;
  }
  override connect(signer: Signer): ReverseRegistrar__factory {
    return super.connect(signer) as ReverseRegistrar__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReverseRegistrarInterface {
    return new utils.Interface(_abi) as ReverseRegistrarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReverseRegistrar {
    return new Contract(address, _abi, signerOrProvider) as ReverseRegistrar;
  }
}
