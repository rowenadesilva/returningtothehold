import React, { useRef } from "react";
import Content from "../components/Content";
import styled from "styled-components";

const Line = styled.svg`
  stroke: white;
  // stroke-width: 2px;
  fill: none;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const Tracker = styled.text`
  fill: white;
  stroke: white;
`;

const Indicator = styled.text`
  stroke: black;
  font-size: 6px;
  font-weight: light;
`;

const ListElement = ({ focus, trackerPos, scrollRef }) => {
  const svgRef = useRef();

  const list = Array.from(Array(100).keys());

  return (
    <div>
      <Content scrollRef={scrollRef}/>
      <Line
        ref={svgRef}
        viewBox="0 0 130 1400"
        style={{ opacity: (trackerPos / 40) }}
      >
        <path
          id="curve"
          d="M58.3,0C26.1,0,0,26.1,0,58.3s26.1,58.3,58.3,58.3s58.3,26.1,58.3,58.3S90.5,298.5,58.3,298.5S0,259.5,0,291.7s69.9,21.9,102.1,21.9s-70.3,70.8-70.3,103s86.2,99.2,54,99.2s-74.1-4.6-74.1,27.6s14.5,39.9,46.7,39.9s47.5-65.8,47.5-33.6s-21.8-3.8-54-3.8s31.4,41.9,31.4,74.1S0.8,597.4,33,597.4s13.8,104.7,13.8,136.9s78.7-52.7,46.5-52.7S24.2,803.8,24.2,836s35.6-21.3,67.8-21.3s-59,80.8-59,113c0,32.2,87.5-18.8,55.3-18.8S33,1072.5,33,1104.7s-7.5,100.5,25.3,178.6 c12.5,29.7,58.3,26.1,58.3,58.3c0,32.2-26.1,58.3-58.3,58.3"
        ></path>
        <Indicator className="text">
          {list.map((item, i) => {
            // return (
            //   <textPath startOffset={i + "%"} href="#curve" key={i}>
            //     {item}
            //   </textPath>
            // );
          })}
        </Indicator>
        <Tracker className="text" style={{ display: focus ? "block" : "none" }}>
          <textPath
            dominantBaseline="middle"
            startOffset={trackerPos + "%"}
            href="#curve"
          >
            &bull;
          </textPath>
        </Tracker>
      </Line>
    </div>
  );
};

export default ListElement;
