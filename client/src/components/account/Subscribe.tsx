import React, {useState} from 'react';
import {useEstimatePrice} from "../../hooks/useEstimatePrice.ts";
import {useBalance} from "../../hooks/useBalance.ts";
import ActionButton from "./../common/ActionButton.tsx";
import {useSubscribe} from "../../hooks/useSubscribe.ts";
import TemplateSpec from "./../TemplateSpec.tsx";
import ContractWriteStatus from "./../common/ContractWriteStatus.tsx";

interface Props {
}

const Subscribe = (params: Props) => {
  const [days, setDays] = useState(30);
  const [size, setSize] = useState(1);
  const [error, setError] = useState('');
  const {price, amount} = useEstimatePrice(days, size);
  const {balance} = useBalance();
  const {
    execute,
    enough,
    executeAllowance,
    statusAllowance,
    statusMsgAllowance,
    status,
    statusMsg,
    prepareError,
  } = useSubscribe('ipfs://bafkreibg6lnujfx67jrx6ppka5lt3vzrqug5g4mmfa6jes7szr2tv2oybu', amount || BigInt(0), size);

  const writeButton = () => {
    if (error) {
      return <ActionButton handleClick={() => {
      }} additionalClasses="mt-3" disabled={true}>{error}</ActionButton>;
    } else if (balance < (amount || 0)) {
      return <ActionButton handleClick={() => {
      }} additionalClasses="mt-3" disabled={true}>USDC balance too low</ActionButton>;
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

  if (status && status === 'success') {
    return <>
      <ContractWriteStatus status={status} statusMsg="Waiting for chainlink result"/>
    </>;
  } else if (status) {
    return <ContractWriteStatus status={status} statusMsg={statusMsg}/>;
  } else if (!enough && statusAllowance && statusAllowance !== 'success') {
    return <ContractWriteStatus status={statusAllowance} statusMsg={statusMsgAllowance}/>;
  } else {
    return (
        <div>
          <TemplateSpec name="BASE PRICE">0.01 USDC per day</TemplateSpec>
          <TemplateSpec name="PRICE PER GB">0.001 USDC per GB per day</TemplateSpec>

          <TemplateSpec name="LIMIT (GB)">
            <input className="rounded-xl border border-dashed border-neutral-800 bg-inherit w-20 px-5 py-1 outline-0"
                   onChange={updateSize}
                   type="text"
                   value={size}
            />
          </TemplateSpec>
          <TemplateSpec name="PRICE PER DAY">{Math.round((0.01 + 0.001 * size) * 1000) / 1000} per day</TemplateSpec>

          <TemplateSpec name="DAYS"><input
              className="rounded-xl border border-dashed border-neutral-800 bg-inherit w-20 px-5 py-1 outline-0"
              onChange={updateDays}
              type="text"
              value={days}
          />
          </TemplateSpec>
          <TemplateSpec name="TOTAL">{price} USDC</TemplateSpec>
          {
            writeButton()
          }
        </div>
    );
  }


};

export default Subscribe;
