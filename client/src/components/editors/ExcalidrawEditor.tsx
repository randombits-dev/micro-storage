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
    console.log(parsedData);

    let lastVersion = getSceneVersion(parsedData.elements) || 0;
    console.log('initial scene ', lastVersion);
    setLastVersion(lastVersion);
    let libraryCnt = parsedData.libraryItems?.length || 0;

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
    console.log('new version', newVersion);
    if (newVersion > lastVersion) {
      setLastVersion(newVersion);
      // parsedData.elements = elements;
      if (Object.keys(files).length !== 0) {
        //non empty files
        // data.files = files;
      }
      console.log('saving', {...parsedData, elements});

      saveFile(JSON.stringify({...parsedData, elements}));
    }
  };

  // const onLibraryChange = (libraryItems) => {
  //   const newCtn = libraryItems.length;
  //   if (newCtn !== libraryCnt) {
  //     libraryCnt = newCtn;
  //
  //   }
  // };

  return (
    <div className="h-full">
      <Excalidraw theme={'light'} onChange={onChange}
        // onLibraryChange={onLibraryChange}
                  UIOptions={UIOptions} excalidrawAPI={(api) => setExcalidrawAPI(api)}/>
    </div>
  );
};

export default ExcalidrawEditor;
