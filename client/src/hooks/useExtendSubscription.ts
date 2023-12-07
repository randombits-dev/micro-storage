import {usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useAllowance} from './useAllowance';
import {useEffect} from 'react';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';

export const useExtendSubscription = (coin: string, tokenId: number, amount: bigint) => {
  const {enough, execute: executeAllowance, status: statusAllowance, statusMsg: statusMsgAllowance, refetch} = useAllowance(coin, amount);

  useEffect(() => {
    if (statusAllowance === 'success') {
      void refetch();
    }
  }, [statusAllowance]);

  const {config, error: prepareError} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'extend',
    args: [BigInt(tokenId), amount],
    enabled: enough,
  });
  const {execute, receipt, status, statusMsg} = useContractWriteStatus(config);

  return {execute, status, statusMsg, enough, statusAllowance, statusMsgAllowance, executeAllowance, prepareError};
};
