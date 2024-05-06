import { createGlobalStyle } from "styled-components";
import ApfelGrotezk from "./fonts/apfelGrotezkMittel.woff2";
import GTAlpina from "./fonts/gtAlpinaCondensedMediumTrial.woff2";
import LucidBook from "./fonts/LucidBook.otf";
import Lyno from "./fonts/LynoWalt.otf";
import SurtRegular from "./fonts/SurtRegular.woff";

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
    overflow-x: hidden;
  };

  ::-webkit-scrollbar {
     display: none;
  }
  
  @font-face {
    font-family: 'ApfelGrotezk';
    src: url(${ApfelGrotezk}) ƒformat('woff2'),
  }

  @font-face {
    font-family: 'GTAlpina';
    src: url(${GTAlpina}) format('woff2'),
  }

  @font-face {
    font-family: 'LucidBook';
    src: url(${LucidBook}) format('woff2'),
  }

  @font-face {
    font-family: 'Lyno';
    src: url(${Lyno}) format('woff2'),
  }

  @font-face {
    font-family: 'SurtRegular';
    src: url(${SurtRegular}) format('woff2'),
  }
`;

export default GlobalStyle;
