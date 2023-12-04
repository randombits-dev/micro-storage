import React from 'react';
import {useMyAccount} from "../hooks/useMyAccount.ts";
import Unsubscribe from "./account/Unsubscribe.tsx";
import Extend from "./account/Extend.tsx";
import Reduce from "./account/Reduce.tsx";

interface Props {
  back: () => void;
}

const ManageAccount = ({back}: Props) => {
  const {userInfo} = useMyAccount();


  return (
    <div className="mx-auto w-[500px] mt-10">
      {/*<button className="bg-neutral-800 px-10 py-3 mt-5" onClick={back}> &lt; Back</button>*/}
      {/*<h1 className="text-4xl mb-5">Account Management</h1>*/}
      {/*<div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>*/}
      {/*<div>Using {1} GB of {userInfo?.size} GB</div>*/}

      <Extend userInfo={userInfo}/>
      <Reduce userInfo={userInfo}/>
      <Unsubscribe userInfo={userInfo}/>
    </div>
  );
};

export default ManageAccount;
