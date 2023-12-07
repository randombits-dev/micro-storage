import React, {useState} from 'react';
import {useEstimatePrice} from "../../hooks/useEstimatePrice.ts";
import {useBalance} from "../../hooks/useBalance.ts";
import ActionButton from "./../common/ActionButton.tsx";
import {useSubscribe} from "../../hooks/useSubscribe.ts";
import TemplateSpec from "./../TemplateSpec.tsx";
import ContractWriteStatus from "./../common/ContractWriteStatus.tsx";
import {usePriceFeed} from "../../hooks/usePriceFeed.ts";
import {COIN_LIST} from "../../utils/network.ts";

interface Props {
}

const Subscribe = (params: Props) => {
  const [days, setDays] = useState(30);
  const [size, setSize] = useState(1);
  const [error, setError] = useState('');
  const [coin, setCoin] = useState('0x326C977E6efc84E512bB9C30f76E30c160eD06FB');
  const {priceFeed, formattedFeed} = usePriceFeed(coin);
  const {price, amount, usdPrice} = useEstimatePrice(coin, days, size);
  const {balance} = useBalance(coin);
  const {
    execute,
    enough,
    executeAllowance,
    statusAllowance,
    statusMsgAllowance,
    status,
    statusMsg,
    prepareError,
  } = useSubscribe(coin, amount || BigInt(0), size);

  const writeButton = () => {
    if (error) {
      return <ActionButton handleClick={() => {
      }} additionalClasses="mt-3" disabled={true}>{error}</ActionButton>;
    } else if (balance < (amount || 0)) {
      return <ActionButton handleClick={() => {
      }} additionalClasses="mt-3" disabled={true}>Coin balance too low</ActionButton>;
    } else {
      return <div className="mt-5">
        {!enough ? <ActionButton handleClick={() => executeAllowance()}>Allow MicroStorage to spend {COIN_LIST[coin]}</ActionButton>
          : <ActionButton additionalClasses="mt-3"
                          handleClick={() => execute()}>Pay {price} {COIN_LIST[coin]}</ActionButton>}
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
        <TemplateSpec name="PAYMENT COIN">
          <select className="rounded-xl border border-dashed border-neutral-800 bg-inherit px-5 py-1 outline-0"
                  onChange={(e) => setCoin(e.target.value)} value={coin}>
            {Object.entries(COIN_LIST).map(([key, value]) => {
              return <option key={key} value={key}>{value}</option>;
            })}
          </select>
        </TemplateSpec>


        <TemplateSpec name="BASE PRICE">0.01 USD per day</TemplateSpec>
        <TemplateSpec name="PRICE PER GB">0.001 USD per GB per day</TemplateSpec>

        <TemplateSpec name="LIMIT (GB)">
          <input className="rounded-xl border border-dashed border-neutral-800 bg-inherit w-20 px-5 py-1 outline-0"
                 onChange={updateSize}
                 type="text"
                 value={size}
          />
        </TemplateSpec>
        <TemplateSpec name="PRICE PER DAY">{Math.round((0.01 + 0.001 * size) * 1000) / 1000} USD per day</TemplateSpec>

        <TemplateSpec name="DAYS"><input
          className="rounded-xl border border-dashed border-neutral-800 bg-inherit w-20 px-5 py-1 outline-0"
          onChange={updateDays}
          type="text"
          value={days}
        />
        </TemplateSpec>
        <TemplateSpec name="TOTAL">{usdPrice} USD</TemplateSpec>
        <TemplateSpec name="COIN PRICE">{formattedFeed} USD</TemplateSpec>
        <TemplateSpec name="TOTAL IN COINS">{price} {COIN_LIST[coin]}</TemplateSpec>
        {
          writeButton()
        }
      </div>
    );
  }


};

export default Subscribe;
