//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorInterfaceABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'current',
        internalType: 'int256',
        type: 'int256',
        indexed: true,
      },
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'updatedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AnswerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startedBy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'startedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewRound',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorV2V3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorV2V3InterfaceABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'current',
        internalType: 'int256',
        type: 'int256',
        indexed: true,
      },
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'updatedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AnswerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startedBy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'startedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewRound',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorV3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorV3InterfaceABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConfirmedOwner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const confirmedOwnerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConfirmedOwnerWithProposal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const confirmedOwnerWithProposalABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'newOwner', internalType: 'address', type: 'address' },
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721URIStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721UriStorageABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsBilling
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsBillingABI = [
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  {
    type: 'error',
    inputs: [{ name: 'linkWei', internalType: 'int256', type: 'int256' }],
    name: 'InvalidLinkWeiPrice',
  },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'NoTransmittersSet' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouter' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouterOwner' },
  { type: 'error', inputs: [], name: 'PaymentTooLarge' },
  { type: 'error', inputs: [], name: 'RouterMustBeSet' },
  { type: 'error', inputs: [], name: 'UnauthorizedSender' },
  { type: 'error', inputs: [], name: 'UnsupportedRequestDataVersion' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CommitmentDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
        indexed: false,
      },
    ],
    name: 'ConfigUpdated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'requestId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'deleteCommitment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'gasPriceWei', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateCost',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: '',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'getDONFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getWeiPerUnitLink',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'oracleWithdrawAll',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
    ],
    name: 'updateConfig',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsClient
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsClientABI = [
  { type: 'error', inputs: [], name: 'OnlyRouterCanFulfill' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestSent',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsCoordinator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsCoordinatorABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'router', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
      { name: 'linkToNativeFeed', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'EmptyPublicKey' },
  { type: 'error', inputs: [], name: 'InconsistentReportData' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  {
    type: 'error',
    inputs: [{ name: 'message', internalType: 'string', type: 'string' }],
    name: 'InvalidConfig',
  },
  {
    type: 'error',
    inputs: [{ name: 'linkWei', internalType: 'int256', type: 'int256' }],
    name: 'InvalidLinkWeiPrice',
  },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'NoTransmittersSet' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouter' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouterOwner' },
  { type: 'error', inputs: [], name: 'PaymentTooLarge' },
  { type: 'error', inputs: [], name: 'ReportInvalid' },
  { type: 'error', inputs: [], name: 'RouterMustBeSet' },
  { type: 'error', inputs: [], name: 'UnauthorizedPublicKeyChange' },
  { type: 'error', inputs: [], name: 'UnauthorizedSender' },
  { type: 'error', inputs: [], name: 'UnsupportedRequestDataVersion' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CommitmentDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousConfigBlockNumber',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'configCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'signers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'transmitters',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      { name: 'f', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'onchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'offchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'ConfigSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
        indexed: false,
      },
    ],
    name: 'ConfigUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'requestingContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'requestInitiator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'subscriptionOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'dataVersion',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'flags',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'callbackGasLimit',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
        indexed: false,
      },
    ],
    name: 'OracleRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'transmitter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'OracleResponse',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      { name: 'epoch', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'Transmitted',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'requestId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'deleteCommitment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'gasPriceWei', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateCost',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: '',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'getDONFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDONPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getThresholdPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getWeiPerUnitLink',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDetails',
    outputs: [
      { name: 'configCount', internalType: 'uint32', type: 'uint32' },
      { name: 'blockNumber', internalType: 'uint32', type: 'uint32' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDigestAndEpoch',
    outputs: [
      { name: 'scanLogs', internalType: 'bool', type: 'bool' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'epoch', internalType: 'uint32', type: 'uint32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'oracleWithdrawAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_signers', internalType: 'address[]', type: 'address[]' },
      { name: '_transmitters', internalType: 'address[]', type: 'address[]' },
      { name: '_f', internalType: 'uint8', type: 'uint8' },
      { name: '_onchainConfig', internalType: 'bytes', type: 'bytes' },
      {
        name: '_offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
      },
      { name: '_offchainConfig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setConfig',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'donPublicKey', internalType: 'bytes', type: 'bytes' }],
    name: 'setDONPublicKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'thresholdPublicKey', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setThresholdPublicKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct FunctionsResponse.RequestMeta',
        type: 'tuple',
        components: [
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'requestingContract',
            internalType: 'address',
            type: 'address',
          },
          { name: 'availableBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'initiatedRequests', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
          { name: 'completedRequests', internalType: 'uint64', type: 'uint64' },
          {
            name: 'subscriptionOwner',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
    name: 'startRequest',
    outputs: [
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'reportContext', internalType: 'bytes32[3]', type: 'bytes32[3]' },
      { name: 'report', internalType: 'bytes', type: 'bytes' },
      { name: 'rs', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'ss', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'rawVs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transmit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'transmitters',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
    ],
    name: 'updateConfig',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsCoordinatorTestHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsCoordinatorTestHelperABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'router', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
      { name: 'linkToNativeFeed', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'EmptyPublicKey' },
  { type: 'error', inputs: [], name: 'InconsistentReportData' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  {
    type: 'error',
    inputs: [{ name: 'message', internalType: 'string', type: 'string' }],
    name: 'InvalidConfig',
  },
  {
    type: 'error',
    inputs: [{ name: 'linkWei', internalType: 'int256', type: 'int256' }],
    name: 'InvalidLinkWeiPrice',
  },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'NoTransmittersSet' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouter' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouterOwner' },
  { type: 'error', inputs: [], name: 'PaymentTooLarge' },
  { type: 'error', inputs: [], name: 'ReportInvalid' },
  { type: 'error', inputs: [], name: 'RouterMustBeSet' },
  { type: 'error', inputs: [], name: 'UnauthorizedPublicKeyChange' },
  { type: 'error', inputs: [], name: 'UnauthorizedSender' },
  { type: 'error', inputs: [], name: 'UnsupportedRequestDataVersion' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CommitmentDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousConfigBlockNumber',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'configCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'signers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'transmitters',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      { name: 'f', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'onchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'offchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'ConfigSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
        indexed: false,
      },
    ],
    name: 'ConfigUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'requestingContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'requestInitiator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'subscriptionOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'dataVersion',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'flags',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'callbackGasLimit',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
        indexed: false,
      },
    ],
    name: 'OracleRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'transmitter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'OracleResponse',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      { name: 'epoch', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'Transmitted',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'report', internalType: 'bytes', type: 'bytes' }],
    name: 'callReport',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'report', internalType: 'bytes', type: 'bytes' },
      { name: 'secondSigner', internalType: 'address', type: 'address' },
    ],
    name: 'callReportMultipleSigners',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'report', internalType: 'bytes', type: 'bytes' },
      { name: 'signers', internalType: 'address[31]', type: 'address[31]' },
    ],
    name: 'callReportWithSigners',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'requestId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'deleteCommitment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'gasPriceWei', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateCost',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: '',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'getDONFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDONPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getThresholdPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getWeiPerUnitLink',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDetails',
    outputs: [
      { name: 'configCount', internalType: 'uint32', type: 'uint32' },
      { name: 'blockNumber', internalType: 'uint32', type: 'uint32' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDigestAndEpoch',
    outputs: [
      { name: 'scanLogs', internalType: 'bool', type: 'bool' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'epoch', internalType: 'uint32', type: 'uint32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'oracleWithdrawAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_signers', internalType: 'address[]', type: 'address[]' },
      { name: '_transmitters', internalType: 'address[]', type: 'address[]' },
      { name: '_f', internalType: 'uint8', type: 'uint8' },
      { name: '_onchainConfig', internalType: 'bytes', type: 'bytes' },
      {
        name: '_offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
      },
      { name: '_offchainConfig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setConfig',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'donPublicKey', internalType: 'bytes', type: 'bytes' }],
    name: 'setDONPublicKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'thresholdPublicKey', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setThresholdPublicKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct FunctionsResponse.RequestMeta',
        type: 'tuple',
        components: [
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'requestingContract',
            internalType: 'address',
            type: 'address',
          },
          { name: 'availableBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'initiatedRequests', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
          { name: 'completedRequests', internalType: 'uint64', type: 'uint64' },
          {
            name: 'subscriptionOwner',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
    name: 'startRequest',
    outputs: [
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'reportContext', internalType: 'bytes32[3]', type: 'bytes32[3]' },
      { name: 'report', internalType: 'bytes', type: 'bytes' },
      { name: 'rs', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'ss', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'rawVs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transmit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'transmitters',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsBilling.Config',
        type: 'tuple',
        components: [
          {
            name: 'fulfillmentGasPriceOverEstimationBP',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'feedStalenessSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint32',
            type: 'uint32',
          },
          {
            name: 'requestTimeoutSeconds',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'maxSupportedRequestDataVersion',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'fallbackNativePerUnitLink',
            internalType: 'uint224',
            type: 'uint224',
          },
        ],
      },
    ],
    name: 'updateConfig',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsRequest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsRequestABI = [
  { type: 'error', inputs: [], name: 'EmptyArgs' },
  { type: 'error', inputs: [], name: 'EmptySecrets' },
  { type: 'error', inputs: [], name: 'EmptySource' },
  { type: 'error', inputs: [], name: 'NoInlineSecrets' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'REQUEST_DATA_VERSION',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsRouterABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'linkToken', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct FunctionsRouter.Config',
        type: 'tuple',
        components: [
          {
            name: 'maxConsumersPerSubscription',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'handleOracleFulfillmentSelector',
            internalType: 'bytes4',
            type: 'bytes4',
          },
          {
            name: 'gasForCallExactCheck',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'maxCallbackGasLimits',
            internalType: 'uint32[]',
            type: 'uint32[]',
          },
          {
            name: 'subscriptionDepositMinimumRequests',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'subscriptionDepositJuels',
            internalType: 'uint72',
            type: 'uint72',
          },
        ],
      },
    ],
  },
  { type: 'error', inputs: [], name: 'CannotRemoveWithPendingRequests' },
  {
    type: 'error',
    inputs: [{ name: 'requestId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'DuplicateRequestId',
  },
  { type: 'error', inputs: [], name: 'EmptyRequestData' },
  {
    type: 'error',
    inputs: [{ name: 'limit', internalType: 'uint32', type: 'uint32' }],
    name: 'GasLimitTooBig',
  },
  {
    type: 'error',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'IdentifierIsReserved',
  },
  {
    type: 'error',
    inputs: [
      { name: 'currentBalanceJuels', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'InsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  { type: 'error', inputs: [], name: 'InvalidConsumer' },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint8', type: 'uint8' }],
    name: 'InvalidGasFlagValue',
  },
  { type: 'error', inputs: [], name: 'InvalidProposal' },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [
      { name: 'proposedOwner', internalType: 'address', type: 'address' },
    ],
    name: 'MustBeProposedOwner',
  },
  { type: 'error', inputs: [], name: 'MustBeSubscriptionOwner' },
  { type: 'error', inputs: [], name: 'OnlyCallableFromCoordinator' },
  { type: 'error', inputs: [], name: 'OnlyCallableFromLink' },
  {
    type: 'error',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'RouteNotFound',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderMustAcceptTermsOfService',
  },
  { type: 'error', inputs: [], name: 'TimeoutNotExceeded' },
  {
    type: 'error',
    inputs: [
      { name: 'maximumConsumers', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'TooManyConsumers',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '',
        internalType: 'struct FunctionsRouter.Config',
        type: 'tuple',
        components: [
          {
            name: 'maxConsumersPerSubscription',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'handleOracleFulfillmentSelector',
            internalType: 'bytes4',
            type: 'bytes4',
          },
          {
            name: 'gasForCallExactCheck',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'maxCallbackGasLimits',
            internalType: 'uint32[]',
            type: 'uint32[]',
          },
          {
            name: 'subscriptionDepositMinimumRequests',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'subscriptionDepositJuels',
            internalType: 'uint72',
            type: 'uint72',
          },
        ],
        indexed: false,
      },
    ],
    name: 'ConfigUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposedContractSetId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'proposedContractSetFromAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'proposedContractSetToAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ContractProposed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'ContractUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FundsRecovered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'coordinator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'transmitter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'resultCode',
        internalType: 'enum FunctionsResponse.FulfillResult',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'RequestNotProcessed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'totalCostJuels',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      {
        name: 'transmitter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'resultCode',
        internalType: 'enum FunctionsResponse.FulfillResult',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'response',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      { name: 'err', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'callbackReturnData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'RequestProcessed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'donId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'subscriptionOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'requestingContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'requestInitiator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'dataVersion',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'callbackGasLimit',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'estimatedTotalCostJuels',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'RequestStart',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RequestTimedOut',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'fundsRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'fundsAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'oldBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_CALLBACK_RETURN_BYTES',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'consumer', internalType: 'address', type: 'address' }],
    name: 'createSubscriptionWithConsumer',
    outputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
      { name: 'juelsPerGas', internalType: 'uint96', type: 'uint96' },
      { name: 'costWithoutCallback', internalType: 'uint96', type: 'uint96' },
      { name: 'transmitter', internalType: 'address', type: 'address' },
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'fulfill',
    outputs: [
      {
        name: 'resultCode',
        internalType: 'enum FunctionsResponse.FulfillResult',
        type: 'uint8',
      },
      { name: '', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllowListId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: '',
        internalType: 'struct FunctionsRouter.Config',
        type: 'tuple',
        components: [
          {
            name: 'maxConsumersPerSubscription',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'handleOracleFulfillmentSelector',
            internalType: 'bytes4',
            type: 'bytes4',
          },
          {
            name: 'gasForCallExactCheck',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'maxCallbackGasLimits',
            internalType: 'uint32[]',
            type: 'uint32[]',
          },
          {
            name: 'subscriptionDepositMinimumRequests',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'subscriptionDepositJuels',
            internalType: 'uint72',
            type: 'uint72',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'client', internalType: 'address', type: 'address' },
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getConsumer',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Consumer',
        type: 'tuple',
        components: [
          { name: 'allowed', internalType: 'bool', type: 'bool' },
          { name: 'initiatedRequests', internalType: 'uint64', type: 'uint64' },
          { name: 'completedRequests', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getContractById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getFlags',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getProposedContractById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getProposedContractSet',
    outputs: [
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: '', internalType: 'address[]', type: 'address[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSubscription',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Subscription',
        type: 'tuple',
        components: [
          { name: 'balance', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'blockedBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'proposedOwner', internalType: 'address', type: 'address' },
          { name: 'consumers', internalType: 'address[]', type: 'address[]' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSubscriptionCount',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionIdStart', internalType: 'uint64', type: 'uint64' },
      { name: 'subscriptionIdEnd', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSubscriptionsInRange',
    outputs: [
      {
        name: 'subscriptions',
        internalType: 'struct IFunctionsSubscriptions.Subscription[]',
        type: 'tuple[]',
        components: [
          { name: 'balance', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'blockedBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'proposedOwner', internalType: 'address', type: 'address' },
          { name: 'consumers', internalType: 'address[]', type: 'address[]' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'isValidCallbackGasLimit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onTokenTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'ownerCancelSubscription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'ownerWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'proposedContractSetIds',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
      },
      {
        name: 'proposedContractSetAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'proposeContractsUpdate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'proposeSubscriptionOwnerTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'recoverFunds',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendRequest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendRequestToProposed',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'allowListId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setAllowListId',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setFlags',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'requestsToTimeoutByCommitment',
        internalType: 'struct FunctionsResponse.Commitment[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'timeoutRequests',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct FunctionsRouter.Config',
        type: 'tuple',
        components: [
          {
            name: 'maxConsumersPerSubscription',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'handleOracleFulfillmentSelector',
            internalType: 'bytes4',
            type: 'bytes4',
          },
          {
            name: 'gasForCallExactCheck',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'maxCallbackGasLimits',
            internalType: 'uint32[]',
            type: 'uint32[]',
          },
          {
            name: 'subscriptionDepositMinimumRequests',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'subscriptionDepositJuels',
            internalType: 'uint72',
            type: 'uint72',
          },
        ],
      },
    ],
    name: 'updateConfig',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'updateContracts',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FunctionsSubscriptions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionsSubscriptionsABI = [
  { type: 'error', inputs: [], name: 'CannotRemoveWithPendingRequests' },
  {
    type: 'error',
    inputs: [
      { name: 'currentBalanceJuels', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'InsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'InvalidCalldata' },
  { type: 'error', inputs: [], name: 'InvalidConsumer' },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [
      { name: 'proposedOwner', internalType: 'address', type: 'address' },
    ],
    name: 'MustBeProposedOwner',
  },
  { type: 'error', inputs: [], name: 'MustBeSubscriptionOwner' },
  { type: 'error', inputs: [], name: 'OnlyCallableFromLink' },
  { type: 'error', inputs: [], name: 'TimeoutNotExceeded' },
  {
    type: 'error',
    inputs: [
      { name: 'maximumConsumers', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'TooManyConsumers',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FundsRecovered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RequestTimedOut',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'fundsRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'fundsAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionConsumerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'oldBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'subscriptionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SubscriptionOwnerTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'consumer', internalType: 'address', type: 'address' }],
    name: 'createSubscriptionWithConsumer',
    outputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'client', internalType: 'address', type: 'address' },
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getConsumer',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Consumer',
        type: 'tuple',
        components: [
          { name: 'allowed', internalType: 'bool', type: 'bool' },
          { name: 'initiatedRequests', internalType: 'uint64', type: 'uint64' },
          { name: 'completedRequests', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getFlags',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSubscription',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Subscription',
        type: 'tuple',
        components: [
          { name: 'balance', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'blockedBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'proposedOwner', internalType: 'address', type: 'address' },
          { name: 'consumers', internalType: 'address[]', type: 'address[]' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSubscriptionCount',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionIdStart', internalType: 'uint64', type: 'uint64' },
      { name: 'subscriptionIdEnd', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSubscriptionsInRange',
    outputs: [
      {
        name: 'subscriptions',
        internalType: 'struct IFunctionsSubscriptions.Subscription[]',
        type: 'tuple[]',
        components: [
          { name: 'balance', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'blockedBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'proposedOwner', internalType: 'address', type: 'address' },
          { name: 'consumers', internalType: 'address[]', type: 'address[]' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onTokenTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'ownerCancelSubscription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'ownerWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'proposeSubscriptionOwnerTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'recoverFunds',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setFlags',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'requestsToTimeoutByCommitment',
        internalType: 'struct FunctionsResponse.Commitment[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'timeoutRequests',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControllerABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'hasAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC4906
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc4906ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC4907
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc4907ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'expires',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'UpdateUser',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'expires', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setUser',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userExpires',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC677Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc677ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onTokenTransfer',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFunctionsBilling
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFunctionsBillingABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'requestId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'deleteCommitment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'gasPriceWei', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateCost',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'requestCBOR', internalType: 'bytes', type: 'bytes' }],
    name: 'getDONFee',
    outputs: [{ name: '', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getWeiPerUnitLink',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'oracleWithdrawAll',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFunctionsClient
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFunctionsClientABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFunctionsCoordinator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFunctionsCoordinatorABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDONPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getThresholdPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'donPublicKey', internalType: 'bytes', type: 'bytes' }],
    name: 'setDONPublicKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'thresholdPublicKey', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setThresholdPublicKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct FunctionsResponse.RequestMeta',
        type: 'tuple',
        components: [
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'requestingContract',
            internalType: 'address',
            type: 'address',
          },
          { name: 'availableBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'initiatedRequests', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
          { name: 'completedRequests', internalType: 'uint64', type: 'uint64' },
          {
            name: 'subscriptionOwner',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
    name: 'startRequest',
    outputs: [
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFunctionsRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFunctionsRouterABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
      { name: 'juelsPerGas', internalType: 'uint96', type: 'uint96' },
      {
        name: 'costWithoutFulfillment',
        internalType: 'uint96',
        type: 'uint96',
      },
      { name: 'transmitter', internalType: 'address', type: 'address' },
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'fulfill',
    outputs: [
      {
        name: '',
        internalType: 'enum FunctionsResponse.FulfillResult',
        type: 'uint8',
      },
      { name: '', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: 'adminFee', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllowListId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getContractById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getProposedContractById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getProposedContractSet',
    outputs: [
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: '', internalType: 'address[]', type: 'address[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'isValidCallbackGasLimit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'proposalSetIds', internalType: 'bytes32[]', type: 'bytes32[]' },
      {
        name: 'proposalSetAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'proposeContractsUpdate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendRequest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendRequestToProposed',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'allowListId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setAllowListId',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'updateContracts',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFunctionsSubscriptions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFunctionsSubscriptionsABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'consumer', internalType: 'address', type: 'address' }],
    name: 'createSubscriptionWithConsumer',
    outputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'client', internalType: 'address', type: 'address' },
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getConsumer',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Consumer',
        type: 'tuple',
        components: [
          { name: 'allowed', internalType: 'bool', type: 'bool' },
          { name: 'initiatedRequests', internalType: 'uint64', type: 'uint64' },
          { name: 'completedRequests', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getFlags',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSubscription',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Subscription',
        type: 'tuple',
        components: [
          { name: 'balance', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'blockedBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'proposedOwner', internalType: 'address', type: 'address' },
          { name: 'consumers', internalType: 'address[]', type: 'address[]' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSubscriptionCount',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionIdStart', internalType: 'uint64', type: 'uint64' },
      { name: 'subscriptionIdEnd', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSubscriptionsInRange',
    outputs: [
      {
        name: '',
        internalType: 'struct IFunctionsSubscriptions.Subscription[]',
        type: 'tuple[]',
        components: [
          { name: 'balance', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'blockedBalance', internalType: 'uint96', type: 'uint96' },
          { name: 'proposedOwner', internalType: 'address', type: 'address' },
          { name: 'consumers', internalType: 'address[]', type: 'address[]' },
          { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalBalance',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'oracleWithdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'ownerCancelSubscription',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'proposeSubscriptionOwnerTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'recoverFunds',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'flags', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setFlags',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'requestsToTimeoutByCommitment',
        internalType: 'struct FunctionsResponse.Commitment[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'timeoutRequests',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOwnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOwnableABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOwnableFunctionsRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOwnableFunctionsRouterABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
      { name: 'juelsPerGas', internalType: 'uint96', type: 'uint96' },
      {
        name: 'costWithoutFulfillment',
        internalType: 'uint96',
        type: 'uint96',
      },
      { name: 'transmitter', internalType: 'address', type: 'address' },
      {
        name: 'commitment',
        internalType: 'struct FunctionsResponse.Commitment',
        type: 'tuple',
        components: [
          { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'coordinator', internalType: 'address', type: 'address' },
          {
            name: 'estimatedTotalCostJuels',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
          { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
          { name: 'adminFee', internalType: 'uint72', type: 'uint72' },
          { name: 'donFee', internalType: 'uint72', type: 'uint72' },
          {
            name: 'gasOverheadBeforeCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'gasOverheadAfterCallback',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'timeoutTimestamp', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'fulfill',
    outputs: [
      {
        name: '',
        internalType: 'enum FunctionsResponse.FulfillResult',
        type: 'uint8',
      },
      { name: '', internalType: 'uint96', type: 'uint96' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAdminFee',
    outputs: [{ name: 'adminFee', internalType: 'uint72', type: 'uint72' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllowListId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getContractById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getProposedContractById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getProposedContractSet',
    outputs: [
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: '', internalType: 'address[]', type: 'address[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'isValidCallbackGasLimit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'proposalSetIds', internalType: 'bytes32[]', type: 'bytes32[]' },
      {
        name: 'proposalSetAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'proposeContractsUpdate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendRequest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'dataVersion', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendRequestToProposed',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'allowListId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setAllowListId',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'updateContracts',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITermsOfServiceAllowList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTermsOfServiceAllowListABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'acceptor', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'acceptTermsOfService',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'blockSender',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllAllowedSenders',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'acceptor', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'getMessage',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'isBlockedSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'unblockSender',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITypeAndVersion
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTypeAndVersionABI = [
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LinkTokenInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const linkTokenInterfaceABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: 'decimalPlaces', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseApproval',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseApproval',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: 'tokenName', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: 'tokenSymbol', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      { name: 'totalTokensIssued', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndCall',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MicroConsumer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const microConsumerABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'EmptyArgs' },
  { type: 'error', inputs: [], name: 'EmptySource' },
  { type: 'error', inputs: [], name: 'NoInlineSecrets' },
  { type: 'error', inputs: [], name: 'OnlyRouterCanFulfill' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestSent',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lastSuccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'size', internalType: 'uint256', type: 'uint256' },
      { name: 'source', internalType: 'string', type: 'string' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'requestToReduce',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'runs',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MicroStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const microStorageABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_paymentCoin', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'EmptyArgs' },
  { type: 'error', inputs: [], name: 'EmptySource' },
  { type: 'error', inputs: [], name: 'NoInlineSecrets' },
  { type: 'error', inputs: [], name: 'OnlyRouterCanFulfill' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Reduce',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Subscribe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'expires',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'UpdateUser',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'basePrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_devAddress', internalType: 'address', type: 'address' }],
    name: 'changeDevAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'cleanUpOldRentals',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentUsers',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'size', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'extend',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lastSuccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxRentalTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxUsers',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minRentalTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pricePerDay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'provideRefund',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'size', internalType: 'uint256', type: 'uint256' },
      { name: 'source', internalType: 'string', type: 'string' },
      { name: 'donId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'reduce',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'runs',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_maxUsers', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxUsers',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_basePrice', internalType: 'uint256', type: 'uint256' },
      { name: '_pricePerMonth', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPrices',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setUser',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'metadata', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'size', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'subscribe',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'unsubscribe',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userExpires',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userInfo',
    outputs: [
      {
        name: '',
        internalType: 'struct MicroStorage.UserInfo',
        type: 'tuple',
        components: [
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'expires', internalType: 'uint64', type: 'uint64' },
          { name: 'payment', internalType: 'uint256', type: 'uint256' },
          { name: 'size', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockLinkToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockLinkTokenABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_address', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_address', internalType: 'address', type: 'address' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setBalance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      { name: 'totalTokensIssued', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndCall',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockV3Aggregator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockV3AggregatorABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
      { name: '_initialAnswer', internalType: 'int256', type: 'int256' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'current',
        internalType: 'int256',
        type: 'int256',
        indexed: true,
      },
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'updatedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AnswerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startedBy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'startedAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewRound',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_answer', internalType: 'int256', type: 'int256' }],
    name: 'updateAnswer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint80', type: 'uint80' },
      { name: '_answer', internalType: 'int256', type: 'int256' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
      { name: '_startedAt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateRoundData',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OCR2Abstract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ocr2AbstractABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousConfigBlockNumber',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'configCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'signers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'transmitters',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      { name: 'f', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'onchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'offchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'ConfigSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      { name: 'epoch', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'Transmitted',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDetails',
    outputs: [
      { name: 'configCount', internalType: 'uint32', type: 'uint32' },
      { name: 'blockNumber', internalType: 'uint32', type: 'uint32' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDigestAndEpoch',
    outputs: [
      { name: 'scanLogs', internalType: 'bool', type: 'bool' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'epoch', internalType: 'uint32', type: 'uint32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'signers', internalType: 'address[]', type: 'address[]' },
      { name: 'transmitters', internalType: 'address[]', type: 'address[]' },
      { name: 'f', internalType: 'uint8', type: 'uint8' },
      { name: 'onchainConfig', internalType: 'bytes', type: 'bytes' },
      { name: 'offchainConfigVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'offchainConfig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setConfig',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'reportContext', internalType: 'bytes32[3]', type: 'bytes32[3]' },
      { name: 'report', internalType: 'bytes', type: 'bytes' },
      { name: 'rs', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'ss', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'rawVs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transmit',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OCR2Base
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ocr2BaseABI = [
  {
    type: 'error',
    inputs: [{ name: 'message', internalType: 'string', type: 'string' }],
    name: 'InvalidConfig',
  },
  { type: 'error', inputs: [], name: 'ReportInvalid' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousConfigBlockNumber',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'configCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'signers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'transmitters',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      { name: 'f', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'onchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'offchainConfig',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'ConfigSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'configDigest',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      { name: 'epoch', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'Transmitted',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDetails',
    outputs: [
      { name: 'configCount', internalType: 'uint32', type: 'uint32' },
      { name: 'blockNumber', internalType: 'uint32', type: 'uint32' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestConfigDigestAndEpoch',
    outputs: [
      { name: 'scanLogs', internalType: 'bool', type: 'bool' },
      { name: 'configDigest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'epoch', internalType: 'uint32', type: 'uint32' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_signers', internalType: 'address[]', type: 'address[]' },
      { name: '_transmitters', internalType: 'address[]', type: 'address[]' },
      { name: '_f', internalType: 'uint8', type: 'uint8' },
      { name: '_onchainConfig', internalType: 'bytes', type: 'bytes' },
      {
        name: '_offchainConfigVersion',
        internalType: 'uint64',
        type: 'uint64',
      },
      { name: '_offchainConfig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setConfig',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'reportContext', internalType: 'bytes32[3]', type: 'bytes32[3]' },
      { name: 'report', internalType: 'bytes', type: 'bytes' },
      { name: 'rs', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'ss', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'rawVs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transmit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'transmitters',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pausable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pausableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Routable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const routableABI = [
  { type: 'error', inputs: [], name: 'OnlyCallableByRouter' },
  { type: 'error', inputs: [], name: 'OnlyCallableByRouterOwner' },
  { type: 'error', inputs: [], name: 'RouterMustBeSet' },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TermsOfServiceAllowList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const termsOfServiceAllowListABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'config',
        internalType: 'struct TermsOfServiceAllowList.Config',
        type: 'tuple',
        components: [
          { name: 'enabled', internalType: 'bool', type: 'bool' },
          { name: 'signerPublicKey', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'InvalidUsage' },
  { type: 'error', inputs: [], name: 'RecipientIsBlocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddedAccess',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'BlockedAccess',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'config',
        internalType: 'struct TermsOfServiceAllowList.Config',
        type: 'tuple',
        components: [
          { name: 'enabled', internalType: 'bool', type: 'bool' },
          { name: 'signerPublicKey', internalType: 'address', type: 'address' },
        ],
        indexed: false,
      },
    ],
    name: 'ConfigUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'UnblockedAccess',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'acceptor', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'acceptTermsOfService',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'blockSender',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllAllowedSenders',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: '',
        internalType: 'struct TermsOfServiceAllowList.Config',
        type: 'tuple',
        components: [
          { name: 'enabled', internalType: 'bool', type: 'bool' },
          { name: 'signerPublicKey', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'acceptor', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'getMessage',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'hasAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'isBlockedSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'unblockSender',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct TermsOfServiceAllowList.Config',
        type: 'tuple',
        components: [
          { name: 'enabled', internalType: 'bool', type: 'bool' },
          { name: 'signerPublicKey', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'updateConfig',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testTokenABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'giveMe',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const
