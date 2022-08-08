// Node modules.
import { darkTheme, SwapWidget } from "@uniswap/widgets";
import { useConnectWallet } from "@web3-onboard/react";
// Relative imports.
import { Wrapper } from "./styles";

const Swap = () => {
  const [{ wallet }] = useConnectWallet();

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
