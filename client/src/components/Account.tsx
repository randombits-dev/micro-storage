import React from 'react';
import {useMyAccount} from "../hooks/useMyAccount.ts";
import {formatExpires} from "../utils/dates.ts";

interface Props {
  manageAccount: () => void;
}

const Account = ({manageAccount}: Props) => {
  const {userInfo} = useMyAccount();

  if (userInfo) {
    return (
        <div>
          <div>Your subscription ends {formatExpires(new Date(userInfo?.expires))}</div>
          <div>Using {1} GB of {userInfo?.token} GB</div>
          <button onClick={manageAccount}>Manage Account</button>
        </div>
    );
  }
};

export default Account;
