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
  return (
    <Wrapper>
      <Chapters />
      <Verses />
    </Wrapper>
  );
}
