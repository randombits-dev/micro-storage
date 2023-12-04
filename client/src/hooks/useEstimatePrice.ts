import {formatUSDC} from '../utils/numberUtils';
import {UserInfo} from "../utils/definitions.ts";

export const useEstimatePrice = (days: number, size: number) => {
  const amount = BigInt(Math.ceil(days * (size * 1000 + 10000)));
  const price = formatUSDC(amount);
  return {price, amount};
};

export const useEstimateIncreaseLimit = (userInfo: UserInfo, newSize: number) => {
  const daysLeft = Math.ceil((userInfo.expires - Date.now()) / 24 / 60 / 60 / 1000);
  const amount = BigInt(Math.ceil(daysLeft * ((newSize - userInfo.size) * 1000)));
  const price = formatUSDC(amount);
  return {price, amount, daysLeft};
};
