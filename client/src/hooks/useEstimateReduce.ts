import {UserInfo} from '../utils/definitions';
import {formatUSDC} from '../utils/numberUtils';

export const useEstimateReduce = (userInfo: UserInfo, size: number) => {
  const timeLeft = userInfo.expires - new Date().getTime();
  const daysLeft = Math.floor(timeLeft / 1000 / 3600 / 24);
  const price = (Number(formatUSDC(BigInt(1000))) * daysLeft * (userInfo.size - size)).toFixed(3) + ' USDC';
  return {price, daysLeft};
};
