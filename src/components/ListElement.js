import React, { useEffect, useState, useRef } from "react";
import Tracker from "./Tracker";
import { ReactComponent as SVG } from "../assets/TestLine.svg";
import styled from "styled-components";

const Line = styled.svg`
  stroke: black;
  stroke-width: 3;
  fill: none;
  margin-top: -2px;
  margin-bottom: -2px;
`;

const ListElement = ({ focus, trackerPos }) => {
  const svgRef = useRef();

  return (
    <div>
      <Line
        ref={svgRef}
        viewBox="0 0 116 1400"

        style={{
          background: focus ? "yellow" : "red",
        }}
      >
        <path
          id="curve"
          d="M58.33 0C26.12 0 0 26.12 0 58.33s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 259.45 0 291.67 26.12 350 58.33 350s58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 492.78 0 525s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33S90.55 700 58.33 700 0 726.12 0 758.33s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 959.45 0 991.67 26.12 1050 58.33 1050s58.33 26.12 58.33 58.33c0 32.22-26.12 58.33-58.33 58.33S0 1192.78 0 1225s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33c0 32.22-26.12 58.33-58.33 58.33"
        ></path>
        <text className="text" style={{ fill: "red" }}>
          <textPath startOffset={trackerPos + "%"} href="#curve">
          ·
          </textPath>
        </text>
      </Line>
      {/* <Tracker focus={focus} trackerPos={trackerPos} /> */}
    </div>
  );
};

export default ListElement;
