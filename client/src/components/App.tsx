import React from 'react';
import WalletLayout from "./layout/WalletLayout.tsx";
import Main from "./Main.tsx";
import '../styles/index.css';
import '../styles/globals.css';

interface Props {
  key: string;
}

const App = (params: Props) => {

  return <WalletLayout>
    <Main/>
  </WalletLayout>;
};

export default App;
