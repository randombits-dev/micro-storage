import {usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';
import {ReduceScript} from '../data/reduceScript.ts';
import {encodeBytes32String} from 'ethers';

export const useReduceSubscription = (tokenId: number, size: number) => {
  const {config, error: prepareError} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'reduce',
    args: [BigInt(tokenId), BigInt(size), ReduceScript, encodeBytes32String('local-functions-testnet'), 1]
  });
  const {execute, receipt, status, statusMsg} = useContractWriteStatus(config);

  return {execute, status, statusMsg, prepareError};
};
