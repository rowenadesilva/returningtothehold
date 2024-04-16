import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./globalStyles";
// import SmoothScrolling from "./components/SmoothScrolling.tsx";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <SmoothScrolling> */}
        <Main />
      {/* </SmoothScrolling> */}
    </div>
  );
}
