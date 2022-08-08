// Node modules.
import { darkTheme, SwapWidget } from "@uniswap/widgets";
import { useConnectWallet } from "@web3-onboard/react";
// Relative imports.
import { Wrapper } from "./styles";

// Derive the default token list from Uniswap.
const UNISWAP_TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";

const Swap = () => {
  const [{ wallet }] = useConnectWallet();

  if (!wallet?.provider) {
    return null;
  }

  return (
    <Wrapper>
      <SwapWidget
        jsonRpcEndpoint={process.env.REACT_APP_RPC_URL}
        provider={wallet?.provider}
        theme={darkTheme}
        tokenList={UNISWAP_TOKEN_LIST}
      />
    </Wrapper>
  );
};

export default Swap;
