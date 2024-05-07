import React from "react";
import Main from "./pages/Main";
import Mobile from "./pages/Mobile";
import GlobalStyle from "./globalStyles";

const CheckMobile = () => {
  if (window.innerWidth < 500) {
    return <Mobile />;
  } else {
    return <Main />;
  }
};

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <CheckMobile />
    </div>
  );
}
