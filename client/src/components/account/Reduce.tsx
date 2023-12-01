import React, {useState} from 'react';
import TemplateSpec from "../TemplateSpec.tsx";
import ActionButton from "../common/ActionButton.tsx";
import {useEstimateReduce} from "../../hooks/useEstimateReduce.ts";
import {useReduceSubscription} from "../../hooks/useReduceSubscription.ts";
import {UserInfo} from "../../utils/definitions.ts";

interface Props {
  userInfo: UserInfo;
}

const Reduce = ({userInfo}: Props) => {
  const [size, setSize] = useState(1);
  const [error, setError] = useState('');
  const {price: refundPrice} = useEstimateReduce(userInfo, size);
  const {execute, status, statusMsg} = useReduceSubscription(userInfo?.token, size);

  const writeButton = () => {
    if (error) {
      return <button className="bg-neutral-800 px-10 py-3 w-full mt-5">{error}</button>;
    } else {
      return <div className="mt-5">
        <ActionButton additionalClasses="mt-3"
                      handleClick={() => execute()}>Reduce</ActionButton>
      </div>;
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
      <h2 className="text-4xl mt-10 mb-5">Reduce Limit</h2>
      <div>Reduce your storage limit and get a refund.</div>
      <div>
        <input className="bg-neutral-900 w-20 px-5 py-1 outline-0"
               onChange={updateSize}
               type="text"
               value={size}
        /> GB
      </div>
      <TemplateSpec name="ESTIMATED REFUND">{refundPrice}</TemplateSpec>
      {writeButton()}
    </div>
  );
};

export default Reduce;
