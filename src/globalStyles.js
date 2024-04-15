import { createGlobalStyle } from "styled-components";
import ApfelGrotezk from "./assets/fonts/ApfelGrotezk-Mittel.woff2";

const GlobalStyle = createGlobalStyle`

  :root {  
    --list-element-height: 0;
    --list-element-width: 0;
  };

  body {
    background: #001814;
    color: white;
    font-family: Arial, sans-serif;
  };

  ::-webkit-scrollbar {
    display: none;
  }
  


`;

export default GlobalStyle;
