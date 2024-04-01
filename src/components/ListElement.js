import React, { useEffect, useState, useRef } from "react";
import Tracker from "./Tracker";
import { ReactComponent as SVG } from "../assets/TestLine.svg";
import styled from "styled-components";

const ListInnerContainer = styled.div`
  border: 1px solid yellow;
`;

const Line = styled(SVG)`
  border: 1px solid green;
`;

const ListElement = ({focus}) => {
  const svgRef = useRef();
  const listInnerContainerRef = useRef();

  return (
    <div>
      <ListInnerContainer ref={listInnerContainerRef}>
        <Tracker focus={focus}/>
      </ListInnerContainer>
      <Line
        ref={svgRef}
        svg={SVG}
        style={{
          background: focus ? "yellow" : "red",
        }}
      />
    </div>
  );
};

export default ListElement;
