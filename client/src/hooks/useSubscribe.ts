import {usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {useEffect} from 'react';
import {useAllowance} from './useAllowance';
import {MicroStorageAddress} from '../utils/network';

export const useSubscribe = (metadata: string | undefined, amount: bigint, size: number) => {

  const {enough, execute: executeAllowance, status: statusAllowance, statusMsg: statusMsgAllowance, refetch} = useAllowance(amount);

  useEffect(() => {
    if (statusAllowance === 'success') {
      void refetch();
    }
  }, [statusAllowance]);

  let contractDetails = {};
  if (enough) {
    contractDetails = {
      address: MicroStorageAddress,
      abi: microStorageABI,
      functionName: 'subscribe',
      args: [metadata, amount, BigInt(size)]
    };
  }

  const {config, error} = usePrepareContractWrite(contractDetails);

  const {execute, receipt, status, statusMsg} = useContractWriteStatus(config, {success: 'Reserving Server'});

  // useEffect(() => {
  //   if (status === 'success') {
  //     const lastLog = receipt!.logs.pop();
  //     const rentEvent = decodeEventLog({
  //       abi: microStorageABI,
  //       data: lastLog!.data,
  //       topics: lastLog!.topics
  //     });
  //     const tokenId = Number((rentEvent.args as any).tokenId);
  //     // void subscribed(tokenId);
  //     // console.log(tokenId);
  //   }
  // }, [status]);

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
