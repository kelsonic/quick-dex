// Node modules.
import { SwapWidget } from "@uniswap/widgets";
// Relative imports.
import { Wrapper } from "./styles";
import Connect from "../Connect";
import { useConnectWallet } from "@web3-onboard/react";

function App() {
  const [{ wallet }] = useConnectWallet();

  return (
    <Wrapper>
      <Connect />
      <h1>Quick Swap</h1>
      <SwapWidget
        provider={wallet?.provider}
        jsonRpcEndpoint={process.env.REACT_APP_RPC_URL}
      />
    </Wrapper>
  );
}

export default App;
