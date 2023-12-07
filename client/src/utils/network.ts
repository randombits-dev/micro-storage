import {hardhat, polygonMumbai} from 'viem/chains';

export const CHAIN_ID = 'polygon-testnet';

const CHAINS: { [key: string]: any } = {
  'hardhat': hardhat,
  'polygon-testnet': polygonMumbai
};

const MICRO_STORAGE_ADDRESSES: { [key: string]: `0x${string}` } = {
  hardhat: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  'polygon-testnet': '0xC3e70824aC133a6a6BEC620Fc48911eb24cc9AA0'
};

export const CURRENT_CHAIN = CHAINS[CHAIN_ID];
export const MicroStorageAddress = MICRO_STORAGE_ADDRESSES[CHAIN_ID];

// export const WorkerUrl = 'http://localhost:8787';
export const WorkerUrl = 'https://micro-storage-api.randombits.workers.dev';
export const ChainLinkApiUrl = 'https://micro-storage-chainlink-api.randombits.workers.dev';

export const COIN_LIST = {
  '0x326C977E6efc84E512bB9C30f76E30c160eD06FB': 'Link',
  '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889': 'WMATIC',
  '0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F': 'DAI',
  '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa': 'WETH'
};
