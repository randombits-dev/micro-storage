import React, {useEffect} from 'react';
import {useBalance} from "../../hooks/useBalance.ts";
import ActionButton from "./../common/ActionButton.tsx";
import ContractWriteStatus from "./../common/ContractWriteStatus.tsx";
import {useGiveMe} from "../../hooks/useGiveMe.ts";

interface Props {
}

const GiveMe = (params: Props) => {
  const {format, refetch} = useBalance();
  const {
    execute,
    status,
    statusMsg,
  } = useGiveMe();

  useEffect(() => {
    if (status === 'success') {
      void refetch();
    }
  }, [status]);

  const writeButton = () => {
    return <div className="mt-5">
      <ActionButton additionalClasses="mt-3"
                    handleClick={() => execute()}>Get Test Tokens</ActionButton>
    </div>;
  };

  if (status && status !== 'success') {
    return <ContractWriteStatus status={status} statusMsg={statusMsg}/>;
  } else {
    return (
      <div>
        <div>Get 10 Test USDC Tokens to pay for the subscription on TestNet</div>
        <div>Current balance: {format()}</div>
        {
          writeButton()
        }
      </div>
    );
  }


};

export default GiveMe;
