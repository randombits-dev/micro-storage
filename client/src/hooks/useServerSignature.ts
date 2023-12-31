import {useSignMessage} from 'wagmi';
import {hashMessage} from 'viem';
import {useEffect, useState} from 'react';

export const useServerSignature = ({token}: {
  token?: number
}) => {
  const hash = hashMessage(String(token || 0));
  const [signature, setSignature] = useState('');

  const {signMessage} = useSignMessage({
    message: 'Sign in with ID: ' + hash,
    onSuccess: (data) => {
      sessionStorage.setItem('s.' + hash, data);
      setSignature(data);
    }
  });

  useEffect(() => {
    const savedSignature = sessionStorage.getItem('s.' + hash);
    if (savedSignature) {
      setSignature(savedSignature);
    }
  }, []);

  return {signMessage, hasSigned: !!signature, signature};
};
