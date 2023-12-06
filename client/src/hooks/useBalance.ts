import {Address, erc20ABI, useAccount, useContractRead} from 'wagmi';
import {USDCAddress} from '../utils/network';
import {formatUSDC} from '../utils/numberUtils.ts';

export const useBalance = () => {
  const {address} = useAccount();
  const {data, refetch} = useContractRead({
    address: USDCAddress,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [address as Address]
  });

  const format = () => {
    return Number(formatUSDC(BigInt(data || 0)));
  };

  return {
    balance: data || 0,
    format,
    refetch
  };
};
