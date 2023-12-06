import React from 'react';
import Subscribe from "./account/Subscribe.tsx";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";
import {CustomWalletButton} from "./CustomWalletButton.tsx";
import {formatExpires} from "../utils/dates.ts";
import ActionButton from "./common/ActionButton.tsx";
import GiveMe from "./account/GiveMe.tsx";
import {useBalance} from "../hooks/useBalance.ts";
import Card from "./common/Card.tsx";

interface Props {
}

const Instructions = ({}: Props) => {

  const {balance} = useBalance();
  const {hasToken, userInfo, signMessage, hasSigned} = useAccountContext();
  const {address} = useAccount();

  const renderSub = () => {

    return <Card title="Subscribe" isDone={hasToken}>
      {hasToken ? <div>
        <div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>
        <div>Limit of {userInfo?.size} GB</div>
      </div> : <Subscribe/>}
    </Card>;
  };

  const renderGiveMe = () => {
    return <Card title="Get Test USDC" isDone={Number(balance)}>
      <GiveMe/>
    </Card>;
  };

  const renderSign = () => {
    return <Card title="Sign to Login" isDone={false}>
      <ActionButton handleClick={() => signMessage()}>Sign In
      </ActionButton>
    </Card>;
  };


  return <div>
    <div className="container mx-auto flex items-center justify-center">
      <img src="/logo-light.png" alt="logo" width="400" className="mt-5"/>
      {/*<img src="/logo.svg" className="w-28 h-28 mx-auto" alt="logo"/>*/}
      {/*<div className="text-3xl flex-grow absolute top-5 left-5">Micro Storage</div>*/}

    </div>
    <div className="w-[500px] mx-auto py-20">
      <div className="text-2xl font-bold text-center">Perform the following steps to get started:</div>

      <Card title="Connect Wallet" isDone={address}>
        <CustomWalletButton/>
      </Card>

      {address && renderGiveMe()}
      {address && renderSub()}
      {userInfo?.token && renderSign()}

    </div>
    ;
  </div>;
};

export default Instructions;
