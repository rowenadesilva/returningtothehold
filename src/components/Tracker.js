import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";
import { ReactComponent as SVG } from "../assets/TestLine.svg";

const TrackerDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  offset-path: path(
    "M58.33 0C26.12 0 0 26.12 0 58.33s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 259.45 0 291.67 26.12 350 58.33 350s58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 492.78 0 525s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33S90.55 700 58.33 700 0 726.12 0 758.33s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 959.45 0 991.67 26.12 1050 58.33 1050s58.33 26.12 58.33 58.33c0 32.22-26.12 58.33-58.33 58.33S0 1192.78 0 1225s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33c0 32.22-26.12 58.33-58.33 58.33"
  );
  offset-distance: 0%;
  position: absolute;
  scale: 1.5;
`;

export default function Tracker({focus}) {
  const trackerRef = useRef();

  useEffect(() => {
    // console.log(SVG);
  });

  return (
    <div>
      <TrackerDot
        ref={trackerRef}
        style={{
          display: focus ? "block" : "none",
        }}
      />
    </div>
  );
}
