import React from 'react';
import {ConnectButton} from "@rainbow-me/rainbowkit";
import Subscribe from "./Subscribe.tsx";
import SignIn from "./SignIn.tsx";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";
import {useServerSignature} from "../hooks/useServerSignature.ts";

interface Props {

}

const Instructions = (params: Props) => {

  const {userInfo} = useAccountContext();
  const {hasSigned} = useServerSignature({token: userInfo?.token});
  const {address} = useAccount();


  if (address) {
    if (userInfo) {
      if (hasSigned) {
        return <div className="container mx-auto">
          Done
        </div>;
      } else {
        return <div className="container mx-auto">
          <div className="text-5xl font-bold">3. Sign to Login</div>
          <div>This proves that you own the wallet.</div>
          <SignIn token={1}/>
        </div>;
      }

    } else {
      return <div className="container mx-auto">
        <div className="text-5xl font-bold">2. Subscribe</div>
        <Subscribe/>
      </div>;
    }
  } else {
    return <div className="container mx-auto">
      <div className="text-5xl font-bold">1. Connect Wallet</div>
      <ConnectButton/>
    </div>;
  }
};

export default Instructions;
