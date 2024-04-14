import React, { useRef, useEffect, useState, useContext } from "react";
import Content from "../components/Content";
import styled from "styled-components";
import ImageLine from "../components/ImageLine";
import TrackerLine from "../components/TrackerLine";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ContentDiv({ focus, trackerPos }) {
  if (focus) {
    return <Content trackerPos={trackerPos} />;
  }
}

const ListElement = ({ focus, trackerPos }) => {
  const svgRef = useRef();
  const ListElementRef = useRef();

  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    setTotalHeight(ListElementRef.current.clientHeight);
  });

  return (
    <Wrapper ref={ListElementRef}>
      {/* <ContentDiv
        focus={focus}
        trackerPos={trackerPos}
        totalHeight={totalHeight}
      /> */}
      <ImageLine />
      <TrackerLine focus={focus} />
    </Wrapper>
  );
};

export default ListElement;
