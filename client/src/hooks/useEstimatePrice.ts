import {formatUSDC} from '../utils/numberUtils';

export const useEstimatePrice = (days: number, size: number) => {
  const amount = BigInt(Math.ceil(days * (size * 1000 + 10000)));
  const price = formatUSDC(amount);
  return {price, amount};
};
