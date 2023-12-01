import {usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useAllowance} from './useAllowance';
import {useEffect} from 'react';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';

export const useExtendSubscription = (tokenId: number, amount: bigint, size: number) => {
  const {enough, execute: executeAllowance, status: statusAllowance, statusMsg: statusMsgAllowance, refetch} = useAllowance(amount);

  useEffect(() => {
    if (statusAllowance === 'success') {
      void refetch();
    }
  }, [statusAllowance]);

  const {config, error: prepareError} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'extend',
    args: [BigInt(tokenId), amount, BigInt(size)],
    enabled: enough
  });
  const {execute, receipt, status, statusMsg} = useContractWriteStatus(config);

  return {execute, status, statusMsg, enough, statusAllowance, statusMsgAllowance, executeAllowance, prepareError};
};
