import {usePrepareContractWrite} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {MicroStorageAddress} from '../utils/network';

export const useUnsubscribe = (tokenId: number) => {

  // const [executing, setExecuting] = useState(false);
  const {config} = usePrepareContractWrite({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'unsubscribe',
    args: [BigInt(tokenId)]
  });

  const {execute, status, statusMsg} = useContractWriteStatus(config);

  return {execute, status, statusMsg};
};
