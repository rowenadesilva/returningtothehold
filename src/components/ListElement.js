import React, { useRef } from "react";
import styled from "styled-components";

const TEXT = styled.div`
  position: absolute;
  font-weight: bold;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  left: 0;
`;

const Title = styled.div`
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 2em;
  text-align: center;
`;

const Abstract = styled.div`
  font-size: 1.5em;
  margin-top: 100vh;
  text-align: center;
  padding: 0 20vw;
`;

const Instruction = styled.div`
  font-size: 1.5em;
  margin-top: 100vh;
  text-align: center;
  padding: 0 25vw;
`;

const Line = styled.svg`
  stroke: #2f63be;
  stroke-width: 1px;
  fill: none;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const Tracker = styled.text`
  fill: red;
  stroke: red;
  font-size: 3em;
`;

const ListElement = ({ focus, trackerPos }) => {
  const svgRef = useRef();

  return (
    <div>
      {/* <LandingTitleStyled /> */}
      <TEXT>
        {" "}
        <Title>RETURNING TO THE HOLD</Title>
        <Abstract>
          Bibby Stockholm is a barge berthed at Portland Harbour on the south
          coast of England, currently detaining 135 asylum seekers. Delving into
          the history of Bibby Stockholm uncovers the company’s legacy in the
          transatlantic slave trade, connecting contemporary border practices to
          a larger narrative of colonialism and empire.
        </Abstract>
        <Instruction>
          The line from Bibby Stockholm to the transatlantic slave trade is a
          direct one and its history is full of reverberations
        </Instruction>
      </TEXT>

      <Line
        ref={svgRef}
        viewBox="0 0 116 1400"
        style={{ opacity: trackerPos / 100 }}
      >
        <path
          id="curve"
          // SIMPLE LINE d="M58.33 0C26.12 0 0 26.12 0 58.33s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 259.45 0 291.67 26.12 350 58.33 350s58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 492.78 0 525s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33S90.55 700 58.33 700 0 726.12 0 758.33s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33-26.12 58.33-58.33 58.33S0 959.45 0 991.67 26.12 1050 58.33 1050s58.33 26.12 58.33 58.33c0 32.22-26.12 58.33-58.33 58.33S0 1192.78 0 1225s26.12 58.33 58.33 58.33 58.33 26.12 58.33 58.33c0 32.22-26.12 58.33-58.33 58.33"
          d="M58.3,0C26.1,0,0,26.1,0,58.3s26.1,58.3,58.3,58.3s58.3,26.1,58.3,58.3S90.5,298.5,58.3,298.5S0,259.5,0,291.7s69.9,21.9,102.1,21.9s-70.3,70.8-70.3,103s86.2,99.2,54,99.2s-74.1-4.6-74.1,27.6s14.5,39.9,46.7,39.9s47.5-65.8,47.5-33.6s-21.8-3.8-54-3.8s31.4,41.9,31.4,74.1S0.8,597.4,33,597.4s13.8,104.7,13.8,136.9s78.7-52.7,46.5-52.7S24.2,803.8,24.2,836s35.6-21.3,67.8-21.3s-59,80.8-59,113c0,32.2,87.5-18.8,55.3-18.8S33,1072.5,33,1104.7s-7.5,100.5,25.3,178.6 c12.5,29.7,58.3,26.1,58.3,58.3c0,32.2-26.1,58.3-58.3,58.3"
        ></path>
        <Tracker className="text" style={{ display: focus ? "block" : "none" }}>
          <textPath
            dominant-baseline="middle"
            startOffset={trackerPos + "%"}
            href="#curve"
          ></textPath>
        </Tracker>
      </Line>
    </div>
  );
};

export default ListElement;
