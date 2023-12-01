import {Address, erc20ABI, useAccount, useContractRead, usePrepareContractWrite} from 'wagmi';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress, USDCAddress} from '../utils/network';

export const useAllowance = (amount: bigint) => {
  const {address} = useAccount();
  const {data, isFetched, refetch} = useContractRead({
    address: USDCAddress,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address as Address, MicroStorageAddress]
  });
  const enough = (data || 0) >= amount;

  const {config} = usePrepareContractWrite({
    address: USDCAddress,
    abi: erc20ABI,
    functionName: 'approve',
    args: [MicroStorageAddress, amount],
    enabled: !enough
  });

  const {execute, status, statusMsg} = useContractWriteStatus(config);

  return {allowance: data, enough, refetch, execute, status, statusMsg};
};
