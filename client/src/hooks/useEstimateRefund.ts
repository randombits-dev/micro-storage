import {UserInfo} from '../utils/definitions';
import {formatUSDC} from '../utils/numberUtils';

export const useEstimateRefund = (userInfo: UserInfo) => {
  if (userInfo) {
    const timeLeft = userInfo.expires - new Date().getTime();
    const daysLeft = Math.floor(timeLeft / 1000 / 3600 / 24);
    const price = (Number(formatUSDC(BigInt(1000 + 10000))) * daysLeft).toFixed(2) + ' USDC';
    return {price};
  }
  return {};
};
