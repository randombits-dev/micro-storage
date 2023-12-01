import {useAccount, useContractRead} from 'wagmi';
import {microStorageABI} from '../generated';
import {MicroStorageAddress} from '../utils/network';

export const useMyAccount = () => {
  const {address} = useAccount();

  const {data: balance, refetch} = useContractRead({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'balanceOf',
    enabled: !!address,
    args: [address!]
  });

  const {data: result} = useContractRead({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'tokenOfOwnerByIndex',
    enabled: !!balance,
    args: [address!, BigInt(0)]
  });

  const {data: userInfo, isSuccess} = useContractRead({
    address: MicroStorageAddress,
    abi: microStorageABI,
    functionName: 'userInfo',
    args: [result as bigint],
    enabled: !!result
  });

  if (isSuccess) {
    return {
      userInfo: {
        token: Number(result),
        user: userInfo![0].user,
        expires: Number(userInfo![0].expires) * 1000,
        size: Number(userInfo![0].size),
        expired: userInfo![1]
      },
      refetch
    };
  } else {
    return {
      refetch
    };
  }
};
