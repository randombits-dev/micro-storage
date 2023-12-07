import {UserInfo} from '../utils/definitions.ts';
import {usePriceFeed} from './usePriceFeed.ts';
import {formatUnits} from 'viem';

export const useEstimatePrice = (coin: string, days: number, size: number) => {
  const {priceFeed} = usePriceFeed(coin);

  const usdAmount = BigInt(days) * (BigInt(size) * BigInt('1000000000000000') + BigInt('10000000000000000'));
  const amount = priceFeed > 0 ? BigInt('100000000') * usdAmount / priceFeed : BigInt(0);
  const price = formatUnits(amount, 18);
  const usdPrice = formatUnits(usdAmount, 18);
  return {price, amount, usdPrice, usdAmount};
};

export const useEstimateIncreaseLimit = (userInfo: UserInfo, newSize: number) => {
  const {priceFeed} = usePriceFeed(userInfo.coin);

  const daysLeft = Math.ceil((userInfo.expires - Date.now()) / 24 / 60 / 60 / 1000);
  const usdAmount = BigInt(daysLeft) * BigInt(newSize - userInfo.size) * BigInt('1000000000000000');
  const amount = priceFeed > 0 ? BigInt('100000000') * usdAmount / priceFeed : BigInt(0);
  const price = formatUnits(amount, 18);
  const usdPrice = formatUnits(usdAmount, 18);
  return {price, amount, usdPrice, usdAmount, daysLeft};
};

export const useEstimateReduce = (userInfo: UserInfo, size: number) => {
  const {priceFeed} = usePriceFeed(userInfo.coin);

  const timeLeft = userInfo.expires - new Date().getTime();
  const daysLeft = timeLeft / 1000 / 3600 / 24;

  const usdAmount = BigInt(Math.floor(daysLeft * 100)) * BigInt(userInfo.size - size) * BigInt('1000000000000000') / BigInt(100);
  const amount = priceFeed > 0 ? BigInt('100000000') * usdAmount / priceFeed : BigInt(0);
  const price = formatUnits(amount, 18);
  const usdPrice = formatUnits(usdAmount, 18);
  return {price, amount, usdPrice, usdAmount, daysLeft: daysLeft.toFixed(2)};
};

export const useEstimateRefund = (userInfo: UserInfo) => {
  const {priceFeed} = usePriceFeed(userInfo.coin);

  const timeLeft = userInfo.expires - new Date().getTime();
  const daysLeft = timeLeft / 1000 / 3600 / 24;

  const usdAmount = BigInt(Math.floor(daysLeft * 100)) * (BigInt(userInfo.size) * BigInt('1000000000000000') + BigInt('10000000000000000')) / BigInt(100);
  const amount = priceFeed > 0 ? BigInt('100000000') * usdAmount / priceFeed : BigInt(0);
  const price = formatUnits(amount, 18);
  const usdPrice = formatUnits(usdAmount, 18);
  return {price, amount, usdPrice, usdAmount, daysLeft: daysLeft.toFixed(2)};
};
