import React from 'react';
import Subscribe from "./account/Subscribe.tsx";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";
import {CustomWalletButton} from "./CustomWalletButton.tsx";
import {formatExpires} from "../utils/dates.ts";
import ActionButton from "./common/ActionButton.tsx";

interface Props {
}

const Instructions = ({}: Props) => {

  const {hasToken, userInfo, signMessage, hasSigned} = useAccountContext();
  const {address} = useAccount();

  const renderSub = () => {
    return <div className="border rounded-lg overflow-hidden my-5">
      <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3 flex items-center">
        <div className="flex-grow">Subscribe</div>
        {userInfo?.token && <div className="fas fa-check-circle text-green-800"></div>}
      </div>
      {
        hasToken ? <div className="p-5">
          <div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>
          <div>Limit of {userInfo?.size} GB</div>
        </div> : <div className="p-5">
          <Subscribe/>
        </div>
      }
    </div>;
  };


  return <div>
    <div className="container mx-auto flex items-center">
      <img src="/logo.png" className="w-20 h-20 mx-auto invert" alt="logo"/>
      <div className="text-3xl flex-grow">Micro Storage</div>
    </div>
    <div className="w-[500px] mx-auto py-20">
      <div className="text-2xl font-bold text-center">Perform the following steps to get started:</div>

      <div className="border rounded-lg overflow-hidden my-5">
        <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3 flex items-center">
          <div className="flex-grow">Connect Wallet</div>
          {address && <div className="fas fa-check-circle text-green-800"></div>}
        </div>
        <div className="p-5">
          <CustomWalletButton/>
        </div>
      </div>
      {address && renderSub()}

      {userInfo?.token && <div className="border rounded-lg overflow-hidden my-5">
        <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3">Sign to Login</div>
        <div className="p-5">
          <ActionButton handleClick={() => signMessage()}>Sign In
          </ActionButton>
        </div>
      </div>}

    </div>
    ;
  </div>;
};

export default Instructions;
