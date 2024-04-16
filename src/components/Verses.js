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

const No1 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.12);
  // left: calc(var(--width) * 0.3);
  left: 0;
`;

const No2 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.125);
  left: calc(var(--width) * 0.8);
`;

const No3 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.13);
  left: calc(var(--width) * 0.06);
`;

const No4 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.137);
  left: calc(var(--width) * 0.3);
`;

const No5 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.146);
  left: calc(var(--width) * 0.9);
`;

const No6 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.16);
  left: calc(var(--width) * 0.3);
`;

const No7 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.168);
  left: calc(var(--width) * 0.73);
`;

const No8 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.178);
  left: calc(var(--width) * 0.2);
`;

const No9 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.178);
  left: calc(var(--width) * 0.92);
`;

const No10 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.275);
  left: calc(var(--width) * 0.2);
`;

const No11 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.28);
  left: calc(var(--width) * 0.6);
`;

const No12 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.2882);
  left: calc(var(--width) * 0.01);
`;

const No13 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.294);
  left: calc(var(--width) * 0.73);
`;

const No14 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.42);
  left: calc(var(--width) * 0.1);
`;

const No15 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.431);
  left: calc(var(--width) * 0.181);
  text-align: right;
`;

const No16 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.432);
  left: calc(var(--width) * 0.5);
`;

const No17 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.47);
  left: calc(var(--width) * 0.5);
`;

const No18 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.478);
  left: calc(var(--width) * 0.36);
`;

const No19 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.487);
  left: calc(var(--width) * 0.3);
`;

const No20 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.498);
  left: calc(var(--width) * 1);
`;

const No21 = styled(VerseWrapper)`
  top: calc(var(--height) * 0.518);
  left: calc(var(--width) * 0.8);
`;

export default function Verses() {
  return (
    <div>
      <No1>
        By negating a beginning
        <br />
        and an end the ocean
        <br />
        appears atemporal
      </No1>
      <No2>
        concealing the markers
        <br />
        which place us in time
      </No2>
      <No3>
        The approach
        <br />
        and retreat of
        <br />
        the sea,
      </No3>
      <No4>
        where the ‘gentle’ tide <br />
        becomes eveloped into
        <br />
        the sand
      </No4>
      <No5>
        washes away the <br />
        imprints on the shore
      </No5>
      <No6>
        In its ebb and flow,
        <br /> the ocean renews itself
      </No6>
      <No7>
        the water folds inwards, <br />
        reaffirming itself
      </No7>
      <No8>This is what Édouard Glissant calls </No8>
      <No9>a tautology</No9>
      <No10>
        This uninterrupted event, <br />
        cyclical in its nature,
      </No10>

      <No11>is void of an end</No11>
      <No12>The waves continue to meet the shore</No12>
      <No13>
        but the balls and chains <br />
        which rust at the bed <br />
        betray the time that has <br />
        passed
      </No13>

      <No14>In attempts to remap slave voyages,</No14>
      <No15>
        patterns are solidified and &nbsp; &nbsp; &nbsp; ditto
        <br />
        {/* {Array(60)
              .fill()
              .map((item, i) => {
                          <a key={i}>
                    ditto
                    <br />
                  </a>
                );
              })} */}
        ditto marks
      </No15>

      <No16>
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
      </No16>

      <No17>
        could fill whole pages <br />
        of the archives
      </No17>

      <No18>
        Whilst they diffuse <br />
        across the ocean,
      </No18>

      <No19>
        ports are where <br />
        the multitude of <br />
        journeys converge
      </No19>

      <No20>
        The routes forged <br />
        through reiteration <br />
        gather definitively <br />
        at these points
      </No20>

      <No21>
        evidence a concentration <br />
        and accumulation of
        <br />
        histories of brutality
      </No21>
    </div>
  );
}
