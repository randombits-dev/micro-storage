import React, {useEffect, useState} from 'react';
import {base64UrlToString} from "../utils/fileUtils.ts";
import {UserInfo} from "../utils/definitions.ts";
import {WorkerUrl} from "../utils/network.ts";

interface Props {
  file: File;
  userInfo: UserInfo;
  signature: string;
}


const FilePreview = ({file, userInfo, signature}: Props) => {
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    if (file) {

      download(file, (type: string, content: string) => {
        if (type === 'text/plain') {
          setContent(content);
        }
      });
    }

  }, [file]);

  const download = (file: any, callback: (type: string, content: string) => void) => {
    fetch(WorkerUrl, {
      method: 'GET',
      headers: {
        'X-File-Id': file.id,
        'X-User-Id': userInfo.user,
        'X-Token-Id': userInfo.token,
        'X-Signature': signature
      }
    }).then((response) => {
      response.text().then((text) => {
        const [type, content] = base64UrlToString(text);
        callback(type, content);
      });
      // response.blob().then((blob) => {
      //   callback(blob);
      // });
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>{content}</div>
  );
};

export default FilePreview;
