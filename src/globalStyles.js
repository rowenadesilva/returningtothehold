import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #001814;
    color: white;
  };
  @font-face {
    font-family: 'Absans';
    src: url('./fonts/Absans-Regular.woff2') format('woff2');
  }
`;

export default GlobalStyle;
