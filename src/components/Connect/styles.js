// Node modules.
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20px;
  right: 20px;

  button {
    align-items: center;
    background: #ffffff;
    border: none;
    border-radius: 10px;
    color: rgb(26, 29, 38);
    cursor: pointer;
    display: flex;
    font-size: 0.9rem;
    font-weight: bold;
    justify-content: center;
    min-height: 40px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease;
  }

  button:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    button {
      min-height: 50px;
    }
  }
`;
