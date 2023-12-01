import {useEffect, useState} from "react";
import {FileEntry} from "../utils/definitions.ts";

export const useFileList = () => {
  const [data, setData] = useState<FileEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`http://10.2.0.2:8787`, {
      method: 'GET',
      headers: {
        'X-User-Id': 'user1'
      }
    }).then((response) => {
      response.json().then((data) => {
        setData(data?.files || []);
      });
    }).catch((error) => {
      console.error(error);
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return {data, loading, error};
};
