import React, { useEffect } from "react";
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
  // apply parallax effect to each verse
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
        becomes enveloped into
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
          left: "calc(var(--width) * 0.1)",
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
        data-speed="0"
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
          top: "calc(var(--height) * 0.4078)",
          left: "calc(var(--width) * 0.01)",
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
          top: "calc(var(--height) * 0.465)",
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
        data-speed="0"
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
        data-speed="0.3"
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
        data-speed="1"
        style={{
          top: "calc(var(--height) * 0.618)",
          left: "calc(var(--width) * 0.61)",
        }}
      >
        And when the migrants <br />
        reach the shore
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="0.8"
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
          top: "calc(var(--height) * 0.624)",
          left: "calc(var(--width) * 0.2)",
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
        data-speed="1.1"
        style={{
          top: "calc(var(--height) * 0.629)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        the detention <br />
        center,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="1.2"
        style={{
          top: "calc(var(--height) * 0.631)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        and so on,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="0.5"
        style={{
          top: "calc(var(--height) * 0.6363)",
          left: "calc(var(--width) * 0.13)",
        }}
      >
        and they may be <br />
        returned to the ship
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="6"
        style={{
          top: "calc(var(--height) * 0.6425)",
          left: "calc(var(--width) * -0.1)",
        }}
      >
        Cast behind,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="10"
        style={{
          top: "calc(var(--height) * 0.65)",
          left: "calc(var(--width) * 0.25)",
        }}
      >
        set adrift,
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="10"
        style={{
          top: "calc(var(--height) * 0.663)",
          left: "calc(var(--width) * 0.85)",
        }}
      >
        once again.”
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="ß"
        style={{
          top: "calc(var(--height) * 1.01)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        Whilst often perceived as a palimpsest, <br />
        the ocean instead is a perpetual reverberation
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="1"
        style={{
          top: "calc(var(--height) * 1.013)",
          left: "calc(var(--width) * 0.75)",
        }}
      >
        its arrivals and departures
        <br />
        carry within them
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 1.019)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        echoes of the rupture of colonial violence and displacement
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2.5"
        style={{
          top: "calc(var(--height) * 1.023)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        reiterating the legacy
        <br />
        of the slave trade
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="1"
        style={{
          top: "calc(var(--height) * 1.028)",
          left: "calc(var(--width) * -0.18)",
        }}
      >
        Across a vast expanse where <br />
        histories multiply and resound,{" "}
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="3"
        style={{
          top: "calc(var(--height) * 1.029)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        its past is not washed away
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="4"
        style={{
          top: "calc(var(--height) * 1.034)",
          left: "calc(var(--width) * 0.7)",
        }}
      >
        but rather
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="1"
        style={{
          top: "calc(var(--height) * 1.037)",
          left: "calc(var(--width) * 0.5)",
        }}
      >
        endlessly
      </VerseWrapper>
      <VerseWrapper
        className="verse"
        data-speed="2"
        style={{
          top: "calc(var(--height) * 1.049)",
          left: "calc(var(--width) * 0.6)",
        }}
      >
        reconstituted
      </VerseWrapper>
    </div>
  );
}
