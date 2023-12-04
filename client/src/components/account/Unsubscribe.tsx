import React, {useEffect} from 'react';
import TemplateSpec from "../TemplateSpec.tsx";
import ActionButton from "../common/ActionButton.tsx";
import {useUnsubscribe} from "../../hooks/useUnsubscribe.ts";
import {useEstimateRefund} from "../../hooks/useEstimateRefund.ts";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import ContractWriteStatus from "../common/ContractWriteStatus.tsx";

interface Props {
}

const Unsubscribe = ({}: Props) => {
  const {userInfo, refetchToken} = useAccountContext();

  const {price: refundPrice, daysLeft} = useEstimateRefund(userInfo);
  const {execute: executeUnsub, status, statusMsg} = useUnsubscribe(userInfo?.token);

  useEffect(() => {
    if (status === 'success') {
      void refetchToken();
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    }
  }, [status]);

  const writeContents = () => {
    if (status) {
      return <ContractWriteStatus status={status} statusMsg={status === 'success' ? 'Please Wait' : statusMsg}/>;
    } else {
      return <>
        <div className="mb-5">Your files will be deleted. You will get a refund for unused time.</div>
        <TemplateSpec name="DAYS LEFT">{daysLeft}</TemplateSpec>
        <TemplateSpec name="ESTIMATED REFUND">{refundPrice}</TemplateSpec>
        <ActionButton additionalClasses="mt-3"
                      handleClick={() => executeUnsub()}>Unsubscribe</ActionButton></>;
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden my-5">
      <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3">Unsubscribe</div>
      <div className="p-5">
        {writeContents()}
      </div>
    </div>
  );
};

export default Unsubscribe;
