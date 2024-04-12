import React, { useRef } from "react";
import Content from "../components/Content";
import styled from "styled-components";

const Line = styled.svg`
  // stroke: white;
  // stroke-width: 2px;
  fill: none;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const Tracker = styled.text`
  fill: #2f63be;
  stroke: #2f63be;
  font-size: 8px;
`;

// const Indicator = styled.text`
//   stroke: black;
//   font-size: 6px;
//   font-weight: light;
// `;

function ContentDiv({ focus, trackerPos }) {
  if (focus) {
    return <Content trackerPos={trackerPos} />;
  }
}

const ListElement = ({ focus, trackerPos }) => {
  const svgRef = useRef();

  // const list = Array.from(Array(100).keys());

  function calcOpacity(trackerPos) {
    if (trackerPos < 13.3) {
      return 0;
    } else {
      return (trackerPos - 13.3) / 10;
    }
  }

  return (
    <div>
      <ContentDiv focus={focus} trackerPos={trackerPos} />
      <Line ref={svgRef} viewBox="0 0 130 4200">
        <defs>
          <linearGradient id="spinner-gradient" gradientTransform="rotate(90)">
            <stop offset="13.3%" stopOpacity="0" stopColor="white" />
            <stop offset="16.67%" stopOpacity="1" stopColor="white" />
          </linearGradient>
        </defs>
        <path
          id="curve"
          //  d="M58.3,0C26.1,0,0,26.1,0,58.3s26.1,58.3,58.3,58.3s58.3,26.1,58.3,58.3S90.5,298.5,58.3,298.5S0,259.5,0,291.7s69.9,21.9,102.1,21.9s-70.3,70.8-70.3,103s86.2,99.2,54,99.2s-74.1-4.6-74.1,27.6s14.5,39.9,46.7,39.9s47.5-65.8,47.5-33.6s-21.8-3.8-54-3.8s31.4,41.9,31.4,74.1S0.8,597.4,33,597.4s13.8,104.7,13.8,136.9s78.7-52.7,46.5-52.7S24.2,803.8,24.2,836s35.6-21.3,67.8-21.3s-59,80.8-59,113c0,32.2,87.5-18.8,55.3-18.8S33,1072.5,33,1104.7s-7.5,100.5,25.3,178.6 c12.5,29.7,58.3,26.1,58.3,58.3c0,32.2-26.1,58.3-58.3,58.3"
          d="M58.8,0C26.6,0,0.5,26.1,0.5,58.3s26.1,58.3,58.3,58.3s58.3,26.1,58.3,58.3S91,298.5,58.8,298.5s-58.3-39-58.3-6.8s69.9,21.9,102.1,21.9s-70.3,70.8-70.3,103s86.2,99.2,54,99.2s-74.1-4.6-74.1,27.6s14.5,39.9,46.7,39.9s47.5-65.8,47.5-33.6s-21.8-3.8-54-3.8s31.4,41.9,31.4,74.1s-82.4-22.6-50.2-22.6s13.8,104.7,13.8,136.9s78.7-52.7,46.5-52.7S24.8,803.8,24.8,836.1s35.6-21.3,67.8-21.3s-59,80.8-59,113S121.1,909,88.9,909s-55.3,163.7-55.3,195.9s-7.5,100.5,25.3,178.6c12.5,29.7,58.3,26.1,58.3,58.3s-26.1,58.3-58.3,58.3h-0.1c-32.2,0-58.3,26.1-58.3,58.3c0,32.2,26.1,58.3,58.3,58.3s58.3,26.1,58.3,58.3c0,32.2-26.1,123.6-58.3,123.6s-58.3-39-58.3-6.8c0,32.2,69.9,21.9,102.1,21.9s-70.3,70.8-70.3,103c0,32.2,86.2,99.2,54,99.2s-74.1-4.6-74.1,27.6c0,32.2,14.5,39.9,46.7,39.9s47.5-65.8,47.5-33.6c0,32.2-21.8-3.8-54-3.8s31.4,41.9,31.4,74.1s-82.4-22.6-50.2-22.6s13.8,104.7,13.8,136.9s78.7-52.7,46.5-52.7s-69.1,122.2-69.1,154.5c0,32.3,35.6-21.3,67.8-21.3s-59,80.8-59,113s87.5-18.8,55.3-18.8S33.6,2472.8,33.6,2505s-7.5,100.5,25.3,178.6c12.5,29.7,58.3,26.1,58.3,58.3c0,32.2-26.1,58.3-58.3,58.3h-0.1c-32.2,0-58.3,26.1-58.3,58.3s26.1,58.3,58.3,58.3s58.3,26.1,58.3,58.3c0,32.2-26.1,123.6-58.3,123.6s-58.3-39-58.3-6.8s69.9,21.9,102.1,21.9s-70.3,70.8-70.3,103c0,32.2,86.2,99.2,54,99.2s-74.1-4.6-74.1,27.6s14.5,39.9,46.7,39.9s47.5-65.8,47.5-33.6s-21.8-3.8-54-3.8s31.4,41.9,31.4,74.1s-82.4-22.6-50.2-22.6s13.8,104.7,13.8,136.9s78.7-52.7,46.5-52.7S24.8,3604,24.8,3636.3c0,32.3,35.6-21.3,67.8-21.3s-59,80.8-59,113s87.5-18.8,55.3-18.8s-55.3,163.7-55.3,195.9s-7.5,100.5,25.3,178.6c12.5,29.7,58.3,26.1,58.3,58.3c0,32.2-26.1,58.3-58.3,58.3h-0.1c-6.5,0-12.8,1.1-18.7,3.1"
          style={{ stroke: "url(#spinner-gradient)" }}
        ></path>
        {/* // <Indicator className="text"> 
          {list.map((item, i) => { 
            return (
              <textPath startOffset={i + "%"} href="#curve" key={i}>
                {item}
              </textPath>
            );
         })}
       </Indicator>*/}
        <Tracker
          className="text"
          style={{
            display: focus ? "block" : "none",
            opacity: calcOpacity(trackerPos),
          }}
        >
          <textPath
            dominantBaseline="middle"
            startOffset={trackerPos + "%"}
            href="#curve"
          >
            INTRODUCTION
          </textPath>
        </Tracker>
      </Line>
    </div>
  );
};

export default ListElement;
