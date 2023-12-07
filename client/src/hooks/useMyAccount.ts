import {useAccount, useContractRead} from 'wagmi';
import {microStorageABI} from '../generated';
import {useContractAddress} from "./useContractAddress.ts";

export const useMyAccount = () => {
  const {address} = useAccount();
  const {contractAddress} = useContractAddress();


  const {data: balance, refetch: refetchToken} = useContractRead({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'balanceOf',
    enabled: !!address,
    args: [address!]
  });

  const {data: result} = useContractRead({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'tokenOfOwnerByIndex',
    enabled: !!balance,
    args: [address!, BigInt(0)]
  });

  const {data: userInfo, isSuccess, refetch: refetchUserInfo} = useContractRead({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'userInfo',
    args: [result as bigint],
    enabled: !!result
  });

  if (userInfo && Number(userInfo![0].size) > 0) {
    return {
      hasToken: true,
      userInfo: {
        token: Number(result),
        user: userInfo![0].user,
        expires: Number(userInfo![0].expires) * 1000,
        size: Number(userInfo![0].size),
        expired: userInfo![1],
        coin: userInfo![0].coin
      },
      refetchUserInfo,
      refetchToken
    };
  } else {
    return {
      hasToken: false,
      refetchToken
    };
  }
};
