import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  font-weight: bold;
  text-align: center;
  left: 0;
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
`;

const Abstract = styled.div`
  margin-top: 100vh;
  transform: translateY(-50%);
  font-size: 1.5em;
  text-align: center;
  padding: 20vw;
`;

const Instruction = styled.div`
  transform: translateY(-50%);
  font-size: 1.5em;
  text-align: center;
  padding: 20vw;
`;

const Content = (scrollRef) => {
  const abstract = useRef();

  // gsap code here
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrollTrigger: {
          scroller: scrollRef.current,
          trigger: abstract.current,
        },
        start: "top center",
        end: "200 center",
        scrub: true,
        // markers: { startColor: "white", endColor: "white" },
        markers: false
      },
    });

    gsap.to(abstract.current, {
      // y: 100,
      // duration: 6,
    });
  });

  return (
    <Wrapper>
      <Title>RETURNING TO THE HOLD</Title>
      <Abstract ref={abstract}>
        <p>
          Bibby Stockholm is a barge berthed at Portland Harbour on the south
          coast of England, where it will detain 500 migrants. The history of
          Bibby Stockholm as a detention site, paired with the company’s longer
          legacy in the transatlantic slave trade, contextualises contemporary
          border practices within a larger narrative of colonialism and empire.
          Indebted to Christina Sharpe and Édouard Glissant, this work
          demonstrates how Bibby Stockholm sits in the lineage of the
          architecture and logic of slave ships, looking towards the ocean as an
          archive of this violence. Through this lens, Bibby Stockholm is an
          object to enter into the border-migration nexus and legacies of
          slavery–both intimately tied to the spatial politics of incarceration
          and border techniques situated within maritime space.
        </p>
      </Abstract>
      <Instruction>
        The line from Bibby Stockholm to the transatlantic slave trade is a
        direct one and its history is full of reverberations
      </Instruction>
    </Wrapper>
  );
};

export default Content;
