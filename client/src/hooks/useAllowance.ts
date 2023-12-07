import {Address, erc20ABI, useAccount, useContractRead, usePrepareContractWrite} from 'wagmi';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';

export const useAllowance = (coin: string, amount: bigint) => {
  const {address} = useAccount();
  const {data, isFetched, refetch} = useContractRead({
    address: coin as Address,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address as Address, MicroStorageAddress]
  });
  const enough = (data || 0) >= amount;

  const {config} = usePrepareContractWrite({
    address: coin as Address,
    abi: erc20ABI,
    functionName: 'approve',
    args: [MicroStorageAddress, amount],
    enabled: !enough
  });

  const {execute, status, statusMsg} = useContractWriteStatus(config);

  return {allowance: data, enough, refetch, execute, status, statusMsg};
};
