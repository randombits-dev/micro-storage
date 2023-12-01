import React from 'react';
import TemplateSpec from "../TemplateSpec.tsx";
import ActionButton from "../common/ActionButton.tsx";
import {useUnsubscribe} from "../../hooks/useUnsubscribe.ts";
import {useEstimateRefund} from "../../hooks/useEstimateRefund.ts";
import {UserInfo} from "../../utils/definitions.ts";

interface Props {
  userInfo: UserInfo;
}

const Unsubscribe = ({userInfo}: Props) => {
  const {price: refundPrice} = useEstimateRefund(userInfo);
  const {execute: executeUnsub, status: statusUnsub, statusMsg: statusMsgUnsub} = useUnsubscribe(userInfo?.token);

  return (
      <div>
        <h2 className="text-4xl mt-10 mb-5">Unsubscribe</h2>
        <div>Your files will be deleted. You will get a refund for unused time.</div>
        <TemplateSpec name="ESTIMATED REFUND">{refundPrice}</TemplateSpec>
        <ActionButton additionalClasses="mt-3"
                      handleClick={() => executeUnsub()}>Unsubscribe</ActionButton>
      </div>
  );
};

export default Unsubscribe;
