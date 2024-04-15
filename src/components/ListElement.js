import React, { useRef } from "react";
import styled from "styled-components";
import ImageLine from "../components/ImageLine";
import TrackerLine from "../components/TrackerLine";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListElement = ({ focus }) => {
  const ListElementRef = useRef();

  return (
    <Wrapper ref={ListElementRef}>
      {/* <ContentDiv
        focus={focus}
      /> */}
      {/* <ContentDiv focus={focus}/> */}
      <ImageLine />
      <TrackerLine focus={focus} />
    </Wrapper>
  );
};

export default ListElement;
