import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
`;

const VerseWrapper = styled.div`
  position: absolute;
  display: block;
  font-size: 1.2em;
  text-align: left;
  padding: 0;
  color: #eef3e5;
  width: max-content;
  height: max-content;
  // border: 1px solid yellow;
`;

const No1 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.095);
  left: calc(var(--list-element-width) * 0.55);
`;

const No2 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.1);
  left: calc(var(--list-element-width) * 0.75);
`;

const No3 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.108);
  left: calc(var(--list-element-width) * 0.12);
`;

const No4 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.115);
  left: calc(var(--list-element-width) * 0.3);
`;

const No5 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.128);
  left: calc(var(--list-element-width) * 0.82);
`;

const No6 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.15);
  left: calc(var(--list-element-width) * 0.4);
`;

const No7 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.155);
  left: calc(var(--list-element-width) * 0.73);
`;

const No8 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.168);
  left: calc(var(--list-element-width) * 0.3);
`;

const No9 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.168);
  left: calc(var(--list-element-width) * 0.92);
`;

const No10 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.237);
  left: calc(var(--list-element-width) * 0.2);
`;

const No11 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.239);
  left: calc(var(--list-element-width) * 0.6);
`;

const No12 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.253);
  left: calc(var(--list-element-width) * 0.05);
`;

const No13 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.26);
  left: calc(var(--list-element-width) * 0.73);
`;

export default function Verse(index) {
  console.log(index.index);
  switch (index.index) {
    case 1:
      return (
        <No1>
          By negating a beginning
          <br />
          and an end the ocean
          <br />
          appears atemporal
        </No1>
      );
      break;
    case 2:
      return (
        <No2>
          concealing the markers
          <br />
          which place us in time
        </No2>
      );
      break;
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
      break;
    case 4:
      return (
        <No4>
          where the ‘gentle’ tide <br />
          becomes eveloped into
          <br />
          the sand
        </No4>
      );
      break;
    case 5:
      return (
        <No5>
          washes away the <br />
          imprints on the shore
        </No5>
      );
      break;
    case 6:
      return (
        <No6>
          In its ebb and flow,
          <br /> the ocean renews itself
        </No6>
      );
      break;
    case 7:
      return (
        <No7>
          the water folds inwards, <br />
          reaffirming itself
        </No7>
      );
      break;
    case 8:
      return <No8>This is what Édouard Glissant calls </No8>;
      break;
    case 9:
      return <No9>a tautology</No9>;
      break;
    case 10:
      return (
        <No10>
          This uninterrupted event, <br />
          cyclical in its nature,
        </No10>
      );
      break;
    case 11:
      return <No11>is void of an end</No11>;
      break;

    case 12:
      return <No12>The waves continue to meet the shore</No12>;
      break;

    case 13:
      return (
        <No13>
          but the balls and chains <br />
          which rust at the bed <br />
          betray the time that has <br />
          passed
        </No13>
      );
      break;

    default:
      break;
  }
}
