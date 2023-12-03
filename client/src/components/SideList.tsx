import React from 'react';
import {FileEntry} from "../utils/definitions.ts";

interface Props {
  data: FileEntry[];
  openFile: (file: FileEntry) => void;
}

const SideList = ({data, openFile}: Props) => {


  const fileClick = (file: any) => {
    openFile(file);
  };

  return (
      // <FileDrop onDrop={uploadFiles}>
      <div className="">

        {/*<div className="w-full text-4xl text-center">Drag and Drop Files Here</div>*/}
        {
          data?.map((file) => {
            return <div key={file.id} data-id={file.id} className="file-row" onClick={() => fileClick(file)}>
              <input type="checkbox" className="w-6"/>

              <div className="flex-grow mx-10 text-lg">{file.name}</div>
              <div className="w-20">{file.size}</div>
              <div className="w-20">{file.type}</div>
            </div>;
          })
        }
      </div>
      // </FileDrop>
  );
};

export default SideList;
