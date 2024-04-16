import React, { useRef, useEffect } from "react";
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

  --total-height: 38874.2px;
  --total-width: 900px;

  @media (max-width: 1000px) {
    font-size: 1em;
    --total-height: 30235.5px;
    --total-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    --total-height: 23756.4px;
    --total-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    --total-height: 12958.1px;
    --total-width: 300px;
  }
`;

const No1 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.12);
  left: calc(var(--total-width) * 0.3);
`;

const No2 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.125);
  left: calc(var(--total-width) * 0.8);
`;

const No3 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.13);
  left: calc(var(--total-width) * 0.06);
`;

const No4 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.137);
  left: calc(var(--total-width) * 0.3);
`;

const No5 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.146);
  left: calc(var(--total-width) * 0.9);
`;

const No6 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.16);
  left: calc(var(--total-width) * 0.3);
`;

const No7 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.168);
  left: calc(var(--total-width) * 0.73);
`;

const No8 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.178);
  left: calc(var(--total-width) * 0.2);
`;

const No9 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.178);
  left: calc(var(--total-width) * 0.92);
`;

const No10 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.275);
  left: calc(var(--total-width) * 0.2);
`;

const No11 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.28);
  left: calc(var(--total-width) * 0.6);
`;

const No12 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.2882);
  left: calc(var(--total-width) * 0.01);
`;

const No13 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.294);
  left: calc(var(--total-width) * 0.73);
`;

const No14 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.42);
  left: calc(var(--total-width) * 0.1);
`;

const No15 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.431);
  left: calc(var(--total-width) * 0.181);
  text-align: right;
`;

const No16 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.432);
  left: calc(var(--total-width) * 0.5);
`;

const No17 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.47);
  left: calc(var(--total-width) * 0.5);
`;

const No18 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.478);
  left: calc(var(--total-width) * 0.36);
`;

const No19 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.487);
  left: calc(var(--total-width) * 0.3);
`;

const No20 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.498);
  left: calc(var(--total-width) * 1);
`;

const No21 = styled(VerseWrapper)`
  top: calc(var(--total-height) * 0.518);
  left: calc(var(--total-width) * 0.8);
`;

export default function Verse(index) {
  const noRef = useRef();

  const renderSwitch = (index) => {
    switch (index.index) {
      case 1:
        return (
          <No1 ref={noRef}>
            By negating a beginning
            <br />
            and an end the ocean
            <br />
            appears atemporal
          </No1>
        );

      case 2:
        return (
          <No2>
            concealing the markers
            <br />
            which place us in time
          </No2>
        );

      case 3:
        return (
          <No3>
            The approach
            <br />
            and retreat of
            <br />
            the sea,
          </No3>
        );

      case 4:
        return (
          <No4>
            where the ‘gentle’ tide <br />
            becomes eveloped into
            <br />
            the sand
          </No4>
        );

      case 5:
        return (
          <No5>
            washes away the <br />
            imprints on the shore
          </No5>
        );

      case 6:
        return (
          <No6>
            In its ebb and flow,
            <br /> the ocean renews itself
          </No6>
        );

      case 7:
        return (
          <No7>
            the water folds inwards, <br />
            reaffirming itself
          </No7>
        );
      case 8:
        return <No8>This is what Édouard Glissant calls </No8>;

      case 9:
        return <No9>a tautology</No9>;

      case 10:
        return (
          <No10>
            This uninterrupted event, <br />
            cyclical in its nature,
          </No10>
        );

      case 11:
        return <No11>is void of an end</No11>;

      case 12:
        return <No12>The waves continue to meet the shore</No12>;

      case 13:
        return (
          <No13>
            but the balls and chains <br />
            which rust at the bed <br />
            betray the time that has <br />
            passed
          </No13>
        );

      case 14:
        return <No14>In attempts to remap slave voyages,</No14>;

      case 15:
        return (
          <No15>
            patterns are solidified and &nbsp; &nbsp; &nbsp; ditto
            <br />
            {Array(60)
              .fill()
              .map((item, i) => {
                return (
                  <a key={i}>
                    ditto
                    <br />
                  </a>
                );
              })}
            ditto marks
          </No15>
        );

      case 16:
        return (
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
        );

      case 17:
        return (
          <No17>
            could fill whole pages <br />
            of the archives
          </No17>
        );

      case 18:
        return (
          <No18>
            Whilst they diffuse <br />
            across the ocean,
          </No18>
        );

      case 19:
        return (
          <No19>
            ports are where <br />
            the multitude of <br />
            journeys converge
          </No19>
        );

      case 20:
        return (
          <No20>
            The routes forged <br />
            through reiteration <br />
            gather definitively <br />
            at these points
          </No20>
        );

      case 21:
        return (
          <No21>
            evidence a concentration <br />
            and accumulation of
            <br />
            histories of brutality
          </No21>
        );

      default:
        <p>THIS IS A VERSE</p>;
    }
  };

  return <div>{renderSwitch(index)}</div>;
}
