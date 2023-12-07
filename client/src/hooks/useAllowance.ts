import {Address, erc20ABI, useAccount, useContractRead, usePrepareContractWrite} from 'wagmi';
import {useContractWriteStatus} from './useContractWriteStatus';
import {useContractAddress} from "./useContractAddress.ts";

export const useAllowance = (coin: string, amount: bigint) => {
  const {address} = useAccount();
  const {contractAddress} = useContractAddress();
  const {data, isFetched, refetch} = useContractRead({
    address: coin as Address,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address as Address, contractAddress]
  });
  const enough = (data || 0) >= amount;

  const {config} = usePrepareContractWrite({
    address: coin as Address,
    abi: erc20ABI,
    functionName: 'approve',
    args: [contractAddress, amount],
    enabled: !enough
  });

  const {execute, status, statusMsg} = useContractWriteStatus(config);

  return {allowance: data, enough, refetch, execute, status, statusMsg};
};
