import {useAccount, useContractEvent, usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {useEffect} from 'react';
import {useAllowance} from './useAllowance';
import {MicroStorageAddress} from '../utils/network';
import {useAccountContext} from '../providers/AccountProvider.tsx';

export const useSubscribe = (coin: string, amount: bigint, size: number) => {

  const {address} = useAccount();
  const {refetchToken} = useAccountContext();
  const {enough, execute: executeAllowance, status: statusAllowance, statusMsg: statusMsgAllowance, refetch} = useAllowance(coin, amount);

  useEffect(() => {
    if (statusAllowance === 'success') {
      void refetch();
    }
  }, [statusAllowance]);

  useContractEvent({
    address: MicroStorageAddress,
    abi: microStorageABI,
    eventName: 'Subscribe',
    listener: (log) => {
      if (log[0]) {
        const userId = (log[0].args as any).user;
        if (userId?.toUpperCase() === address?.toUpperCase()) {
          void refetchToken();
        }
      }
    }
  });

  let contractDetails = {};
  if (enough) {
    contractDetails = {
      address: MicroStorageAddress,
      abi: microStorageABI,
      functionName: 'subscribe',
      args: [coin, amount, BigInt(size)]
    };
  }

  const {config, error} = usePrepareContractWrite(contractDetails);

  const {execute, receipt, status, statusMsg} = useContractWriteStatus(config, {success: 'Reserving Server'});

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => {
        void refetchToken();
      }, 30000);
    }
  }, [status]);

  return {
    execute,
    executeAllowance,
    enough,
    status,
    statusMsg,
    statusAllowance,
    statusMsgAllowance,
    prepareError: error
  };
};
