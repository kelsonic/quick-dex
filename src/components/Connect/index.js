// Node modules.
import React from "react";
import injectedModule from "@web3-onboard/injected-wallets";
import { init, useConnectWallet } from "@web3-onboard/react";
// Relative imports.
import logo from "../../assets/logo.png";
import { Wrapper } from "./styles";

// Initialize the wallets.
const injected = injectedModule();

export const onboard = init({
  wallets: [injected],
  chains: [
    {
      id: "0x5",
      label: "Goerli",
      rpcUrl: process.env.REACT_APP_RPC_URL,
      token: "gETH",
    },
  ],
  apiKey: process.env.REACT_APP_BLOCKNATIVE_API_KEY,
  appMetadata: {
    name: "Quick Swap",
    icon: logo, // svg string icon
    description: "Swap tokens for other tokens.",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  },
  accountCenter: {
    desktop: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
    mobile: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
  },
});

const Connect = () => {
  // Derive the wallets and connection status.
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // Allow web3-onboard to render wallet capabilities.
  if (wallet) {
    return null;
  }

  return (
    <Wrapper>
      <button
        disabled={connecting}
        onClick={() =>
          wallet ? disconnect({ label: wallet.label }) : connect()
        }
      >
        {connecting ? "Connecting..." : "Connect"}
      </button>
    </Wrapper>
  );
};

export default Connect;
