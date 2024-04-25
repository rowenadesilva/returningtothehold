import React, { useRef, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TrackerContext } from "./TrackerContext";
import About from "./About";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HoldOne = styled.a.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  top: 75vh;
  z-index: 100;
  right: 2vw;
  // border: 5px solid yellow;
  transform-origin: right;
  font-size: 12em;
  color: #eef3e5;
  font-family: "Lyno";

  &.active {
    position: fixed;
    scale: 0.2 !important;
    top: 0;
    margin: 0;
    &:hover {
      transform: scale(1.2) !important;
      transition-duration: 1s !important;
    }
  }

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    width: min-content;
    transform: translateY(-25%);
  }
`;

const HoldTwo = styled.a.attrs((props) => ({}))`
  position: fixed;
  right: 2vw;
  font-size: 2em;
  height: min-content;
  color: red;

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    width: min-content;
    transform: translateY(-25%);
  }
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

function Hold2Div(props) {
  const hold2 = useRef();

  if (hold2.current) {
    console.log(props.trackerPos);
    hold2.current.style.top =
      (window.innerHeight * props.trackerPos) / 100 -
      window.innerHeight +
      20 +
      "px";
  }

  return (
    <HoldTwo ref={hold2}>
      {/* <Highlight onClick={() => setShowAbout(true)}>HOLD</Highlight> */}
    </HoldTwo>
  );
}

export default function Hold() {
  const hold1 = useRef();
  const trackerPos = useContext(TrackerContext);
  const [showAbout, setShowAbout] = useState(false);

  // check if hold logo finished start sequence
  const [holdActivated, setHoldActivated] = useState(false);

  // set hold logo y-pos to scroll position
  useEffect(() => {
    if (holdActivated) {
      hold1.current.style.top = trackerPos + "vh";
    }
  });

  function notifyMe() {
    setShowAbout(false);
    console.log(showAbout);
  }

  // all GSAP text animations
  useGSAP(() => {
    const holdGSAP = gsap.to(hold1.current, {
      scrollTrigger: {
        trigger: hold1.current,
        start: "bottom bottom",
        end: "top top",
        scrub: true,
        markers: true,
        onLeave: () => {
          holdGSAP.scrollTrigger.kill();
          hold1.current.classList.add("active");
          setHoldActivated(true);
        },
      },
      scale: "0.2",
    });
  });
  return (
    <div>
      <About about={showAbout} notifyParent={notifyMe} />
      <HoldOne ref={hold1}>
        <Highlight onClick={() => setShowAbout(true)}>HOLD</Highlight>
      </HoldOne>
      <Hold2Div trackerPos={trackerPos} showAbout={showAbout} />
    </div>
  );
}
