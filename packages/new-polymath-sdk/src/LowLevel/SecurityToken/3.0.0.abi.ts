export const SecurityTokenAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_types",
        "type": "uint8[]"
      },
      {
        "indexed": true,
        "name": "_name",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "_moduleFactory",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_module",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_moduleCost",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_budget",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_label",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "_archived",
        "type": "bool"
      }
    ],
    "name": "ModuleAdded",
    "type": "event",
    "signature": "0xfa9cc8faf0fe9bebcaababb6b67c5a679d4fdec88527e4ca823ee0f91e9c0928"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x06fdde03"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_oldDetails",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_newDetails",
        "type": "string"
      }
    ],
    "name": "UpdateTokenDetails",
    "type": "event",
    "signature": "0x4f5dc3feea8c186b1481cfe57c28df8871a61e3be16f7d65c60504cfd6344067"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tokenDetails",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd6abe110"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_oldName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_newName",
        "type": "string"
      }
    ],
    "name": "UpdateTokenName",
    "type": "event",
    "signature": "0x99b81fd13cfa16f6b748b388ac4e3059f0d9e1166c6c99b07ff0f4aa308ca43c"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_oldGranularity",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_newGranularity",
        "type": "uint256"
      }
    ],
    "name": "GranularityChanged",
    "type": "event",
    "signature": "0x7728e5c461dd94b32a33e149f4ef6b674a7eff704cac77b26937eaced90f0038"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "FreezeIssuance",
    "type": "event",
    "signature": "0x9ea7d0a14bc31ddf4821c86966910e35bd82b51f74bde7d3704498e0fb92e1f1"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_status",
        "type": "bool"
      }
    ],
    "name": "FreezeTransfers",
    "type": "event",
    "signature": "0xac199452244e92d1343195dfad0a5347b229c861e3a8f2fbf08ab519b1d55bc9"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_checkpointId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_investorLength",
        "type": "uint256"
      }
    ],
    "name": "CheckpointCreated",
    "type": "event",
    "signature": "0x624ea167e477f9d39f7f4094b9dfe2e6346eb4a7aada54338db51abd554c4b9f"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_oldController",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_newController",
        "type": "address"
      }
    ],
    "name": "SetController",
    "type": "event",
    "signature": "0x9fdb07212c6f92fd298affc4000712177664bc3c4cae5f61098d42da6d05be1e"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_oldTreasuryWallet",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_newTreasuryWallet",
        "type": "address"
      }
    ],
    "name": "TreasuryWalletChanged",
    "type": "event",
    "signature": "0x419d718138b0b65d09976f881eed8b8d7075d4b6092f74af0a0ec9b3417cdd12"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "DisableController",
    "type": "event",
    "signature": "0xf7ec83c37617f91085fc1725f4839e41a03238811eaebd2dbc4a405354cc958e"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_major",
        "type": "uint8"
      },
      {
        "indexed": false,
        "name": "_minor",
        "type": "uint8"
      },
      {
        "indexed": false,
        "name": "_patch",
        "type": "uint8"
      }
    ],
    "name": "TokenUpgraded",
    "type": "event",
    "signature": "0x23af9b477abf9645be8a074be19ae4a47e11abc43bd1aa47b16de7eb85609302"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_types",
        "type": "uint8[]"
      },
      {
        "indexed": false,
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleArchived",
    "type": "event",
    "signature": "0x78914da53c30c0667830d562877caed5c20adc645b8557fa64336c22a9b8ece6"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_types",
        "type": "uint8[]"
      },
      {
        "indexed": false,
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleUnarchived",
    "type": "event",
    "signature": "0xe69e438aa3b4b943ac4c807820403a6e5815b8fbb7fccfac629fce87ff6d430d"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_types",
        "type": "uint8[]"
      },
      {
        "indexed": false,
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleRemoved",
    "type": "event",
    "signature": "0xf4e9f735975718dce0ac83fb73f88a1b19a48186af0f6348c04c6229eb4b86a0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_moduleTypes",
        "type": "uint8[]"
      },
      {
        "indexed": false,
        "name": "_module",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_oldBudget",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_budget",
        "type": "uint256"
      }
    ],
    "name": "ModuleBudgetChanged",
    "type": "event",
    "signature": "0xa00a1c33ebb7433724919cb1059328c16265f935ef84a13442045da3e81c0ccc"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_fromPartition",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_data",
        "type": "bytes"
      },
      {
        "indexed": false,
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "TransferByPartition",
    "type": "event",
    "signature": "0xff4e9a26af4eb73b8bacfaa4abd4fea03d9448e7b912dc5ff4019048875aa2d4"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenHolder",
        "type": "address"
      }
    ],
    "name": "AuthorizedOperator",
    "type": "event",
    "signature": "0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenHolder",
        "type": "address"
      }
    ],
    "name": "RevokedOperator",
    "type": "event",
    "signature": "0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "partition",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenHolder",
        "type": "address"
      }
    ],
    "name": "AuthorizedOperatorByPartition",
    "type": "event",
    "signature": "0x3646a897c70797ecc134b0adc32f471b07bf1d6f451133b0384badab531e3fd6"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "partition",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenHolder",
        "type": "address"
      }
    ],
    "name": "RevokedOperatorByPartition",
    "type": "event",
    "signature": "0x3b287c4f1bab4df949b33bceacef984f544dc5d5479930d00e4ee8c9d8dd96f2"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "partition",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "IssuedByPartition",
    "type": "event",
    "signature": "0x6032e2468b0f94dfa63c61d6c8a84842a99c049263eae408a52b945020b6578d"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "partition",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "bytes"
      },
      {
        "indexed": false,
        "name": "operatorData",
        "type": "bytes"
      }
    ],
    "name": "RedeemedByPartition",
    "type": "event",
    "signature": "0xa4f62471c9bdf88115b97203943c74c59b655913ee5ee592706d84ef53fb6be2"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_controller",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_data",
        "type": "bytes"
      },
      {
        "indexed": false,
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "ControllerTransfer",
    "type": "event",
    "signature": "0x6bf62b4b9c7b768275122bf70d429efc398a056d669b1efdf6c3976346246d7d"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_controller",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_tokenHolder",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_data",
        "type": "bytes"
      },
      {
        "indexed": false,
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "ControllerRedemption",
    "type": "event",
    "signature": "0x876b7cb47aa150b3a5516188b19ed308752ad4d0ae9a702543353b78163f7589"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_name",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "_uri",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_documentHash",
        "type": "bytes32"
      }
    ],
    "name": "DocumentRemoved",
    "type": "event",
    "signature": "0x3d9bba27d3e360d8c80645beed7e991454a8271bf6f269a24f7782be0f0d0654"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_name",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "_uri",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_documentHash",
        "type": "bytes32"
      }
    ],
    "name": "DocumentUpdated",
    "type": "event",
    "signature": "0xb4c22d60cd550a815744f04e3ff5278bf19684565ee00e2b084041b6024bd6f6"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "Issued",
    "type": "event",
    "signature": "0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "Redeemed",
    "type": "event",
    "signature": "0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event",
    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "canTransfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bytes1"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "canTransferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bytes1"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "canTransferByPartition",
    "outputs": [
      {
        "name": "",
        "type": "bytes1"
      },
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes32"
      },
      {
        "name": "_uri",
        "type": "string"
      },
      {
        "name": "_documentHash",
        "type": "bytes32"
      }
    ],
    "name": "setDocument",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes32"
      }
    ],
    "name": "removeDocument",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes32"
      }
    ],
    "name": "getDocument",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllDocuments",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isControllable",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      },
      {
        "name": "_type",
        "type": "uint8"
      }
    ],
    "name": "isModule",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_tokenHolder",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "issue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_tokenHolders",
        "type": "address[]"
      },
      {
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "issueMulti",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_tokenHolder",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "issueByPartition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "redeemByPartition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "redeem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_tokenHolder",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "redeemFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_tokenHolder",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "operatorRedeemByPartition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_delegate",
        "type": "address"
      },
      {
        "name": "_module",
        "type": "address"
      },
      {
        "name": "_perm",
        "type": "bytes32"
      }
    ],
    "name": "checkPermission",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "getModule",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "uint8[]"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes32"
      }
    ],
    "name": "getModulesByName",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_type",
        "type": "uint8"
      }
    ],
    "name": "getModulesByType",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTreasuryWallet",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_checkpointId",
        "type": "uint256"
      }
    ],
    "name": "totalSupplyAt",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_investor",
        "type": "address"
      },
      {
        "name": "_checkpointId",
        "type": "uint256"
      }
    ],
    "name": "balanceOfAt",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "createCheckpoint",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCheckpointTimes",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getInvestors",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_checkpointId",
        "type": "uint256"
      }
    ],
    "name": "getInvestorsAt",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_checkpointId",
        "type": "uint256"
      },
      {
        "name": "_start",
        "type": "uint256"
      },
      {
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "getInvestorsSubsetAt",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_start",
        "type": "uint256"
      },
      {
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "iterateInvestors",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "currentCheckpointId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_tokenHolder",
        "type": "address"
      }
    ],
    "name": "isOperator",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_tokenHolder",
        "type": "address"
      }
    ],
    "name": "isOperatorForPartition",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_tokenHolder",
        "type": "address"
      }
    ],
    "name": "partitionsOf",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "dataStore",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_dataStore",
        "type": "address"
      }
    ],
    "name": "changeDataStore",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "changeTreasuryWallet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_tokenContract",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "withdrawERC20",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      },
      {
        "name": "_change",
        "type": "uint256"
      },
      {
        "name": "_increase",
        "type": "bool"
      }
    ],
    "name": "changeModuleBudget",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newTokenDetails",
        "type": "string"
      }
    ],
    "name": "updateTokenDetails",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "changeName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_granularity",
        "type": "uint256"
      }
    ],
    "name": "changeGranularity",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "freezeTransfers",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unfreezeTransfers",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "freezeIssuance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_moduleFactory",
        "type": "address"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_maxCost",
        "type": "uint256"
      },
      {
        "name": "_budget",
        "type": "uint256"
      },
      {
        "name": "_label",
        "type": "bytes32"
      },
      {
        "name": "_archived",
        "type": "bool"
      }
    ],
    "name": "addModuleWithLabel",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_moduleFactory",
        "type": "address"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_maxCost",
        "type": "uint256"
      },
      {
        "name": "_budget",
        "type": "uint256"
      },
      {
        "name": "_archived",
        "type": "bool"
      }
    ],
    "name": "addModule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "archiveModule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "unarchiveModule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "removeModule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_controller",
        "type": "address"
      }
    ],
    "name": "setController",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "controllerTransfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_tokenHolder",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "controllerRedeem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "disableController",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getVersion",
    "outputs": [
      {
        "name": "",
        "type": "uint8[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getInvestorCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "holderCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "transferWithData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "transferFromWithData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "transferByPartition",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_tokenHolder",
        "type": "address"
      }
    ],
    "name": "balanceOfByPartition",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "granularity",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "polymathRegistry",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "upgradeModule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "upgradeToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isIssuable",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "authorizeOperator",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "revokeOperator",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "authorizeOperatorByPartition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "revokeOperatorByPartition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_partition",
        "type": "bytes32"
      },
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_operatorData",
        "type": "bytes"
      }
    ],
    "name": "operatorTransferByPartition",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "transfersFrozen",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];