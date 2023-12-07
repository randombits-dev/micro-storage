import React, {useEffect} from 'react';
import Subscribe from "./account/Subscribe.tsx";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import {useAccount} from "wagmi";
import {CustomWalletButton} from "./CustomWalletButton.tsx";
import {formatExpires} from "../utils/dates.ts";
import ActionButton from "./common/ActionButton.tsx";
import {useBalance} from "../hooks/useBalance.ts";
import Card from "./common/Card.tsx";

interface Props {
}

const Instructions = ({}: Props) => {

  const {balance} = useBalance();
  const {hasToken, userInfo, signMessage, refetchToken} = useAccountContext();
  const {address} = useAccount();

  const checkForToken = () => {
    refetchToken();
    if (!hasToken) {
      setTimeout(() => {
        checkForToken();
      }, 5000);
    }
  };

  useEffect(() => {
    checkForToken();
  }, []);

  const renderSub = () => {

    return <Card title="Subscribe" isDone={hasToken}>
      {hasToken ? <div>
        <div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>
        <div>Limit of {userInfo?.size} GB</div>
      </div> : <Subscribe/>}
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
    </div>
    <div className="bg-yellow-300 px-10 py-3 text-center mt-10">
      <i className="fas fa-warning mr-5 text-3xl"/>
      This is a pre-alpha release. Please use for testing purposes only, and do not upload any sensitive documents.
    </div>
    <div className="w-[500px] mx-auto py-10">
      <div className="text-2xl font-bold text-center">Perform the following steps to get started:</div>

      <Card title="Connect Wallet" isDone={address}>
        <CustomWalletButton/>
      </Card>

      {address && renderSub()}
      {userInfo?.token && renderSign()}

    </div>
    ;
  </div>;
};

export default Instructions;
