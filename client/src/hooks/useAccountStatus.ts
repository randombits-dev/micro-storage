import {useServerSignature} from './useServerSignature.ts';
import {useAccount} from 'wagmi';
import {UserInfo} from '../utils/definitions.ts';
import {useMyAccount} from './useMyAccount.ts';

const getStatus = (userInfo: UserInfo, hasSigned: boolean, address: any) => {
  if (address) {
    if (userInfo) {
      return hasSigned ? 4 : 3;
    }
    return 2;
  }
  return 1;
};

export const useAccountStatus = () => {
  const {userInfo} = useMyAccount();
  const {hasSigned} = useServerSignature({token: userInfo?.token});
  const {address} = useAccount();

  return {
    userInfo,
    hasSigned,
    address,
    status: getStatus(userInfo, hasSigned, address)
  };
};
