import '@rainbow-me/rainbowkit/styles.css';
import {chains, config} from "../../utils/wagmi";
import {RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {WagmiConfig} from "wagmi";
import * as React from "react";
import {PropsWithChildren} from "react";
import {AccountProvider} from "../../providers/AccountProvider";
import {customRainbowTheme} from "../../utils/rainbow-theme";


export default function WalletLayout({flex, children}: PropsWithChildren<{
  flex?: boolean
}>) {
  // const extraClasses = flex ? ' flex flex-col' : '';


  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} modalSize="compact" theme={customRainbowTheme}>
        <AccountProvider>
          <div className={"min-h-screen bg-gradient-to-tl from-cyan-100 to-pink-50 main-container text-neutral-800"}>
            {/*<div*/}
            {/*    className={"flex flex-col min-h-screen bg-neutral-900 main-container text-neutral-300" + extraClasses}>*/}
            {/*<MainContent>{children}</MainContent>*/}
            {/*<Navbar/>*/}
            {/*<div className="bg-neutral-950 shadow-2xl rounded-lg lg:m-10 m-1 px-10 py-5 flex flex-col text-center">*/}
            {/*  Warning: This is an alpha release, and the servers should only be used for non-sensitive data purposes.*/}
            {/*</div>*/}
            {/*<div className="flex-grow">*/}
            {children}

          </div>
          {/*</div>*/}
        </AccountProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
