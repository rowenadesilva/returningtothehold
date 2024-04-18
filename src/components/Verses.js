import React from "react";
import styled from "styled-components";

const VerseWrapper = styled.div`
  position: absolute;
  display: block;
  font-size: 1.2em;
  text-align: left;
  padding: 0;
  color: #eef3e5;
  width: max-content;
  height: max-content;

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export default function Verses() {
  return (
    <div>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.092)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        By negating a beginning
        <br />
        and an end the ocean
        <br />
        appears atemporal
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.097)",
          left: "calc(var(--width) * 0.8)",
        }}
      >
        concealing the markers
        <br />
        which place us in time
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.101)",
          left: "calc(var(--width) * 0.06)",
        }}
      >
        The approach
        <br />
        and retreat of
        <br />
        the sea,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.105)",
          left: "calc(var(--width) * 0.3)",
        }}
      >
        where the ‘gentle’ tide <br />
        becomes eveloped into
        <br />
        the sand
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.115)",
          left: "calc(var(--width) * 0.85)",
        }}
      >
        washes away the <br />
        imprints on the shore
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.127)",
          left: "calc(var(--width) * 0.3)",
        }}
      >
        In its ebb and flow,
        <br /> the ocean renews itself
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.132)",
          left: "calc(var(--width) * 0.73)",
        }}
      >
        the water folds inwards, <br />
        reaffirming itself
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.14)",
          left: "calc(var(--width) * 0.2)",
        }}
      >
        This is what Édouard Glissant calls
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.14)",
          left: "calc(var(--width) * 0.92)",
        }}
      >
        a tautology
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.25)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        This uninterrupted event, <br />
        cyclical in its nature,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.253)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        is void of an end
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.2625)",
          left: "calc(var(--width) * 0.01)",
        }}
      >
        The waves continue to meet the shore
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.2697)",
          left: "calc(var(--width) * 0.95)",
        }}
      >
        but the balls and chains <br />
        which rust at the bed <br />
        betray the time that has <br />
        passed
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.41)",
          left: "calc(var(--width) * 0.03)",
        }}
      >
        In attempts to remap slave voyages,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.415)",
          left: "calc(var(--width) * 0.181)",
          textAlign: "right",
        }}
      >
        patterns are solidified and &nbsp; &nbsp; &nbsp; ditto
        <br />
        {Array(80)
          .fill()
          .map((i) => {
            return (
              <span key={i} id={i}>
                ditto
                <br />
              </span>
            );
          })}
        ditto marks
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.42)",
          left: "calc(var(--width) * 0.46)",
        }}
      >
        ditto <br />
        <br />
        <br />
        <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
        <br /> <br /> <br /> <br /> <br />
        ditto <br />
        ditto <br />
        ditto <br />
        ditto <br />
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.4551)",
          left: "calc(var(--width) * 0.5)",
        }}
      >
        could fill whole pages <br />
        of the archives
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.46)",
          left: "calc(var(--width) * 0.3)",
        }}
      >
        Whilst they diffuse <br />
        across the ocean,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.471)",
          left: "calc(var(--width) * 0.25)",
        }}
      >
        ports are where <br />
        the multitude of <br />
        journeys converge
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.48)",
          left: "calc(var(--width) * 1)",
        }}
      >
        The routes forged <br />
        through reiteration <br />
        gather definitively <br />
        at these points
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.495)",
          left: "calc(var(--width) * 0.8)",
        }}
      >
        evidence a concentration <br />
        and accumulation of
        <br />
        histories of brutality
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.615)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        “The boats set out <br />
        one after another.
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.619)",
          left: "calc(var(--width) * 0.62)",
        }}
      >
        And when the migrants <br />
        reach the shore
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.62)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        they are often <br />
        returned to the <br />
        hold in the form of
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.625)",
          left: "calc(var(--width) * 0.25)",
        }}
      >
        the camp,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.627)",
          left: "calc(var(--width) * 0.35)",
        }}
      >
        the Lager,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.629)",
          left: "calc(var(--width) * 0.15)",
        }}
      >
        the detention <br />
        center,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.631)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        and so on,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.635)",
          left: "calc(var(--width) * 0.5)",
        }}
      >
        and they may be <br />
        returned to the ship
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.6425)",
          left: "calc(var(--width) * 0.05)",
        }}
      >
        Cast behind,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.65)",
          left: "calc(var(--width) * 0.8)",
        }}
      >
        set adrift,
      </VerseWrapper>
      <VerseWrapper
        style={{
          top: "calc(var(--height) * 0.66)",
          left: "calc(var(--width) * 0.9)",
        }}
      >
        once again.”.
      </VerseWrapper>
    </div>
  );
}
