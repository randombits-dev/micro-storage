import React from 'react';
import Subscribe from "./Subscribe.tsx";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";
import {CustomWalletButton} from "./CustomWalletButton.tsx";
import {formatExpires} from "../utils/dates.ts";
import ActionButton from "./common/ActionButton.tsx";

interface Props {
}

const Instructions = ({}: Props) => {

  const {userInfo, signMessage, hasSigned} = useAccountContext();
  const {address} = useAccount();

  const renderSub = () => {
    return <div className="border rounded-lg overflow-hidden my-5">
      <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3">Subscribe</div>
      {
        userInfo?.token ? <div className="p-5">
          <div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>
          <div>Limit of {userInfo?.size} GB</div>
        </div> : <div className="p-5">
          <Subscribe/>
        </div>
      }
    </div>;
  };


  return <div className="w-[500px] mx-auto py-20">
    <div className="border rounded-lg overflow-hidden my-5">
      <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3">Connect Wallet</div>
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

  </div>;
};

export default Instructions;
