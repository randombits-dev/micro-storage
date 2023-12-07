import React, {useRef} from 'react';

interface Props {
  key: string;
}

const LuckysheetEditor = ({data, saveFile}) => {
  const iframeWindow = useRef();

  const handleMessage = (e) => {
    if (e.data.action === 'save') {
      saveFile(JSON.stringify(e.data.content));
    }
  };
  const onReady = () => {
    let parsedData = '';
    if (data) {
      try {
        parsedData = JSON.parse(data);
      } catch {
        // not json
      }
    }
    iframeWindow.current.contentWindow.postMessage({
      action: 'content',
      content: parsedData
    }, '*');
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener("keyup", handleMessage);

  };

  return <iframe className="w-full h-full border-0 outline-0" ref={iframeWindow} src="/editors/lucky.html"
                 onLoad={onReady}></iframe>;
};

export default LuckysheetEditor;
