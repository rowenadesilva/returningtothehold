import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  position: relative;
  height: 200vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: #2f63be;
  // border: 5px solid yellow;
`;

const TitleLeft = styled.div`
  position: absolute;
  top: 10vh;
  left: 2vw;
  font-size: 8em;
  font-family: "LucidBook";
  // font-feature-settings: "ss01" 1;
  color: white;

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    width: min-content;
    transform: translateY(-25%);
  }
`;

const Abstract = styled.div`
  position: absolute;
  top: 150vh;
  text-align: center;
  font-size: 2em;
  color: #eef3e5;
  padding: 0 20vw;
`;

const Abstract2 = styled.div`
  font-size: 1em;
  margin-top: 80vh;
`;

export default function Title() {
 
  return (
    <div>
      <TitleWrapper>
        <TitleLeft>RETURNING<br />TO THE </TitleLeft>
        <Abstract>
          Bibby Stockholm is a barge berthed at Portland Harbour on the south
          coast of England, currently detaining 135 asylum seekers. <br />{" "}
          <br />
          Delving into the history of Bibby Stockholm uncovers the company’s
          legacy in the transatlantic slave trade, connecting contemporary
          border practices to a larger narrative of colonialism and empire.
          <br />
          <br />
          <br />
          <Abstract2>
            The line from Bibby Stockholm to the transatlantic slave trade is a
            direct one and its history is full of reverberations
          </Abstract2>
        </Abstract>
      </TitleWrapper>
    </div>
  );
}
