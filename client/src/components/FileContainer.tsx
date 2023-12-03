import React, {useState} from 'react';
import SideList from "./SideList.tsx";
import FileEditor from "./editors/FileEditor.tsx";
import {FileEntry} from "../utils/definitions.ts";
import {base64UrlToString, stringToBase64Url} from "../utils/fileUtils.ts";
import {useFileList} from "../hooks/useFileList.ts";

let timeout;
const FileContainer = ({userInfo, signature, manageAccount}) => {
  const [fileEntry, setFileEntry] = useState<FileEntry | null>(null); // [file, setFile
  const [contents, setContents] = useState<string>('');
  const {data: fileList} = useFileList(userInfo, signature);

  const openFile = (file: FileEntry) => {
    setFileEntry(file);

    if (!file.size) {
      setContents('');
      return;
    }
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
        const [type, content] = base64UrlToString(text);
        setContents(content);
      });
      // response.blob().then((blob) => {
      //   callback(blob);
      // });
    }).catch((error) => {
      console.error(error);
    });
  };

  const onTitleChange = (e) => {
    setFileEntry({...fileEntry, name: e.target.value});
    saveFile(contents, e.target.value);
  };

  const saveFile = (newData: string, name?: string) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      const base64 = stringToBase64Url(newData);
      fetch(`http://localhost:8787`, {
        method: 'PUT',
        body: base64,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Request-Headers': '*',
          'X-User-Id': userInfo.user,
          'X-Token-Id': userInfo.token,
          'X-Signature': signature,
          'X-File-Id': fileEntry?.id || '',
          'X-File-Name': name || fileEntry?.name
        }
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }, 3000);


  };

  const deleteSelected = () => {
    // const idsToDelete: string[] = [];
    // const selectedRows = document.querySelectorAll("input[type=checkbox]:checked");
    // selectedRows.forEach((row) => {
    //   idsToDelete.push(row.closest(".file-row")?.dataset.id);
    // });
    // if (idsToDelete.length > 0) {
    //   deleteFiles(idsToDelete);
    // }
  };

  const newExcalidraw = () => {
    const newFile: FileEntry = {name: 'New Excalidraw', type: 'excalidraw'};
    openFile(newFile);
  };

  const newQuill = () => {
    const newFile: FileEntry = {name: new Date().toLocaleString(), type: 'text'};
    openFile(newFile);
    fileList.unshift(newFile);
  };

  return (
      <div className={manageAccount ? 'hidden' : 'flex-grow flex border-t'}>
        <div className="w-1/4">
          <div className="toolbar">
            <button className="fa-solid fa-trash" onClick={deleteSelected}/>
            <button className="fa-solid fa-pen" onClick={newExcalidraw}/>
            <button className="fa-solid fa-pencil" onClick={newQuill}/>
          </div>
          <SideList data={fileList} openFile={openFile}/>
        </div>
        <div className="flex-grow border-l">
          {/*<FilePreview userInfo={userInfo} signature={signature} file={file}/>*/}
          <input type="text" value={fileEntry?.name || ''} onChange={onTitleChange}
                 className="bg-inherit border-0 text-2xl px-5 py-2 w-full outline-0"/>
          <FileEditor file={fileEntry} contents={contents} saveFile={saveFile}/>
        </div>
      </div>
  );
};

export default FileContainer;
