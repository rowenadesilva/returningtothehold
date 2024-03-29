import React, { useEffect, useState, useRef } from "react";
import Tracker from "./Tracker";
import { ReactComponent as SVG } from "../assets/TestLine.svg";

const ListElement = (props, ref) => {
  const listInnerContainerRef = useRef();
  const svgRef = useRef();
  
  const [svgHeight, setSvgHeight] = useState();

  useEffect(() => {
    setSvgHeight(svgRef.current.clientHeight); // get overall height of SVG to calculate relative position of tracker
  }, [svgHeight]);

  return (
    <div className="listWrapper" ref={ref}>
      <div className="listInnerContainer" ref={listInnerContainerRef}>
        <Tracker
          scrollPos={props.scrollPos}
          svgHeight={svgHeight}
          addedElement={props.addedElement}
        />
      </div>
      <SVG ref={svgRef} className="svg" />
    </div>
  );
};

export default React.forwardRef(ListElement);
