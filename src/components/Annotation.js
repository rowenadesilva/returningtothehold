import React, { useEffect } from "react";
import { useRef } from "react";
import data from "../data/annotations.json";

export default function Annotation(props) {
  const annotationRef = useRef([]);

  useEffect(() => {
    highlight();
  });

  function highlight() {
    const p = props.trackerPos;
    console.log(p);

    if (p > 50 && p < 80) {
      console.log("Show"); //setArchiveDisplay("block");
    } else {
      // setArchiveDisplay("none");
    }
  }

  return (
    <div key={props.trackerPos}>
      {data.annotations.map((annotation) => (
        <div
          className="annotation"
          key={annotation.id}
          style={{ offsetPath: "path('" + annotation.path + "')" }}
          ref={(element) => annotationRef.current.push(element)}
        >
          {annotation.text}
        </div>
      ))}
    </div>
  );
}
