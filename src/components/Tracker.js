import React, { useRef, useEffect } from "react";

export default function Tracker(props) {
  const trackerRef = useRef();

  var yPos = 0;
  var prevYPos = 0;
  var scrollPosPrev = 0;

  useEffect(() => {
    updatePosition();
  });

  function updatePosition() {
    // get scrolled distance and add to tracker position on path
    const differenceY = props.scrollPos - prevYPos;
    yPos = yPos + differenceY;

    // speed tracker up / slow down when getting close to screen edge
    yPos = keepInWindow(yPos);
    prevYPos = yPos;

    // update tracker position on line
    const percentage = (yPos / props.svgHeight) * 100;
    trackerRef.current.style.offsetDistance = percentage + "%";
    console.log(yPos)
  }

  // keep tracker on screen by speeding up or slowing down
  const keepInWindow = (yPos, ) => {
    const yScreenPos = trackerRef.current.getBoundingClientRect().top;
    const speed = 8;

    // If tracker is close to window upper edge
    if (window.innerHeight / 3 >= yScreenPos) {
      // SCROLLING DOWN
      if (scrollPosPrev < props.scrollPos) {
        console.log("speed up, tracker is getting close to upper edge!");
        yPos = yPos + speed; // speed up

        // if tracker outside window speed even more up
        if (yScreenPos <= 0) {
          yPos = yPos + speed;
        }
      } // SCROLLING UP
      else if (scrollPosPrev > props.scrollPos) {
        console.log("slow down, tracker is getting close to upper edge!");
        yPos = prevYPos - 1; // slow down

        // if tracker outside window slow even more down
        if (yScreenPos <= 0) {
          yPos = yPos + speed;
        }
      }

      // if tracker is in lower third
    } else if (window.innerHeight - window.innerHeight / 3 <= yScreenPos) {
      // SCROLLING DOWN
      if (scrollPosPrev < props.scrollPos) {
        console.log("slow down, tracker is getting close to lower edge!");
        yPos = prevYPos + 1; // slow down

        if (yScreenPos >= window.innerHeight) {
          yPos = yPos - speed; // if tracker outside window slow even more down
        }
      } // SCROLLING UP
      else if (scrollPosPrev > props.scrollPos) {
        console.log("speed up, tracker is getting close to lower edge!");
        yPos = yPos - speed; // speed up

        if (yScreenPos >= window.innerHeight) {
          yPos = yPos - speed; // if tracker outside window speed even more up
        }
      }
    }
    return yPos;
  };

  return <div ref={trackerRef} className="tracker" />;
}
