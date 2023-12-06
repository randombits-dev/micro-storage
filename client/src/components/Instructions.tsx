import React from 'react';
import Subscribe from "./account/Subscribe.tsx";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";
import {CustomWalletButton} from "./CustomWalletButton.tsx";
import {formatExpires} from "../utils/dates.ts";
import ActionButton from "./common/ActionButton.tsx";
import GiveMe from "./account/GiveMe.tsx";
import {useBalance} from "../hooks/useBalance.ts";

interface Props {
}

const Instructions = ({}: Props) => {

  const {balance} = useBalance();
  const {hasToken, userInfo, signMessage, hasSigned} = useAccountContext();
  const {address} = useAccount();

  const renderSub = () => {
    return <div className="border rounded-lg overflow-hidden my-5">
      <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3 flex items-center">
        <div className="flex-grow">Subscribe</div>
        {hasToken && <div className="fas fa-check-circle text-green-800"></div>}
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

  const renderGiveMe = () => {
    return <div className="border rounded-lg overflow-hidden my-5">
      <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3 flex items-center">
        <div className="flex-grow">Get Test USDC</div>
        {Number(balance) && <div className="fas fa-check-circle text-green-800"></div>}
      </div>
      <div className="p-5">
        <GiveMe/>
      </div>
    </div>;
  };


  return <div>
    <div className="container mx-auto flex items-center justify-center">
      <img src="/micro.png" alt="logo" width="400" className="mt-5"/>
      {/*<img src="/logo.svg" className="w-28 h-28 mx-auto" alt="logo"/>*/}
      {/*<div className="text-3xl flex-grow absolute top-5 left-5">Micro Storage</div>*/}

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
      {address && renderGiveMe()}
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
