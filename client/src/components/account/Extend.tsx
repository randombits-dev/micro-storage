import React, {useState} from 'react';
import {useExtendSubscription} from "../../hooks/useExtendSubscription.ts";
import ActionButton from "../common/ActionButton.tsx";
import {UserInfo} from "../../utils/definitions.ts";
import {useEstimatePrice} from "../../hooks/useEstimatePrice.ts";
import {useBalance} from "../../hooks/useBalance.ts";

interface Props {
  userInfo: UserInfo;
}

const Extend = ({userInfo}: Props) => {
  const initialDays = 30 - Math.ceil((userInfo?.expires - Date.now()) / 1000 / 60 / 60 / 24);
  const [days, setDays] = useState(initialDays);
  const [size, setSize] = useState(1);
  const [error, setError] = useState('');
  const {price, amount} = useEstimatePrice(days, size);
  const {balance} = useBalance();
  const {execute, enough, status, executeAllowance} = useExtendSubscription(userInfo?.token, amount, size);
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

  const updateHours = (e: any) => {
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
      <h2 className="text-4xl mt-10 mb-5">Extend Subscription</h2>
      <div>
        <div>Base Price: 0.01 USDC per day</div>
        <div>Price per GB: 0.001 USDC per GB per day</div>

        <div>
          <input className="bg-neutral-900 w-20 px-5 py-1 outline-0"
                 onChange={updateSize}
                 type="text"
                 value={size}
          /> GB
        </div>
        <div>{Math.round((0.01 + 0.001 * size) * 1000) / 1000} per day</div>

        <div><input className="bg-neutral-900 w-20 px-5 py-1 outline-0"
                    onChange={updateHours}
                    type="text"
                    value={days}
        /> days
        </div>
        <div>Total: {price} USDC</div>
        {
          writeButton()
        }
      </div>
    </div>
  );
};

export default Extend;
