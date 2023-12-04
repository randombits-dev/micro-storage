import React from 'react';
import {Excalidraw, getSceneVersion} from "@excalidraw/excalidraw";

const ExcalidrawEditor = ({data, saveFile}) => {
  let parsedData;
  if (data) {
    parsedData = JSON.parse(data);
  } else {
    parsedData = {
      elements: [],
      appState: {},
      libraryItems: [],
      scrollToContent: true
    };
  }

  console.log(parsedData);

  let lastVersion = getSceneVersion(parsedData.elements);
  let libraryCnt = parsedData.libraryItems?.length || 0;

  const UIOptions = {
    canvasActions: {
      toggleTheme: true
    },
  };

  const onChange = (elements, appState, files) => {
    const newVersion = getSceneVersion(elements);
    if (newVersion > lastVersion) {
      lastVersion = newVersion;
      parsedData.elements = elements;
      if (Object.keys(files).length !== 0) {
        //non empty files
        // data.files = files;
      }
      saveFile(JSON.stringify(parsedData));
    }
  };

  const onLibraryChange = (libraryItems) => {
    const newCtn = libraryItems.length;
    if (newCtn !== libraryCnt) {
      libraryCnt = newCtn;

    }
  };

  return (
    <div className="h-full">
      <Excalidraw key={Math.random()} initialData={parsedData} theme={'dark'} onChange={onChange}
                  onLibraryChange={onLibraryChange}
                  UIOptions={UIOptions}/>
    </div>
  );
};

export default ExcalidrawEditor;
