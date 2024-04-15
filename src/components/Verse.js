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
  left: calc(var(--list-element-width) * 0.08);
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
  left: calc(var(--list-element-width) * 0.2);
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

const No14 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.425);
  left: calc(var(--list-element-width) * 0.1);
`;

const No15 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.431);
  left: calc(var(--list-element-width) * 0.205);
  text-align: right;
`;

const No16 = styled(VerseWrapper)`
  top: calc(var(--list-element-height) * 0.432);
  left: calc(var(--list-element-width) * 0.5);
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
          {Array(30)
            .fill()
            .map((item, i) => {
              return (
                <a>
                  ditto <br />
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
          {Array(10)
            .fill()
            .map((item, i) => {
              return (
                <a>
                  ditto <br />
                </a>
              );
            })}
          <br /> <br /> <br /> <br /> <br />
          ditto <br />
          ditto <br />
          ditto <br />
          ditto <br />
        </No16>
      );

    default:
      <p>THIS IS A VERSE</p>
  }
}
