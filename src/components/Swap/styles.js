// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  p {
    font-size: 1.2rem;
  }

  div:nth-child(2)
    > div:nth-child(2)
    > div:nth-child(3)
    > div
    > div:last-of-type {
    visibility: hidden;
  }
`;
