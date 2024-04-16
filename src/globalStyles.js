import { createGlobalStyle } from "styled-components";
import ApfelGrotezk from "./assets/fonts/ApfelGrotezk-Mittel.woff2";

const GlobalStyle = createGlobalStyle`

  :root {  
    --height: 38874.2px;
    --width: 900px;
  
    @media (max-width: 1000px) {
      --height: 30235.5px;
      --width: 700px;
    }
  
    @media (max-width: 768px) {
      --height: 23756.4px;
      --width: 600px;
    }
  
    @media (max-width: 480px) {
      --height: 12958.1px;
      --width: 300px;
    }

  };

  body {
    background: #001814;
    color: white;
    font-family: 'ApfelGrotezk', sans-serif;
    overflow-x: hidden;
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
