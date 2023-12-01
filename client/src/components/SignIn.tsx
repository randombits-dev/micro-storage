import React from 'react';
import {useServerSignature} from "../hooks/useServerSignature.ts";

interface Props {
  token: number;
}

const SignIn = ({token}: Props) => {
  const {signMessage} = useServerSignature({token});

  return (
    <div>
      <button className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => signMessage()}>Sign In
      </button>
    </div>
  );
};

export default SignIn;
