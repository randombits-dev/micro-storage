import React from 'react';
import ExcalidrawEditor from "./ExcalidrawEditor.tsx";
import QuillEditor from "./QuillEditor.tsx";

const FileEditor = ({file, contents, saveFile}) => {
  const renderEditor = () => {
    if (file) {
      switch (file.type) {
        case 'excalidraw':
          return <ExcalidrawEditor saveFile={saveFile} data={contents}/>;
        default:
          return <QuillEditor data={contents} saveFile={saveFile}/>;
      }
    } else {
      return <div>Select or create a file to get started</div>;
    }
  };

  return (
      <div>
        {renderEditor()}
      </div>
  );
};

export default FileEditor;
