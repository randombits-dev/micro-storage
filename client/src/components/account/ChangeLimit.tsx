import React, {useState} from 'react';
import TemplateSpec from "../TemplateSpec.tsx";
import ActionButton from "../common/ActionButton.tsx";
import {useChangeLimit} from "../../hooks/useChangeLimit.ts";
import {useEstimateIncreaseLimit, useEstimateReduce} from "../../hooks/useEstimatePrice.ts";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import ContractWriteStatus from "../common/ContractWriteStatus.tsx";
import Card from "../common/Card.tsx";
import {usePriceFeed} from "../../hooks/usePriceFeed.ts";
import {useContractAddress} from "../../hooks/useContractAddress.ts";

interface Props {
}

const ChangeLimit = ({}: Props) => {
  const {userInfo} = useAccountContext();
  const {formattedFeed} = usePriceFeed(userInfo.coin);
  const {coinNames} = useContractAddress();

  const [size, setSize] = useState(userInfo.size);
  const [error, setError] = useState('');
  const {price: refundPrice, daysLeft: daysLeftReduce, usdPrice: reduceUsdPrice} = useEstimateReduce(userInfo, size);
  const {price: increasePrice, amount, usdPrice: increaseUsdPrice, daysLeft: daysLeftIncrease} = useEstimateIncreaseLimit(userInfo, size);
  const {
    execute,
    executeAllowance,
    enough,
    status,
    statusMsg,
    statusAllowance,
    statusMsgAllowance,
    customStatus,
    resetComplete
  } = useChangeLimit(userInfo, size, amount);


  const writeButton = () => {
    if (error) {
      return <ActionButton additionalClasses="mt-5" disabled={true}>{error}</ActionButton>;
    } else if (size > userInfo.size) {
      return <div className="mt-5">
        {!enough ?
            <ActionButton handleClick={() => executeAllowance()}>Allow MicroStorage to
              spend {coinNames[userInfo.coin]}</ActionButton>
            : <ActionButton additionalClasses="mt-3"
                            handleClick={() => execute()}>Increase Limit</ActionButton>}
      </div>;
    } else if (size < userInfo.size) {
      return <div className="mt-5">
        <ActionButton additionalClasses="mt-3"
                      handleClick={() => execute()}>Decrease Limit</ActionButton>
      </div>;
    } else {
      return <ActionButton additionalClasses="mt-3" disabled={true}>Limit is unchanged</ActionButton>;
    }
  };

  const writePrice = () => {
    if (size > userInfo.size) {
      return <>
        <TemplateSpec name="DAYS LEFT">{daysLeftIncrease}</TemplateSpec>
        <TemplateSpec name="TOTAL">{increaseUsdPrice} USD</TemplateSpec>
        <TemplateSpec name="COIN PRICE">{formattedFeed} USD</TemplateSpec>
        <TemplateSpec name="TOTAL IN COINS">{increasePrice} {coinNames[userInfo.coin]}</TemplateSpec>
      </>;
    } else if (size < userInfo.size) {
      return <>
        <TemplateSpec name="DAYS LEFT">{daysLeftReduce}</TemplateSpec>
        <TemplateSpec name="REFUND">{reduceUsdPrice} USD</TemplateSpec>
        <TemplateSpec name="COIN PRICE">{formattedFeed} USD</TemplateSpec>
        <TemplateSpec name="REFUND IN COINS">{refundPrice} {coinNames[userInfo.coin]}</TemplateSpec></>;
    } else {
      return <></>;
    }
  };

  const updateSize = (e: any) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setSize(value);

      if (!value) {
        setError('Minimum capacity is 1GB');
      } else if (value > 5) {
        setError('Maximum capacity is 5GB');
      } else {
        setError('');
      }
    }
  };

  const writeContents = () => {
    if (customStatus === 'success') {
      return <div className="text-center">
        <div className="fas fa-check-circle text-green-800 text-5xl"></div>
        <div className="text-xl my-5">Successfully Changed Limit</div>
        <ActionButton handleClick={() => resetComplete()}>OK</ActionButton>
      </div>;
    } else if (customStatus && customStatus !== 'success') {
      return <ContractWriteStatus status={customStatus} statusMsg="Waiting for chainlink result"/>;
    } else if (status && status !== 'success') {
      return <ContractWriteStatus status={status} statusMsg={statusMsg}/>;
    } else if (!enough && statusAllowance && statusAllowance !== 'success') {
      return <ContractWriteStatus status={statusAllowance} statusMsg={statusMsgAllowance}/>;
    } else {
      return <>
        <div className="mb-5">Increase or Decrease your storage limit</div>
        <TemplateSpec name="COIN">{coinNames[userInfo.coin]}</TemplateSpec>
        <TemplateSpec name="NEW LIMIT (GB)">
          <input className="rounded-xl border border-dashed border-neutral-800 bg-inherit w-20 px-5 py-1 outline-0"
                 onChange={updateSize}
                 type="text"
                 value={size}
          />
        </TemplateSpec>
        <TemplateSpec name="CHANGE OF">{size - userInfo.size} GB</TemplateSpec>
        <TemplateSpec name="PRICE PER GB">0.001 USD per GB per day</TemplateSpec>
        {writePrice()}
        {writeButton()}
      </>;
    }
  };

  return (
      <Card title="Change Limit" isDone={false}>
        {writeContents()}
      </Card>
  );
};

export default ChangeLimit;
