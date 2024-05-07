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

const Copy = styled.div`
  padding-right: 5vw;
  padding-left: 1vw;
  font-size: 1.1rem;
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

const Reference = styled(Copy)`
  font-size: 0.8em;
  font-family: LucidBook;
`;

const RefNumber = styled.span`
  color: #2f63be;
`;

const RefNumberCopy = styled.sup`
  color: #2f63be;
`;

const Link = styled.a`
  color: #2f63be;
  text-decoration: none;
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
  });

  return (
    <div>
      <Wrapper ref={wrapperRef}>
        <Copy>
          <HoldTitle>
            The <span style={{ color: "#2f63be" }}>(</span>Hold
            <span style={{ color: "#2f63be" }}>)</span>
          </HoldTitle>
          <Emphasis>The Hold</Emphasis> derives from Christina Sharpe’s book In
          the Wake: On Blackness and Being.
          <br />
          <br />
          <Emphasis>The Hold</Emphasis>, the space in a ship where the cargo is
          stored, was the place where captured Africans were shackled and
          detained. <br /> <br />
          <Emphasis>The Hold</Emphasis> was both real and symbolic in its
          destruction, both for those who were thrown aboard and for those who
          survived, “living under the sentence of death”.
          <RefNumberCopy>1</RefNumberCopy> <br /> <br />
          <Emphasis>The Hold</Emphasis> has its descendants to contemporary
          forms of incarceration such as the prison, the lager, the camp and the
          detention centre, which reiterate the conditions of the hold in the
          slave ship.<RefNumberCopy>2</RefNumberCopy> <br /> <br />
          <Emphasis>The Hold</Emphasis> is the blueprint which has shaped the
          architecture of incarceration today.
        </Copy>
        <Reference>
          <br />
          <RefNumber>1</RefNumber> Glissant, Poetics of Relations, 6. <br />
          <RefNumber>2</RefNumber> Sharpe, In the Wake, 153.
        </Reference>
        <Copy>
          <br />
          <br />
          <hr />
          <br />
          <br />
          This investigation was developed from a master’s thesis at the Centre
          for Research Architecture. The research began in 2022 following the
          announcement of the Rwanda Migration Bill, which has since been
          enacted into law. In the UK’s attempt to implement offshore detention,
          legislation and action has been rapidly unfolding. It is within this
          climate that this project is ongoing.
        </Copy>
        <Copy>
          <br />
          <br />
          <Link href="mailto:"> Rowena De Silva</Link> is an open source
          researcher. She graduated with an MA from the Centre for Research
          Architecture in 2023. <br />
          <br />
          <Link href="https://finn-steffens.de/" target="_blank">
            Finn Steffens
          </Link>{" "}
          is visual researcher and designer. He graduated with an MA from the
          Centre for Research Architecture in 2022.
          <br />
          <br /> <br />
          <br />
          (Last updated on Monday, 05 May 2024)
          <br /> <br />
        </Copy>
      </Wrapper>
      <Left ref={leftRef} onClick={() => props.notifyParent()} />
    </div>
  );
}
