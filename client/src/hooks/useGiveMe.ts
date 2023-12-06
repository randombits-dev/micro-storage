import {usePrepareContractWrite} from 'wagmi';
import {testTokenABI} from '../generated';
import {useContractWriteStatus} from './useContractWriteStatus';
import {USDCAddress} from '../utils/network';

export const useGiveMe = () => {

  const {config, error} = usePrepareContractWrite({
    address: USDCAddress,
    abi: testTokenABI,
    functionName: 'giveMe',
    args: [BigInt('10000000')]
  });

  const {execute, receipt, status, statusMsg} = useContractWriteStatus(config);

  return {
    execute,
    status,
    statusMsg,
  };
};
