import React, {useEffect, useState} from 'react';
import {useExtendSubscription} from "../../hooks/useExtendSubscription.ts";
import ActionButton from "../common/ActionButton.tsx";
import {useEstimatePrice} from "../../hooks/useEstimatePrice.ts";
import {useBalance} from "../../hooks/useBalance.ts";
import TemplateSpec from "../TemplateSpec.tsx";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import ContractWriteStatus from "../common/ContractWriteStatus.tsx";
import Card from "../common/Card.tsx";

interface Props {
}

const Extend = ({}: Props) => {
  const {userInfo, refetchUserInfo} = useAccountContext();
  const initialDays = 30 - Math.ceil((userInfo?.expires - Date.now()) / 1000 / 60 / 60 / 24);
  const [days, setDays] = useState(initialDays);
  const [error, setError] = useState('');
  const {price, amount} = useEstimatePrice(days, userInfo.size);
  const {balance} = useBalance();
  const [success, setSuccess] = useState(false);
  const {
    execute,
    enough,
    prepareError,
    executeAllowance,
    status,
    statusAllowance,
    statusMsg,
    statusMsgAllowance
  } = useExtendSubscription(userInfo?.token, amount, userInfo.size);

  useEffect(() => {
    if (status === 'success') {
      void refetchUserInfo();
      setSuccess(true);
    }
  }, [status]);

  const writeButton = () => {
    if (error) {
      return <button className="bg-neutral-800 px-10 py-3 w-full mt-5">{error}</button>;
    } else if (prepareError) {
      return <button className="bg-neutral-800 px-10 py-3 w-full mt-5">Cannot extend past 30 days</button>;
    } else if (balance < (amount || 0)) {
      return <button className="bg-neutral-800 px-10 py-3 w-full mt-5">USDC balance too low</button>;
    } else {
      const approveText = enough ? 'USDC Approved' : `Allow MicroStorage to spend USDC`;
      return <div className="mt-5">
        {!enough ? <ActionButton handleClick={() => executeAllowance()}>{approveText}</ActionButton>
          : <ActionButton additionalClasses="mt-3"
                          handleClick={() => execute()}>Pay {price} USDC</ActionButton>}
      </div>;
    }
  };

  const updateDays = (e: any) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setDays(value);

      if (!value) {
        setError('Minimum rental time is 1 day');
      } else if (value > 30) {
        setError('Maximum rental time is 30 days');
      } else {
        setError('');
      }
    }
  };

  const writeContents = () => {
    if (success) {
      return <div className="text-center">
        <div className="fas fa-check-circle text-green-800 text-5xl"></div>
        <div className="text-xl my-5">Successfully Extended</div>
        <ActionButton handleClick={() => setSuccess(false)}>OK</ActionButton>
      </div>;
    } else if (status && status !== 'success') {
      return <ContractWriteStatus status={status} statusMsg={statusMsg}/>;
    } else if (!enough && statusAllowance && statusAllowance !== 'success') {
      return <ContractWriteStatus status={statusAllowance} statusMsg={statusMsgAllowance}/>;
    } else {
      return <>
        <TemplateSpec name="BASE PRICE">0.01 USDC per day</TemplateSpec>
        <TemplateSpec name="PRICE PER GB">0.001 USDC per GB per day</TemplateSpec>

        <TemplateSpec name="LIMIT (GB)">{userInfo.size}</TemplateSpec>
        <TemplateSpec name="PRICE PER DAY">{Math.round((0.01 + 0.001 * userInfo.size) * 1000) / 1000} per
          day</TemplateSpec>

        <TemplateSpec name="DAYS"><input className="rounded-xl border border-dashed border-neutral-800 bg-inherit w-20 px-5 py-1 outline-0"
                                         onChange={updateDays}
                                         type="text"
                                         value={days}
        />
        </TemplateSpec>
        <TemplateSpec
          name="NEW EXPIRES">{new Date(userInfo.expires + days * 24 * 60 * 60 * 1000).toLocaleString()}</TemplateSpec>
        <TemplateSpec name="TOTAL">{price} USDC</TemplateSpec>
        {
          writeButton()
        }</>;
    }
  };


  return (
    <Card title="Extend Subscription" isDone={false}>
      {writeContents()}
    </Card>
  );
};

export default Extend;
