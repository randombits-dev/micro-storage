import React from 'react';
import TemplateSpec from "../TemplateSpec.tsx";
import ActionButton from "../common/ActionButton.tsx";
import {useUnsubscribe} from "../../hooks/useUnsubscribe.ts";
import {useEstimateRefund} from "../../hooks/useEstimateRefund.ts";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import ContractWriteStatus from "../common/ContractWriteStatus.tsx";
import Card from "../common/Card.tsx";

interface Props {
}

const Unsubscribe = ({}: Props) => {
  const {userInfo} = useAccountContext();

  const {price: refundPrice, daysLeft} = useEstimateRefund(userInfo);
  const {execute: executeUnsub, status, statusMsg} = useUnsubscribe(userInfo?.token);

  const writeContents = () => {
    if (status) {
      return <ContractWriteStatus status={status} statusMsg={status === 'success' ? 'Waiting on chainlink result' : statusMsg}/>;
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
    <Card title="Unsubscribe" isDone={false}>
      {writeContents()}
    </Card>
  );
};

export default Unsubscribe;
