import React, { useRef, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TrackerContext } from "./TrackerContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HoldOne = styled.a.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  top: 50vh;
  z-index: 100;
  right: 2vw;
  transform-origin: right;
  font-size: 4em;
  color: #eef3e5;

  &.active {
    position: fixed;
    scale: 0.5 !important;
    top: 0;
    margin: 0;
    &:hover {
      transform: scale(1.5) !important;
      transition-duration: 1s !important;
    }
  }
`;

const HoldTwo = styled.a.attrs((props) => ({}))`
  position: fixed;
  right: 2vw;
  font-size: 2em;
  height: min-content;
  color: red;
`;

const Highlight = styled.span`
  color: #eef3e5;
  &::before {
    content: "(";
    color: #2f63be;
  }
  &::after {
    content: ")";
    color: #2f63be;
  }
`;

function Hold2Div(trackerPos) {
  console.log(trackerPos.trackerPos);
  const hold2 = useRef();

  if (hold2.current) {
    console.log(window.innerHeight);
    hold2.current.style.top = (window.innerHeight * trackerPos.trackerPos / 100) - window.innerHeight + 20 + "px";
    console.log(0 - hold2.current.clientHeight + trackerPos.trackerPos);
  }

  if (trackerPos.trackerPos) {
    return (
      <HoldTwo ref={hold2}>
        <Highlight>HOLD</Highlight>
      </HoldTwo>
    );
  }
}

export default function Hold() {
  const hold1 = useRef();
  const trackerPos = useContext(TrackerContext);

  // check if hold logo finished start sequence
  const [holdActivated, setHoldActivated] = useState(false);

  // set hold logo y-pos to scroll position
  useEffect(() => {
    if (holdActivated) {
      hold1.current.style.top = trackerPos + "vh";
    }
  });

  // all GSAP text animations
  useGSAP(() => {
    const holdGSAP = gsap.to(hold1.current, {
      scrollTrigger: {
        trigger: hold1.current,
        start: "top center",
        end: "top top",
        // markers: true,
        scrub: 1,
        onLeave: () => {
          holdGSAP.scrollTrigger.kill();
          hold1.current.classList.add("active");
          setHoldActivated(true);
        },
      },
      scale: "0.5",
      ease: "expoScale(0.5,7,none)",
    });
  });
  return (
    <div>
      <HoldOne ref={hold1}>
        <Highlight>HOLD</Highlight>
      </HoldOne>
      <Hold2Div trackerPos={trackerPos} />
    </div>
  );
}
