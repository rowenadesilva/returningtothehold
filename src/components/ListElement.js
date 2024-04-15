import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ImageLine from "../components/ImageLine";
import TrackerLine from "../components/TrackerLine";
import ImageContent from "./Content";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentStyled = styled(ImageContent)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
`;

function ContentDiv({ focus }) {
  if (focus) {
    return <ContentStyled />;
  }
}

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
