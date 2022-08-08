// Node modules.
import { darkTheme, SwapWidget } from "@uniswap/widgets";
import { useConnectWallet } from "@web3-onboard/react";
// Relative imports.
import { Wrapper } from "./styles";

const Swap = () => {
  // Derive the user's wallet.
  const [{ wallet }] = useConnectWallet();

  // Do not display swap widget if wallet is not connected.
  if (!wallet?.provider) {
    return (
      <Wrapper>
        <p>Connect your wallet to swap...</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SwapWidget
        jsonRpcEndpoint={process.env.REACT_APP_RPC_URL}
        provider={wallet?.provider}
        theme={darkTheme}
      />
    </Wrapper>
  );
};

export default Swap;
