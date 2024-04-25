import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const VerseWrapper = styled.div`
  position: absolute;
  display: block;
  font-size: 1.2em;
  text-align: left;
  padding: 0;
  color: #eef3e5;
  width: max-content;
  height: max-content;
  mix-blend-mode: difference;
  // filter: drop-shadow(0px 10px 4px #001814);
  font-family: "LucidBook";
  font-feature-settings: "ss01" 1;

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

export default function Verses() {
  const verse1 = useRef();
  // apply parallax effect to any element with a data-speed attribute

  function activateParallax() {
    gsap.utils.toArray(".verse").forEach((el) => {
      gsap.to(el, {
        yPercent: parseFloat(el.getAttribute("data-speed")) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // the default values
          end: "200 top",
          scrub: true,
        },
      });
    });
  }

  useEffect(() => {
    activateParallax();
  }, []);

  return (
    <div>
      <VerseWrapper
        className="verse"
        data-speed="0.4"
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
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.096)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        concealing the markers
        <br />
        which place us in time
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="1.1"
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
        className="verse"
        data-speed="2"
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
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.122)",
          left: "calc(var(--width) * 0.62)",
        }}
      >
        washes away the <br />
        imprints on the shore
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.127)",
          left: "calc(var(--width) * 0.2)",
        }}
      >
        In its ebb and flow,
        <br /> the ocean renews itself
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.132)",
          left: "calc(var(--width) * 0.73)",
        }}
      >
        the water folds inwards, <br />
        reaffirming itself
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.14)",
          left: "calc(var(--width) * 0.2)",
        }}
      >
        This is what Édouard Glissant calls
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.14)",
          left: "calc(var(--width) * 0.9)",
        }}
      >
        a tautology
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.25)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        This uninterrupted event, <br />
        cyclical in its nature,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.253)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        is void of an end
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.2625)",
          left: "calc(var(--width) * 0.01)",
        }}
      >
        The waves continue to meet the shore
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.2738)",
          left: "calc(var(--width) * 0.65)",
        }}
      >
        but the balls and chains <br />
        which rust at the bed <br />
        betray the time that has <br />
        passed
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
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
          left: "calc(var(--width) * -0.2)",
          textAlign: "right",
        }}
      >
        patterns are solidified and &nbsp; &nbsp; &nbsp; ditto
        <br />
        {Array(80)
          .fill()
          .map((index, i) => {
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
          top: "calc(var(--height) * 0.421)",
          left: "calc(var(--width) * 0.08)",
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
          left: "calc(var(--width) * 0.2)",
        }}
      >
        could fill whole pages <br />
        of the archives
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.465)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        Whilst they diffuse <br />
        across the ocean,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
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
        className="verse"
        data-speed="1"
        style={{
          top: "calc(var(--height) * 0.4825)",
          left: "calc(var(--width) * 0.69)",
        }}
      >
        The routes forged <br />
        through reiteration <br />
        gather definitively <br />
        at these points
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.498)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        evidence a concentration <br />
        and accumulation of
        <br />
        histories of brutality
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.615)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        “The boats set out <br />
        one after another.
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.619)",
          left: "calc(var(--width) * 0.62)",
        }}
      >
        And when the migrants <br />
        reach the shore
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
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
        className="verse"
        data-speed="1"
        style={{
          top: "calc(var(--height) * 0.625)",
          left: "calc(var(--width) * 0.25)",
        }}
      >
        the camp,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="3"
        style={{
          top: "calc(var(--height) * 0.627)",
          left: "calc(var(--width) * 0.35)",
        }}
      >
        the Lager,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2.5"
        style={{
          top: "calc(var(--height) * 0.629)",
          left: "calc(var(--width) * 0.15)",
        }}
      >
        the detention <br />
        center,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="1.5"
        style={{
          top: "calc(var(--height) * 0.631)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        and so on,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.635)",
          left: "calc(var(--width) * 0.5)",
        }}
      >
        and they may be <br />
        returned to the ship
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="3"
        style={{
          top: "calc(var(--height) * 0.6425)",
          left: "calc(var(--width) * 0.05)",
        }}
      >
        Cast behind,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="4"
        style={{
          top: "calc(var(--height) * 0.65)",
          left: "calc(var(--width) * 0.8)",
        }}
      >
        set adrift,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 0.662)",
          left: "calc(var(--width) * 0.3)",
        }}
      >
        once again.”.
      </VerseWrapper>
    </div>
  );
}
