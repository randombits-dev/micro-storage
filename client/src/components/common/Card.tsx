import React from "react";

const Card = ({title, isDone, children}) => {
  return <div className="border-2 border-neutral-800 rounded-lg overflow-hidden my-5">
    <div className="text-3xl font-bold border-dashed border-neutral-800 border-b-2 p-3 flex items-center">
      <div className="flex-grow">{title}</div>
      {isDone && <div className="fas fa-check-circle text-green-800"></div>}
    </div>
    <div className="p-5">
      {children}
    </div>
  </div>;
};

export default Card;
