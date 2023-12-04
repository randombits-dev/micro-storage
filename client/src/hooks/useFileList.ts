import {useEffect, useState} from 'react';
import {UserData, UserInfo} from '../utils/definitions.ts';
import {base64UrlToString, blobToBase64} from '../utils/fileUtils.ts';

export const useFileList = (userInfo: UserInfo, signature: string) => {
  const [data, setData] = useState<UserData>({files: [], size: 0});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (signature) {
      fetch(`http://localhost:8787`, {
        method: 'GET',
        headers: {
          'X-User-Id': userInfo.user,
          'X-Token-Id': userInfo.token,
          'X-Signature': signature
        }
      }).then((response) => {
        response.json().then((data) => {
          setData(data || {});
        });
      }).catch((error) => {
        console.error(error);
        setError(true);
      }).finally(() => {
        setLoading(false);
      });
    }

  }, [signature]);

  const uploadFiles = (files: any[]) => {
    files.forEach((file) => {
      blobToBase64(file).then((base64) => {
        fetch(`http://localhost:8787`, {
          method: 'PUT',
          body: base64,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Request-Headers': '*',
            'X-User-Id': userInfo.user,
            'X-Token-Id': userInfo.token,
            'X-Signature': signature,
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

  const download = (file: any, callback: (type: string, content: string) => void) => {
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
        callback(type, content);
      });
      // response.blob().then((blob) => {
      //   callback(blob);
      // });
    }).catch((error) => {
      console.error(error);
    });
  };

  const deleteFiles = (ids: string[]) => {
    fetch(`http://localhost:8787`, {
      method: 'POST',
      body: JSON.stringify({ids}),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'X-User-Id': userInfo.user,
        'X-Token-Id': userInfo.token,
        'X-Signature': signature
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };

  return {data, loading, error, uploadFiles, download, deleteFiles};
};
