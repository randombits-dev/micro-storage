import {useContractRead} from 'wagmi';
import {microStorageABI} from '../generated.ts';
import {MicroStorageAddress} from '../utils/network.ts';

export const useConsumerTest = (): { runs: number } => {
  const {data} = useContractRead({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'runs',
    args: []
  });
  return {runs: data};
};
