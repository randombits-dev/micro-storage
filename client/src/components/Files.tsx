import React, {useState} from 'react';
import FileList from "./FileList.tsx";
import Account from "./Account.tsx";
import ManageAccount from "./ManageAccount.tsx";

interface Props {
}

const Files = ({}: Props) => {
  const [manageAccount, setManageAccount] = useState(false);


  if (manageAccount) {
    return (
        <div className="container mx-auto">
          <ManageAccount/>
        </div>
    );
  }

  return (
      <div className="container mx-auto">
        <Account manageAccount={() => setManageAccount(true)}/>

        <FileList/>
      </div>

  );
};

export default Files;
