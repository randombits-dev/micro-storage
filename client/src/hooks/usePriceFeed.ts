import {Address, useContractRead} from 'wagmi';
import {microStorageABI} from '../generated.ts';
import {formatUnits} from 'viem';
import {useContractAddress} from "./useContractAddress.ts";

export const usePriceFeed = (coin) => {
  const {contractAddress} = useContractAddress();

  const {data: priceFeed, refetch} = useContractRead({
    address: contractAddress,
    abi: microStorageABI,
    functionName: 'getPrice',
    args: [coin as Address]
  });

  if (priceFeed) {
    return {
      priceFeed: priceFeed,
      formattedFeed: formatUnits(priceFeed, 8)
    };
  }
  return {
    priceFeed: BigInt(0),
    formattedFeed: ''
  };
};
