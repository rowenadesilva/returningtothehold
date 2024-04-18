import React, { useRef } from "react";
import styled from "styled-components";
import Verses from "./Verses";
import Chapters from "./Chapters";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  border: 10px solid red;
  text-align: center;
`;

const Intro = styled.div`
  position: absolute;
  width: 100%;
  text-align: left;
  font-size: 2em;
  @media (max-width: 1000px) {
    font-size: 1.3em;
  }

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export default function Content() {
  const wrapperRef = useRef();
  const abstract = useRef();

  // all GSAP text animations
  useGSAP(
    () => {
      gsap.to(abstract.current, {
        scrollTrigger: {
          trigger: abstract.current,
          start: "bottom center",
          end: 800 + " center",
          pin: abstract.current,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <Wrapper ref={wrapperRef}>
      <Intro style={{ top: "calc(var(--height) * 0.05)" }}>
        The line from Bibby Stockholm to the transatlantic slave trade is a
        direct one and its history is full of reverberations
      </Intro>
      <Chapters />
      <Verses />
    </Wrapper>
  );
}
