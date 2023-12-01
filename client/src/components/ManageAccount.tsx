import React from 'react';
import {formatExpires} from "../utils/dates.ts";
import {useMyAccount} from "../hooks/useMyAccount.ts";
import Unsubscribe from "./account/Unsubscribe.tsx";
import Extend from "./account/Extend.tsx";
import Reduce from "./account/Reduce.tsx";

interface Props {
}

const ManageAccount = (params: Props) => {
  const {userInfo} = useMyAccount();


  return (
      <div>
        <h1 className="text-4xl mb-5">Account Management</h1>
        <div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>
        <div>Using {1} GB of {userInfo?.token} GB</div>

        <Extend userInfo={userInfo}/>
        <Reduce userInfo={userInfo}/>
        <Unsubscribe userInfo={userInfo}/>
      </div>
  );
};

export default ManageAccount;
