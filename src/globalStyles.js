import { createGlobalStyle } from "styled-components";
import ApfelGrotezk from "./fonts/apfelGrotezkMittel.woff2";

const GlobalStyle = createGlobalStyle`

  :root {  
    --height: 49510.2px;
    --width: 900px;
  
    @media (max-width: 1000px) {
      --height: 38508px;
      --width: 700px;
    }
  
    @media (max-width: 768px) {
      --height: 30256.2px;
      --width: 600px;
    }
  
    @media (max-width: 480px) {
      --height: 16503.4px;
      --width: 300px;
    }

  };

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
