import { createGlobalStyle } from "styled-components";
import ApfelGrotezk from "./assets/fonts/ApfelGrotezk-Mittel.woff2";

const GlobalStyle = createGlobalStyle`
  body {
    background: #001814;
    color: white;
    font-family: 'ApfelGrotezk', sans-serif;
  };

  ::-webkit-scrollbar {
    display: none;
  }
  
  @font-face {
    font-family: 'ApfelGrotezk';
    src: url(${ApfelGrotezk}) format('woff2'),
  }
`;

export default GlobalStyle;
