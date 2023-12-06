import React, {createContext, useContext, useState} from 'react';
import {useMyAccount} from "../hooks/useMyAccount.ts";
import {useServerSignature} from "../hooks/useServerSignature.ts";
import {formatSize} from "../utils/fileUtils.ts";


export type AccountContextType = {
  hasToken: boolean,
  userInfo: any,
  hasSigned: boolean,
  refetchUserInfo: () => void;
  signature: string;
  signMessage: () => void;
  calcUsage: (usage: number) => void;
  usage: string;
  refetchToken: () => void;
}
// Create the context
const AccountContext = createContext<AccountContextType>({
  hasToken: false,
  userInfo: null, refetchUserInfo: () => {
  },
  hasSigned: false,
  signature: '',
  signMessage: () => {
  },
  calcUsage: () => {
  },
  usage: '',
  refetchToken: () => {
  }
});

// Create the provider component
export const AccountProvider = ({children}) => {
  const {userInfo, hasToken, refetchUserInfo, refetchToken} = useMyAccount();
  const {hasSigned, signature, signMessage} = useServerSignature({token: userInfo?.token});
  const [usage, setUsage] = useState('');

  const calcUsage = (usage: number) => {
    setUsage(formatSize(usage));
  };

  return (
      <AccountContext.Provider
          value={{hasToken, userInfo, refetchUserInfo, hasSigned, signature, signMessage, calcUsage, usage, refetchToken}}>
        {children}
      </AccountContext.Provider>
  );
};

// Create the custom hook
export const useAccountContext = () => useContext(AccountContext);
