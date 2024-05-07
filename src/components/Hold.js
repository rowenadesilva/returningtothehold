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
  transform-origin: right top;
  font-size: 12em;
  color: #eef3e5;
  // font-family: "Lyno";
  font-family: "LucidBook";
  font-feature-settings: "ss01" 1;

  &.active {
    position: fixed;
    scale: 0.2 !important;
    top: 0;
    margin: 0;
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
  color: #eef3e5;
  font-family: "Lyno";

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
    hold2.current.style.top =
      (window.innerHeight * props.trackerPos) / 100 -
      window.innerHeight +
      20 +
      "px";
  }
}

export default function Hold() {
  const hold1 = useRef();
  const trackerPos = useContext(TrackerContext);
  const [showAbout, setShowAbout] = useState(false);

  // set hold logo y-pos to scroll position after hold has finished start sequence
  useEffect(() => {
    if (hold1.current.classList.contains("active")) {
      console.log(trackerPos);
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
        onLeave: () => {
          hold1.current.classList.add("active");
          holdGSAP.scrollTrigger.kill();
        },
      },
      scale: "0.2",
    });

    const animation = gsap.to(hold1.current, {
      scale: 1.5,
      paused: true,
    });

    hold1.current.addEventListener("mouseenter", () => {
      if (hold1.current.classList.contains("active")) {
        animation.play();
      }
    });
    hold1.current.addEventListener("mouseleave", () => animation.reverse());
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
