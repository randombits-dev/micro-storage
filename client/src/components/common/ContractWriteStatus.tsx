import React from 'react';

interface Props {
  status: string;
  statusMsg: string;
}

const ContractWriteStatus = ({status, statusMsg}: Props) => {
  if (status) {
    return <div className="text-center">
      <div className="spinner"></div>
      <div>{statusMsg}</div>
    </div>;
  }
  return <div></div>;
};

export default ContractWriteStatus;
