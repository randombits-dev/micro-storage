import {useAccount, useContractEvent, usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {useAccountContext} from '../providers/AccountProvider.tsx';
import {useContractAddress} from "./useContractAddress.ts";
import {useEffect} from "react";

export const useUnsubscribe = (tokenId: number) => {
  const {address} = useAccount();
  const {contractAddress} = useContractAddress();

  const {refetchToken} = useAccountContext();

  // const [executing, setExecuting] = useState(false);
  const {config} = usePrepareContractWrite({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'unsubscribe',
    args: [BigInt(tokenId)]
  });

  const {execute, status, statusMsg} = useContractWriteStatus(config);

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => {
        void refetchToken();
      }, 30000);
    }
  }, [status]);

  useContractEvent({
    address: contractAddress,
    abi: microStorageABI,
    eventName: 'Unsubscribe',
    listener: (log) => {
      console.log(log);
      if (log[0]) {
        const userId = (log[0].args as any).user;
        if (userId?.toUpperCase() === address?.toUpperCase()) {
          void refetchToken();
          sessionStorage.clear();
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
        }
      }
    }
  });

  return {execute, status, statusMsg};
};
