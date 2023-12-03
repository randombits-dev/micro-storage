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
      <div className="border rounded-lg overflow-hidden my-5">
        <div className="text-3xl font-bold bg-neutral-200 text-neutral-800 p-3">Change Limit</div>
        <div className="p-5">
          <div>Reduce your storage limit and get a refund.</div>
          <TemplateSpec name="NEW LIMIT">
            <input className="bg-neutral-900 w-20 px-5 py-1 mr-5 outline-0"
                   onChange={updateSize}
                   type="text"
                   value={size}
            /> GB
          </TemplateSpec>
          <TemplateSpec name="ESTIMATED REFUND">{refundPrice}</TemplateSpec>
          {writeButton()}
        </div>
      </div>
  );
};

export default Reduce;
