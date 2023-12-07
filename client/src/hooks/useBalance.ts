import {Address, erc20ABI, useAccount, useContractRead} from 'wagmi';

export const useBalance = (coin: Address) => {
  const {address} = useAccount();
  
  const {data, refetch} = useContractRead({
    address: coin,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [address as Address]
  });

  return {
    balance: data || 0,
    refetch
  };
};
