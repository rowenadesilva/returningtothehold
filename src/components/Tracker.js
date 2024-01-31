import React, { useRef, useEffect } from "react";

export default function Tracker(props) {
  const trackerRef = useRef();
  const prevYPos = useRef(0);
  const yPos = useRef(0);

  useEffect(() => {
    console.log("new element");
    prevYPos.current = props.scrollPos;
  }, [props.addedElement]);

  useEffect(() => {
    updatePosition();
  }, [props.scrollPos]);


  function updatePosition() {
    var pathPosition = getComputedStyle(trackerRef.current).offsetDistance;
    pathPosition = pathPosition.slice(0, -1);
    pathPosition = parseFloat(pathPosition);

    const speed = 0.3;

    if (props.scrollPos >= prevYPos.current) { // scroll down
      trackerRef.current.style.offsetDistance = pathPosition + speed + "%";
    }
    if (props.scrollPos < prevYPos.current) { // scroll up
      trackerRef.current.style.offsetDistance = pathPosition - speed + "%";
    }
    prevYPos.current = props.scrollPos;
  }

  return <div ref={trackerRef} className="tracker" />;
}
