import React, {PropsWithChildren} from 'react';

interface Props {
  name: string;
}

const TemplateSpec = ({name, children}: PropsWithChildren<Props>) => {
  return (
    <div className="py-1 flex items-center gap-5">
      <div className="ml-auto text-right text-sm font-bold w-[130px]">{name}</div>
      <div className="mr-auto flex-grow text-left text-md col-span-2">{children || 'None'}</div>
    </div>
  );
};

export default TemplateSpec;
