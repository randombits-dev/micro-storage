import {useAccount, useContractEvent, usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';
import {useAccountContext} from '../providers/AccountProvider.tsx';

export const useUnsubscribe = (tokenId: number) => {
  const {address} = useAccount();
  const {refetchToken} = useAccountContext();

  // const [executing, setExecuting] = useState(false);
  const {config} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'unsubscribe',
    args: [BigInt(tokenId)]
  });

  const {execute, status, statusMsg} = useContractWriteStatus(config);

  useContractEvent({
    address: MicroStorageAddress,
    abi: microStorageABI,
    eventName: 'Unsubscribe',
    listener: (log) => {
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
