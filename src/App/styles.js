import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 10px;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  ul {
    list-style-type: none;
  }
`;

export default { GlobalStyle };
