import React from 'react';
import {FileEntry} from "../utils/definitions.ts";
import {formatSize} from "../utils/fileUtils.ts";

interface Props {
  data: FileEntry[];
  openFile: (file: FileEntry) => void;
  selected: FileEntry | null;
}

const SideList = ({data, openFile, selected}: Props) => {


  const fileClick = (file: any) => {
    if (selected?.id !== file.id) {
      openFile(file);
    }
  };

  const renderIcon = (file: FileEntry) => {
    switch (file?.type) {
      case 'excalidraw':
        return <div className="fas fa-diagram-project"></div>;
      default:
        return <div className="fas fa-file-word"></div>;
    }
  };

  return (
    // <FileDrop onDrop={uploadFiles}>
    <div className="">

      {/*<div className="w-full text-4xl text-center">Drag and Drop Files Here</div>*/}
      {
        data?.map((file) => {
          return <div key={file.id} data-id={file.id}
                      className={`flex  items-center border-b cursor-pointer px-5 py-3 ${selected?.id === file.id ? 'bg-neutral-950' : 'hover:bg-neutral-950'}`}
                      onClick={() => fileClick(file)}>
            {/*<input type="checkbox" className="w-6"/>*/}
            <div className="w-4 text-center text-lg">{renderIcon(file)}</div>
            <div className="flex-grow mx-5 text-md">{file.name}</div>
            <div className="flex-nowrap text-sm">{formatSize(file.size)}</div>
          </div>;
        })
      }
    </div>
    // </FileDrop>
  );
};

export default SideList;
