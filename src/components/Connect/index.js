// Node modules.
import React from "react";
import injectedModule from "@web3-onboard/injected-wallets";
import { init, useConnectWallet } from "@web3-onboard/react";
// Relative imports.
import { Wrapper } from "./styles";

// Initialize the wallets.
const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "0x5",
      label: "Goerli",
      rpcUrl: process.env.REACT_APP_RPC_URL,
      token: "gETH",
    },
  ],
});

const Connect = () => {
  // Derive the wallets and connection status.
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  return (
    <Wrapper>
      <button
        disabled={connecting}
        onClick={() =>
          wallet ? disconnect({ label: wallet.label }) : connect()
        }
      >
        {connecting ? "Connecting..." : wallet ? "Disconnect" : "Connect"}
      </button>
    </Wrapper>
  );
};

export default Connect;
