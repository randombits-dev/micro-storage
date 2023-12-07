import {useContractEvent, usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {useAllowance} from './useAllowance.ts';
import {UserInfo} from '../utils/definitions.ts';
import {useEffect, useState} from 'react';
import {useAccountContext} from '../providers/AccountProvider.tsx';
import {useContractAddress} from "./useContractAddress.ts";

export const useChangeLimit = (userInfo: UserInfo, size: number, amount: bigint) => {
  const {refetchUserInfo} = useAccountContext();
  const {contractAddress} = useContractAddress();

  const [customStatus, setCustomStatus] = useState('');
  const {enough, execute: executeAllowance, status: statusAllowance, statusMsg: statusMsgAllowance, refetch} = useAllowance(userInfo.coin,
      amount);

  const {config: increaseConfig, error: increaseError} = usePrepareContractWrite({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'increaseLimit',
    enabled: size > userInfo.size,
    args: [BigInt(userInfo.token), BigInt(size)]
  });

  const {config: reduceConfig, error: reduceError} = usePrepareContractWrite({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'reduceLimit',
    enabled: size < userInfo.size,
    args: [BigInt(userInfo.token), BigInt(size)]
  });
  const {execute: executeIncrease, status: statusIncrease, statusMsg: statusMsgIncrease} = useContractWriteStatus(increaseConfig);
  const {execute: executeReduce, status: statusReduce, statusMsg: statusMsgReduce} = useContractWriteStatus(reduceConfig);

  useEffect(() => {
    if (statusIncrease === 'success') {
      void refetchUserInfo();
      setCustomStatus('success');
    }
  }, [statusIncrease]);

  useEffect(() => {
    if (statusReduce === 'success') {
      setCustomStatus('waiting');
    }
  }, [statusReduce]);

  useContractEvent({
    address: contractAddress,
    abi: microStorageABI,
    eventName: 'LimitChanged',
    listener: (log) => {
      if (log[0]) {
        const tokenId = Number((log[0].args as any).tokenId);
        if (tokenId === userInfo.token) {
          void refetchUserInfo();
          setCustomStatus('success');
        }
      }
    }
  });

  const resetComplete = () => {
    setCustomStatus('');
  };

  if (size > userInfo.size) {
    return {
      execute: executeIncrease,
      enough,
      statusAllowance,
      statusMsgAllowance,
      executeAllowance,
      error: increaseError,
      status: statusIncrease,
      statusMsg: statusMsgIncrease,
      customStatus,
      resetComplete
    };
  } else {
    return {
      execute: executeReduce,
      enough,
      statusAllowance,
      statusMsgAllowance,
      executeAllowance,
      error: reduceError,
      status: statusReduce,
      statusMsg: statusMsgReduce,
      customStatus,
      resetComplete
    };

  }
};
