import React, { useRef, useEffect} from "react";
import Content from "../components/Content";
import styled from "styled-components";
import ImageLine from "../components/ImageLine";
import TrackerLine from "../components/TrackerLine";

function ContentDiv({ focus, trackerPos }) {
  if (focus) {
    return <Content trackerPos={trackerPos} />;
  }
}

const ListElement = ({ focus, trackerPos }) => {
  const svgRef = useRef();

  // useEffect(() => {
  //   console.log(trackerPos);
  // }, [trackerPos]);

  return (
    <div>
      <ContentDiv focus={focus} trackerPos={trackerPos} />
      <ImageLine />
      <TrackerLine trackerPos={trackerPos} focus={focus}/>
    </div>
  );
};

export default ListElement;
