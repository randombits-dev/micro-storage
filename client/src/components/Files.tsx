import React, {useState} from 'react';
import ManageAccount from "./ManageAccount.tsx";
import {UserInfo} from "../utils/definitions.ts";
import {Navbar} from "./layout/NavBar.tsx";
import FileContainer from "./FileContainer.tsx";

interface Props {
  userInfo: UserInfo;
  signature: string;
}

const Files = ({userInfo, signature}: Props) => {
  const [manageAccount, setManageAccount] = useState(false);

  return (
    <div
      className={"flex flex-col min-h-screen"}>
      <Navbar userInfo={userInfo} signature={signature} manageAccount={() => setManageAccount(!manageAccount)}/>
      {manageAccount && <ManageAccount back={() => setManageAccount(false)}/>}

      <FileContainer manageAccount={manageAccount}/>


    </div>

  );
};

export default Files;
