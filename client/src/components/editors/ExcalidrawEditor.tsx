import React, {useEffect, useState} from 'react';
import {Excalidraw, getSceneVersion} from "@excalidraw/excalidraw";

const ExcalidrawEditor = ({data, saveFile}) => {

  const [parsedData, setParsedData] = useState(null);
  const [lastVersion, setLastVersion] = useState(0);
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);


  useEffect(() => {
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
    setParsedData(parsedData);

    let lastVersion = getSceneVersion(parsedData.elements) || 0;
    setLastVersion(lastVersion);

    if (excalidrawAPI) {
      excalidrawAPI.updateScene(parsedData);
    }
  }, [data]);

  useEffect(() => {
    if (excalidrawAPI) {
      excalidrawAPI.updateScene(parsedData);
    }
  }, [excalidrawAPI]);


  const UIOptions = {
    canvasActions: {
      toggleTheme: true
    },
  };

  const onChange = (elements, appState, files) => {
    const newVersion = getSceneVersion(elements);
    if (newVersion > lastVersion) {
      setLastVersion(newVersion);
      saveFile(JSON.stringify({...parsedData, elements}));
    }
  };

  return (
    <div className="h-full">
      <Excalidraw theme={'light'} onChange={onChange}
                  UIOptions={UIOptions} excalidrawAPI={(api) => setExcalidrawAPI(api)}/>
    </div>
  );
};

export default ExcalidrawEditor;
