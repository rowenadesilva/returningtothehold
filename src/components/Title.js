import React, { useRef, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TrackerContext } from "./TrackerContext";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TitleWrapper = styled.div`
  position: relative;
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  font-size: 4em;
  color: #2f63be;
  // border: 5px solid yellow;

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const TitleLeft = styled.div`
  position: absolute;
  top: 50vh;
  left: 2vw;

  @media (max-width: 480px) {
    width: min-content;
    transform: translateY(-25%);
  }
`;

const TitleRight = styled.a.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  top: 50vh;
  z-index: 100;
  right: 2vw;
  transform-origin: right;
  font-size: 1em;
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

const Abstract = styled.div`
  position: absolute;
  top: 150vh;
  text-align: center;
  font-size: 0.5em;
  color: #eef3e5;
  padding: 0 20vw;
`;

const Abstract2 = styled.div`
  font-size: 0.8em;
  margin-top: 80vh;
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
export default function Title() {
  const hold = useRef();
  const trackerPos = useContext(TrackerContext);

  // check if hold logo finished start sequence
  const [holdActivated, setHoldActivated] = useState(false);

  // set hold logo y-pos to scroll position
  useEffect(() => {
    if (holdActivated) {
      hold.current.style.top = trackerPos + "vh";
    }
  });

  // all GSAP text animations
  useGSAP(() => {
    const holdGSAP = gsap.to(hold.current, {
      scrollTrigger: {
        trigger: hold.current,
        start: "top center",
        end: "top top",
        // markers: true,
        scrub: 1,
        onLeave: () => {
          holdGSAP.scrollTrigger.kill();
          hold.current.classList.add("active");
          setHoldActivated(true);
        },
      },
      scale: "0.5",
      ease: "expoScale(0.5,7,none)",
    });
  });
  return (
    <div>
      <TitleWrapper>
        <TitleLeft>RETURNING TO THE </TitleLeft>
        <TitleRight ref={hold}>
          <Highlight>HOLD</Highlight>
        </TitleRight>
        {/* ABSTRACT CHAPTER */}
        <Abstract>
          Bibby Stockholm is a barge berthed at Portland Harbour on the south
          coast of England, currently detaining 135 asylum seekers. <br />{" "}
          <br />
          Delving into the history of Bibby Stockholm uncovers the company’s
          legacy in the transatlantic slave trade, connecting contemporary
          border practices to a larger narrative of colonialism and empire.
          <br />
          <br />
          <br />
          <Abstract2>
            The line from Bibby Stockholm to the transatlantic slave trade is a
            direct one and its history is full of reverberations
          </Abstract2>
        </Abstract>
      </TitleWrapper>
    </div>
  );
}
