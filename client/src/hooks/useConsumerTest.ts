import {useContractRead} from 'wagmi';
import {microConsumerABI} from '../generated.ts';

export const useConsumerTest = (): { runs: number } => {
  const {data} = useContractRead({
    address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    abi: microConsumerABI,
    functionName: 'runs',
    args: []
  });
  return {runs: data};
};
