import React from 'react';
import ExcalidrawEditor from "./ExcalidrawEditor.tsx";
import QuillEditor from "./QuillEditor.tsx";
import UploadEditor from "./UploadEditor.tsx";

const FileEditor = ({file, contents, saveFile}) => {
  const renderEditor = () => {
    if (file) {
      switch (file.type) {
        case 'excalidraw':
          return <ExcalidrawEditor saveFile={saveFile} data={contents}/>;
        case 'text':
          return <QuillEditor data={contents} saveFile={saveFile}/>;
        default:
          return <UploadEditor file={file}/>;
      }
    } else {
      return <div>Select or create a file to get started</div>;
    }
  };

  return (
    <div className="flex-grow">
      {renderEditor()}
    </div>
  );
};

export default FileEditor;
