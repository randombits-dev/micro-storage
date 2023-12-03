import React from 'react';
import {Excalidraw, getSceneVersion} from "@excalidraw/excalidraw";

const ExcalidrawEditor = ({data, saveFile}) => {
  if (!data) {
    data = {
      elements: [],
      appState: {},
      libraryItems: [],
      scrollToContent: true
    };
  }

  let lastVersion = getSceneVersion(data.elements);
  let libraryCnt = data.libraryItems?.length || 0;

  const UIOptions = {
    canvasActions: {
      toggleTheme: true
    },
  };

  const onChange = (elements, appState, files) => {
    const newVersion = getSceneVersion(elements);
    if (newVersion > lastVersion) {
      lastVersion = newVersion;
      data.elements = elements;
      if (Object.keys(files).length !== 0) {
        //non empty files
        // data.files = files;
      }
      saveFile(JSON.stringify(data));
    }
  };

  const onLibraryChange = (libraryItems) => {
    const newCtn = libraryItems.length;
    if (newCtn !== libraryCnt) {
      libraryCnt = newCtn;

    }
  };

  return (
      <div className="h-[500px]">
        <Excalidraw key={Math.random()} initialData={data} theme={'dark'} onChange={onChange}
                    onLibraryChange={onLibraryChange}
                    UIOptions={UIOptions}/>
      </div>
  );
};

export default ExcalidrawEditor;
