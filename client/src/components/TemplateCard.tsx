import {TEMPLATE_LIST} from "../utils/templates";
import TemplateSpec from "./TemplateSpec";
import React from "react";
import {formatUSDC} from "../utils/numberUtils";

const TemplateCard = ({templateInfo}: any) => {
  const templateDetails = TEMPLATE_LIST.find(t => t.id === templateInfo.name);

  const details = () => {
    // void push('/template/' + templateInfo.name);
  };

  return <div className="bg-neutral-950 shadow-2xl rounded-lg lg:m-10 m-1 px-10 py-5 w-96 flex flex-col">
    <div className="flex-1">
      <div className="text-2xl mb-4">{templateDetails?.name}</div>
      <div className="text-sm py-5">{templateDetails?.notes}</div>
      <div>
        <TemplateSpec name="CPU">{templateDetails?.cpu + 'x CPUS'}</TemplateSpec>
        <TemplateSpec name="RAM">{templateDetails?.ram + ' GB RAM'}</TemplateSpec>
        <TemplateSpec name="GPU">{templateDetails?.gpu}</TemplateSpec>
      </div>

    </div>
    <div className="py-5">
      <span className="text-xl font-bold mr-2">{formatUSDC(templateInfo.price)}</span>
      <span className="text-sm">USDC per hour</span>
    </div>
    <button onClick={details} className="btn">Choose</button>
  </div>;

};

export default TemplateCard;
