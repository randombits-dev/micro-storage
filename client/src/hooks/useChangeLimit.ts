import {useContractEvent, usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';
import {ReduceTestScript} from '../data/reduceScript.ts';
import {useAllowance} from './useAllowance.ts';
import {UserInfo} from '../utils/definitions.ts';
import {useState} from 'react';
import {useAccountContext} from '../providers/AccountProvider.tsx';

export const useChangeLimit = (userInfo: UserInfo, size: number, amount: bigint) => {
  const {refetchUserInfo} = useAccountContext();
  const [complete, setComplete] = useState(false);
  const {enough, execute: executeAllowance, status: statusAllowance, statusMsg: statusMsgAllowance, refetch} = useAllowance(amount);

  const {config: increaseConfig, error: increaseError} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'increaseLimit',
    enabled: size > userInfo.size,
    args: [BigInt(userInfo.token), BigInt(size)]
  });

  const {config: reduceConfig, error: reduceError} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'reduce',
    enabled: size < userInfo.size,
    args: [BigInt(userInfo.token), BigInt(size), ReduceTestScript]
  });
  const {execute: executeIncrease, status: statusIncrease, statusMsg: statusMsgIncrease} = useContractWriteStatus(increaseConfig);
  const {execute: executeReduce, status: statusReduce, statusMsg: statusMsgReduce} = useContractWriteStatus(reduceConfig);

  useContractEvent({
    address: MicroStorageAddress,
    abi: microStorageABI,
    eventName: 'LimitChanged',
    listener: (tokenId) => {
      if (tokenId === userInfo.token) {
        void refetchUserInfo();
        setComplete(true);
      }

    }
  });

  const resetComplete = () => {
    setComplete(false);
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
      complete,
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
      complete,
      resetComplete
    };

  }
};
