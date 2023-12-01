import React from 'react';
import {useAccountStatus} from "../hooks/useAccountStatus.ts";
import Files from "./Files.tsx";
import Instructions from "./Instructions.tsx";

interface Props {
}

const Main = (params: Props) => {

  const {status} = useAccountStatus();

  if (status === 4) {
    return <Files/>;
  }
  return <Instructions/>;
};

export default Main;
