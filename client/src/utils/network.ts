import {createPublicClient, createWalletClient, type Hex, http, type PrivateKeyAccount, type WalletClient} from 'viem';
import {fantom, hardhat, polygonMumbai} from 'viem/chains';
import {privateKeyToAccount} from 'viem/accounts';

export const CHAIN_ID = 'polygon-testnet';

const CHAINS: { [key: string]: any } = {
  'hardhat': hardhat,
  'fantom': fantom,
  'polygon-testnet': polygonMumbai
};

const MICRO_STORAGE_ADDRESSES: { [key: string]: `0x${string}` } = {
  hardhat: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  'polygon-testnet': '0xe1C046Fc10a0ef6fE7050482A9b56E45ed6b4d2a',
  fantom: '0xC6537b534dEe49ff94A3193A65101f367c1C566A'
};

const USDC_ADDRESSES: { [key: string]: `0x${string}` } = {
  hardhat: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  'polygon-testnet': '0xDC067dd27958D90CD5DcbeAB586Ad26d03779031',
  fantom: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf'
};
export const CURRENT_CHAIN = CHAINS[CHAIN_ID];
export const MicroStorageAddress = MICRO_STORAGE_ADDRESSES[CHAIN_ID];
export const USDCAddress = USDC_ADDRESSES[CHAIN_ID];

export const WorkerUrl = 'http://localhost:8787';
// export const WorkerUrl = 'https://micro-storage-api.randombits.workers.dev';
export const ChainLinkApiUrl = 'https://micro-storage-chainlink-api.randombits.workers.dev';

export const createViemClient = () => {
  return createPublicClient({
    chain: CURRENT_CHAIN,
    transport: http(),
  });
};

export const getOwnerAccount = (): PrivateKeyAccount => {
  return privateKeyToAccount(process.env.OWNER_PRIVATE_KEY as Hex);
};

export const createViemWallet = (): WalletClient => {
  return createWalletClient({
    account: getOwnerAccount(),
    chain: CURRENT_CHAIN,
    transport: http(),
  });
};
