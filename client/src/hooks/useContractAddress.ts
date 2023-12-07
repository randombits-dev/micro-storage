import {useNetwork} from 'wagmi';
import {COIN_NAMES, MICRO_STORAGE_ADDRESSES} from "../utils/network.ts";

export const useContractAddress = () => {
  const {chain} = useNetwork();
  const contractAddress = MICRO_STORAGE_ADDRESSES[chain?.id || 80001];

  const coinNames = COIN_NAMES[chain?.id || 80001];

  return {contractAddress, coinNames};
};
