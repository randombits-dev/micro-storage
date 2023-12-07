import React from 'react';
import Unsubscribe from "./account/Unsubscribe.tsx";
import Extend from "./account/Extend.tsx";
import ChangeLimit from "./account/ChangeLimit.tsx";

const ManageAccount = () => {
  return (
    <div className="mx-auto w-[500px] mt-10">
      <Extend/>
      <ChangeLimit/>
      <Unsubscribe/>
    </div>
  );
};

export default ManageAccount;
