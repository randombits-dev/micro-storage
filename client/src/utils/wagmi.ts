import {getDefaultWallets} from '@rainbow-me/rainbowkit';
import {configureChains, createConfig} from 'wagmi';
import {publicProvider} from 'wagmi/providers/public';
import {avalancheFuji, polygonMumbai} from "viem/chains";

const {chains, publicClient, webSocketPublicClient} = configureChains(
    [polygonMumbai, avalancheFuji],
    [
      publicProvider(),
    ],
);

const {connectors} = getDefaultWallets({
  appName: 'MicroStorage',
  chains,
  projectId: 'd483f2480147fe9baf775494fee817ce',
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export {chains};
