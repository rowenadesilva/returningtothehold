import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 35vw;
  max-width: 500px;
  height: 100vh;
  background-color: #001814;
  z-index: 1000;
  overflow-y: scroll;
  transform: translateX(100%);
  transition-duration: 1s !important;
  filter: drop-shadow(0 0 0.75rem white);
  font-family: "LucidBook";
`;

const Left = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 65vw;
  height: 100vh;
  z-index: 1000;
  display: none;
`;

const HoldDefinition = styled.div`
  padding: 2vw;
  padding-right: 5vw;
  // padding-top: 20vh;
  font-size: 1.3rem;
  color: white;
  line-height: 1.5;
  font-family: "LucidBook";
`;

const HoldTitle = styled.h1`
  font-family: "LucidBook";
  font-size: 2rem;
  color: white;
  font-feature-settings: "ss01" 1;
`;

const Emphasis = styled.span`
  font-family: "LucidBook";
  font-feature-settings: "ss01" 1;
  color: #2f63be;
`;

export default function About(props) {
  const wrapperRef = useRef();
  const leftRef = useRef();

  function showAboutSection() {
    console.log(props.about);
    if (props.about === false) {
      wrapperRef.current.style.transform = "translateX(100%)";
      leftRef.current.style.display = "none";
      return;
    } else if (props.about === true) {
      wrapperRef.current.style.transform = "translateX(0)";
      leftRef.current.style.display = "block";
    }
  }

  useEffect(() => {
    showAboutSection();
  }, [props.about]);

  return (
    <div>
      <Wrapper ref={wrapperRef}>
        <HoldDefinition>
          <HoldTitle>
            The <span style={{ color: "#2f63be" }}>(</span>Hold
            <span style={{ color: "#2f63be" }}>)</span>
          </HoldTitle>
          In this investigation, the hold derives from Christina Sharpe’s{" "}
          <Emphasis>In the Wake: On Blackness and Being.</Emphasis> The hold,
          the space in a ship where the cargo is stored, was the place where
          captured Africans were shackled and detained. The hold was both real
          and symbolic in its destruction, both for those who were thrown aboard
          and for those who survived, “living under the sentence of death”.
          Sharpe follows the genealogy of the hold, tracing its descendents to
          contemporary forms of incarceration. The prison, the lager, the camp
          and the detention centre reiterate the conditions of the hold in the
          slave ship. Through this thinking, the hold is the blueprint which has
          shaped the architecture of incarceration today. In this investigation,
          the voyage of small boats, the subsequent detention of migrants upon
          arrival, and the loss suffered during and after this journey, is
          placed within the legacy of the hold, which begins with the slave
          ship. The chain of subjugation is one of recurrence. There is a
          repetition–an infinite loop– which ties this thinking together,
          becoming essential in understanding the nature of racial violence and
          the ways it is sustained.
        </HoldDefinition>
      </Wrapper>
      <Left ref={leftRef} onClick={() => props.notifyParent()} />
    </div>
  );
}
