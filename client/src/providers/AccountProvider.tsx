import React, {createContext, useContext} from 'react';
import {useMyAccount} from "../hooks/useMyAccount.ts";
import {useServerSignature} from "../hooks/useServerSignature.ts";


export type AccountContextType = {
  userInfo: any,
  hasSigned: boolean,
  subscribed: (token: number) => void;
  signature: string;
  signMessage: () => void;
}
// Create the context
const AccountContext = createContext<AccountContextType>({
  userInfo: null, subscribed: () => {
  },
  hasSigned: false,
  signature: '',
  signMessage: () => {
  }
});

// Create the provider component
export const AccountProvider = ({children}) => {
  const {userInfo, refetch} = useMyAccount();
  const {hasSigned, signature, signMessage} = useServerSignature({token: userInfo?.token});

  const subscribed = (token: number) => {
    void refetch();
  };

  return (
    <AccountContext.Provider value={{userInfo, subscribed, hasSigned, signature, signMessage}}>
      {children}
    </AccountContext.Provider>
  );
};

// Create the custom hook
export const useAccountContext = () => useContext(AccountContext);
