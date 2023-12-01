import {createPublicClient, createWalletClient, type Hex, http, type PrivateKeyAccount, type WalletClient} from 'viem';
import {fantom, fantomTestnet, hardhat} from 'viem/chains';
import {privateKeyToAccount} from 'viem/accounts';

const CHAINS: { [key: string]: any } = {
  'hardhat': hardhat,
  'fantom': fantom,
  'fantom-testnet': fantomTestnet
};

const MICRO_STORAGE_ADDRESSES: { [key: string]: `0x${string}` } = {
  hardhat: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  'fantom-testnet': '0x0b0d47cf4839F118D19E4AB65ddFdDdD93E824Fc',
  fantom: '0xC6537b534dEe49ff94A3193A65101f367c1C566A'
};

const USDC_ADDRESSES: { [key: string]: `0x${string}` } = {
  hardhat: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  'fantom-testnet': '0xB537afeA2B022111e677E26AD4190C546C65CccD',
  fantom: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf'
};
export const CURRENT_CHAIN = CHAINS['hardhat'];
export const MicroStorageAddress = MICRO_STORAGE_ADDRESSES['hardhat'];
export const USDCAddress = USDC_ADDRESSES['hardhat'];

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
