import React, {PropsWithChildren} from 'react';

interface Props {
  handleClick: () => void;
  additionalClasses?: string;
  disabled?: boolean;
}

export const ActionButton = ({handleClick, children, disabled, additionalClasses = ''}: PropsWithChildren<Props>) => {
  if (!disabled) {
    return <button
      className={'w-full px-5 py-3 border border-neutral-800 font-bold dark-shadow rounded-3xl font-elegant ' + additionalClasses}
      onClick={handleClick}>{children}</button>;
  } else {
    return <button disabled={true}
                   className={'w-full border  rounded-3xl border-dashed border-neutral-800 px-5 py-3 font-elegant' + additionalClasses}
                   onClick={handleClick}>{children}</button>
      ;
  }

};

export default ActionButton;
