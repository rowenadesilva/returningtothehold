import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {  
    --list-element-height: 0;
    --list-element-width: 0;
  };

  body {
    background: #001814;
    color: white;
    font-family: Arial
  };

  ::-webkit-scrollbar {
    display: none;
  }

`;

export default GlobalStyle;
