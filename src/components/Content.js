import React from "react";
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

export default function Content() {
  return (
    <Wrapper>
      <Chapters />
      <Verses />
    </Wrapper>
  );
}
