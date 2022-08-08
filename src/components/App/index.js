// Relative imports.
import Connect from "../Connect";
import Swap from "../Swap";
import { Wrapper } from "./styles";

function App() {
  return (
    <Wrapper>
      <Connect />
      <h1>Quick Swap</h1>
      <Swap />
    </Wrapper>
  );
}

export default App;
