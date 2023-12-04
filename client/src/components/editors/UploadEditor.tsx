import React from 'react';
import {FileEntry} from "../../utils/definitions.ts";
import {base64UrlToString, downloadFile} from "../../utils/fileUtils.ts";
import {useAccountContext} from "../../providers/AccountProvider.tsx";
import ActionButton from "../common/ActionButton.tsx";

interface Props {
  file: FileEntry;
}

const UploadEditor = ({file}: Props) => {
  const {userInfo, signature} = useAccountContext();

  const download = () => {
    fetch(`http://localhost:8787`, {
      method: 'GET',
      headers: {
        'X-File-Id': file.id,
        'X-User-Id': userInfo.user,
        'X-Token-Id': userInfo.token,
        'X-Signature': signature
      }
    }).then((response) => {
      response.text().then((text) => {
        console.log(text);
        const [type, content] = base64UrlToString(text);
        console.log(content);
        downloadFile(file.name, content);
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
