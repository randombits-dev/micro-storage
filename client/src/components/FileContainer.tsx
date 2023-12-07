import React, {useEffect, useState} from 'react';
import SideList from "./SideList.tsx";
import FileDrop from "./FileDrop.tsx";
import FileEditor from "./editors/FileEditor.tsx";
import {FileEntry, UserData} from "../utils/definitions.ts";
import {
  base64UrlToString,
  blobToBase64,
  generateFileId,
  stringToBase64Url,
  triggerFileUpload
} from "../utils/fileUtils.ts";
import {useAccountContext} from "../providers/AccountProvider.tsx";
import DeleteMenu from "./common/DeleteMenu.tsx";
import {WorkerUrl} from "../utils/network.ts";

let timeout;
let newestData;
let newestTitle;
const FileContainer = ({manageAccount}) => {
  const {calcUsage, userInfo, signature} = useAccountContext();
  const [fileEntry, setFileEntry] = useState<FileEntry | null>(null); // [file, setFile
  const [contents, setContents] = useState<string>('');
  const [data, setData] = useState<UserData>(null);
  const [accountCreation, setAccountCreation] = useState(false);

  const updateFileList = () => {
    setData({...data});
    const newSize = data.files.reduce((acc, file) => {
      return acc + file.size;
    }, 0);
    calcUsage(newSize);
  };

  const fetchFileList = () => {
    fetch(WorkerUrl, {
      method: 'GET',
      headers: {
        'X-User-Id': userInfo.user,
        'X-Token-Id': userInfo.token,
        'X-Signature': signature
      }
    }).then((response) => {
      response.json().then((data) => {
        if (data) {
          setData(data);
          calcUsage(data.size);
        }
      });
    }).catch((error) => {
      setAccountCreation(true);
      setTimeout(() => {
        fetchFileList();
      }, 5000);
    });
  };

  useEffect(() => {
    if (signature) {
      fetchFileList();
    }

  }, [signature]);

  const uploadFiles = (files: any[]) => {
    files.forEach((file) => {
      blobToBase64(file).then((base64) => {
        fetch(WorkerUrl, {
          method: 'PUT',
          body: base64,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Request-Headers': '*',
            'X-User-Id': userInfo.user,
            'X-Token-Id': userInfo.token,
            'X-Signature': signature,
            'X-File-Id': generateFileId(),
            'X-File-Name': file!.name,
            'X-File-Type': 'upload'
          }
        }).then((response) => {
          response.json().then((resJson) => {
            data.files.unshift(resJson);
            updateFileList();
          });
        }).catch((error) => {
          console.log(error);
        });

      });
    });
  };

  const openFile = (file: FileEntry) => {
    if (timeout) {
      clearTimeout(timeout);
      saveNow();
    }

    newestTitle = file.name;

    if (!file.size || file.type === 'upload') {
      setFileEntry(file);
      setContents('');
      return;
    }

    setFileEntry(null);
    setContents('');

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
        setFileEntry(file);
        setContents(content);
        newestData = content;
      });
      // response.blob().then((blob) => {
      //   callback(blob);
      // });
    }).catch((error) => {
      console.error(error);
    });
  };

  const onTitleChange = (e) => {
    fileEntry.name = e.target.value;
    setFileEntry({...fileEntry});
    newestTitle = e.target.value;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      saveNow();
    }, 1000);
  };

  const saveFile = (newData: string) => {
    newestData = newData;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      saveNow();
    }, 1000);
  };

  const saveNow = () => {
    timeout = null;
    const base64 = stringToBase64Url(newestData || contents);
    fetch(WorkerUrl, {
      method: 'PUT',
      body: base64,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Request-Headers': '*',
        'X-User-Id': userInfo.user,
        'X-Token-Id': userInfo.token,
        'X-Signature': signature,
        'X-File-Id': fileEntry?.id || '',
        'X-File-Name': newestTitle || fileEntry?.name,
        'X-File-Type': fileEntry?.type
      }
    }).then((response) => {
      response.json().then((resJson) => {
        const index = data.files.findIndex((file) => file.id === resJson?.id);
        if (index > -1) {
          data.files[index] = resJson;
        }
        updateFileList();
      });

    }).catch((error) => {
      console.log(error);
    });
  };

  const deleteFile = () => {
    if (timeout) {
      clearTimeout(timeout);
      newestData = null;
      newestTitle = null;
    }
    const id = fileEntry.id;
    fetch(WorkerUrl, {
      method: 'POST',
      body: JSON.stringify({ids: [id]}),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'X-User-Id': userInfo.user,
        'X-Token-Id': userInfo.token,
        'X-Signature': signature
      }
    }).then((response) => {

    }).catch((error) => {
      console.log(error);
    });
    data.files.splice(data.files.findIndex((file) => file.id === id), 1);
    updateFileList();
    setFileEntry(null);
    setContents('');
  };

  const newEditor = (type: string) => {
    setFileEntry(null);
    setTimeout(() => {
      const newFile: FileEntry = {id: generateFileId(), name: new Date().toLocaleString(), type};
      openFile(newFile);
      data.files.unshift(newFile);
    });

  };

  const openFileDialog = () => {
    triggerFileUpload().then((files) => {
      uploadFiles(files);
    });
  };

  if (!data) {
    return <div className="flex justify-center mt-40">
      <div className="spinner"></div>
      {accountCreation && <div>Creating account, please wait</div>}
    </div>;
  }
  return (
      <div className={manageAccount ? 'hidden' : 'flex-grow flex'}>
        <div className="w-1/4 flex flex-col">
          <div className="text-center border-b border-dashed">↓ Create New Document ↓</div>
          <div className="border-b-2  grid grid-cols-4 items-center text-center">
            <button className="border-r p-2 hover:bg-neutral-200 "
                    onClick={() => newEditor('text')}>
              <i className="fa-solid fa-file-word mr-2"/>
              <span>Text</span>
            </button>
            <button className="border-r p-2 hover:bg-neutral-200 "
                    onClick={() => newEditor('sheet')}>
              <i className="fa-solid fa-file-excel mr-2"/>
              <span>Sheet</span>
            </button>
            <button className="border-r p-2 hover:bg-neutral-200 "
                    onClick={() => newEditor('excalidraw')}><i className="fa-solid fa-diagram-project mr-2"/>
              <span>Sketch</span>
            </button>

            <button className="p-2 hover:bg-neutral-200"
                    onClick={openFileDialog}><i className="fa-solid fa-file-upload mr-2"/>
              <span>Upload</span>
            </button>
          </div>
          <FileDrop onDrop={uploadFiles}>
            <SideList data={data.files} openFile={openFile} selected={fileEntry}/>
          </FileDrop>
        </div>
        <div className="flex-grow border-l flex flex-col">
          {fileEntry &&
              <>
                <div className="border-b flex items-center text-center">
                  <input type="text" value={fileEntry?.name || ''} onChange={onTitleChange}
                         className="bg-inherit border-0 text-2xl px-5 py-2 w-full outline-0"/>
                  <DeleteMenu onDelete={deleteFile}/>
                </div>

                <FileEditor file={fileEntry} contents={contents} saveFile={saveFile}/>
              </>
          }

        </div>
      </div>
  );
};

export default FileContainer;
