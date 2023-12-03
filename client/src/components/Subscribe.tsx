import React, {useState} from 'react';
import {useEstimatePrice} from "../hooks/useEstimatePrice.ts";
import {useBalance} from "../hooks/useBalance.ts";
import ActionButton from "./common/ActionButton.tsx";
import {useSubscribe} from "../hooks/useSubscribe.ts";
import TemplateSpec from "./TemplateSpec.tsx";

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
      return <button className="bg-neutral-800 px-10 py-3 w-full mt-5">{error}</button>;
    } else if (balance < (amount || 0)) {
      return <button className="bg-neutral-800 px-10 py-3 w-full mt-5">USDC balance too low</button>;
    } else {
      const approveText = enough ? 'USDC Approved' : `Allow MicroStorage to spend USDC`;
      return <div className="mt-5">
        <ActionButton disabled={enough} handleClick={() => executeAllowance()}>{approveText}</ActionButton>
        <ActionButton additionalClasses="mt-3" disabled={!enough}
                      handleClick={() => execute()}>Pay {price} USDC</ActionButton>
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
      } else if (value > 30) {
        setError('Maximum capacity is 100GB');
      } else {
        setError('');
      }
    }
  };

  return (
      <div>
        <TemplateSpec name="BASE PRICE">0.01 USDC per day</TemplateSpec>
        <TemplateSpec name="PRICE PER GB">0.001 USDC per GB per day</TemplateSpec>

        <TemplateSpec name="LIMIT (GB)">
          <input className="bg-neutral-900 w-20 px-5 py-1 outline-0"
                 onChange={updateSize}
                 type="text"
                 value={size}
          />
        </TemplateSpec>
        <TemplateSpec name="PRICE PER DAY">{Math.round((0.01 + 0.001 * size) * 1000) / 1000} per day</TemplateSpec>

        <TemplateSpec name="DAYS"><input className="bg-neutral-900 w-20 px-5 py-1 outline-0"
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
};

export default Subscribe;
