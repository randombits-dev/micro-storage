import React from 'react';
import {useFileList} from "../hooks/useFileList.ts";
import FileDrop from "./FileDrop.tsx";

interface Props {
}

const FileList = ({}: Props) => {
  const {data} = useFileList();

  const handleDrop = (files: any[]) => {
    files.forEach((file) => {
      file!.text().then((text: string) => {
        fetch(`http://10.2.0.2:8787`, {
          method: 'PUT',
          body: text,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Request-Headers': '*',
            'X-User-Id': 'user1',
            'X-File-Name': file!.name
          }
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      });
    });
  };

  return (
      <FileDrop onDrop={handleDrop}>
        {
          data?.map((file) => {
            return <div key={file.id} className="file-row">
              <div>{file.name}</div>
              <div>{file.size}</div>
            </div>;
          })
        }
      </FileDrop>
  );
};

export default FileList;
