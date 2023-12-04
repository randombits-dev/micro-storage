import React from 'react';
import Files from "./Files.tsx";
import Instructions from "./Instructions.tsx";
import {UserInfo} from "../utils/definitions.ts";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";

interface Props {
  userInfo: UserInfo;
  signature: string;
}

const Main = (params: Props) => {
  const {address} = useAccount();
  const {hasToken, userInfo, hasSigned, signature} = useAccountContext();

  if (hasToken && address && userInfo?.token && hasSigned) {
    return <Files userInfo={userInfo!} signature={signature}/>;
  }
  return <Instructions/>;
};

export default Main;
