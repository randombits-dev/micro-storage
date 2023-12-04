import React, {createContext, useContext, useState} from 'react';
import {useMyAccount} from "../hooks/useMyAccount.ts";
import {useServerSignature} from "../hooks/useServerSignature.ts";
import {formatSize} from "../utils/fileUtils.ts";


export type AccountContextType = {
  userInfo: any,
  hasSigned: boolean,
  subscribed: (token: number) => void;
  signature: string;
  signMessage: () => void;
  calcUsage: (usage: number) => void;
  usage: string;
}
// Create the context
const AccountContext = createContext<AccountContextType>({
  userInfo: null, subscribed: () => {
  },
  hasSigned: false,
  signature: '',
  signMessage: () => {
  },
  calcUsage: () => {
  },
  usage: '',
});

// Create the provider component
export const AccountProvider = ({children}) => {
  const {userInfo, refetch} = useMyAccount();
  const {hasSigned, signature, signMessage} = useServerSignature({token: userInfo?.token});
  const [usage, setUsage] = useState('');

  const subscribed = (token: number) => {
    void refetch();
  };

  const calcUsage = (usage: number) => {
    setUsage(formatSize(usage));
  };

  return (
    <AccountContext.Provider value={{userInfo, subscribed, hasSigned, signature, signMessage, calcUsage, usage}}>
      {children}
    </AccountContext.Provider>
  );
};

// Create the custom hook
export const useAccountContext = () => useContext(AccountContext);
