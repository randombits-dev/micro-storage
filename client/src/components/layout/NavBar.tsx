import {CustomWalletButton} from "../CustomWalletButton.tsx";
import {UserInfo} from "../../utils/definitions.ts";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import React from "react";

interface Props {
  userInfo: UserInfo;
  signature: string;
  manageAccount: () => void;
}

export function Navbar({userInfo, signature, manageAccount}: Props) {
  const {usage} = useAccountContext();

  const renderContent = () => {
    if (userInfo?.expired) {
      return <div>Subscription has expired. Your account has been scheduled for deletion.</div>;
    }
    return <>
      <div className="border-r px-5 py-3">
        {/*Subscription ends in <Timer end={userInfo.expires} expired={userInfo.expired}/>*/}
        Subscription expires on {new Date(userInfo.expires).toLocaleDateString()}
      </div>
      <div className="border-r px-5 py-3">
        Using {usage} of {userInfo.size} GB
      </div>
      <div className="border-r px-5 py-3 ">
        <button onClick={manageAccount} className="underline">Manage Account</button>
      </div>
    </>;
  };

  return (
    <div className="z-50 px-10 border-b">
      <nav className="layout flex items-center container mx-auto">
        {renderContent()}
        <div className="px-5 py-3">
          <CustomWalletButton/>
        </div>
      </nav>
    </div>
  );
}
