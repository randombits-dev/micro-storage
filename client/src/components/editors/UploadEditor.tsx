import React from 'react';
import {FileEntry} from "../../utils/definitions.ts";
import {downloadFile} from "../../utils/fileUtils.ts";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import ActionButton from "../common/ActionButton.tsx";
import {WorkerUrl} from "../../utils/network.ts";

interface Props {
  file: FileEntry;
}

const UploadEditor = ({file}: Props) => {
  const {userInfo, signature} = useAccountContext();

  const download = () => {
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
        // const [type, content] = base64UrlToString(text);
        downloadFile(file.name, text);
      });
      // response.blob().then((blob) => {
      //   callback(blob);
      // });
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <div>
        {/*<div>Uploaded file</div>*/}
        <ActionButton handleClick={download}>Download File</ActionButton>
      </div>
      {/*<a href={`http://localhost:8787/${file.id}`}>Download</a>*/}
    </div>
  );
};

export default UploadEditor;
