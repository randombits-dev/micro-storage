import {Address, useContractRead} from 'wagmi';
import {MicroStorageAddress} from '../utils/network';
import {microStorageABI} from '../generated.ts';
import {formatUnits} from 'viem';

export const usePriceFeed = (coin) => {
  const {data: priceFeed, refetch} = useContractRead({
    address: MicroStorageAddress,
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
