import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Bullet = styled.div`
  position: absolute;
  font-size: 19px;
  text-align: left;
  font-family: LucidBook;
  vertical-align: text-top;
  color: white;
  width: 50%;

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  @media (min-width: 1000px && max-height: 900px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const Year = styled.span`
  font-family: LucidBold;
  color: #2f63be;
`;

export default function Timeline() {
  return (
    <Wrapper>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.7)",
          left: "calc(var(--width) * 0.45)",
        }}
      >
        <Year>1982:</Year> Originally built to house offshore workers in gas and
        oil, Bibby Line acquires a vessel and names it Bibby Resolution.
        Chartered by the MoD, Bibby Resolution is used to provide accommodation
        for British troops in the Falklands war.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.7085)",
          left: "calc(var(--width) * 0.2)",
        }}
      >
        <Year>1988:</Year> Bibby Resolution and its sister ship Bibby Venture
        are sold to the New York City Department of Correction to function as
        prison ships to alleviate overcrowding at Rikers Island. Bibby
        Resolution becomes Maritime Facility II (MTF2) and is docked in the East
        River in Manhattan.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.719)",
          left: "calc(var(--width) * 0.15)",
        }}
      >
        <Year>1992:</Year> Bibby Resolution is decommissioned as a prison ship.
        The ship becomes a precursor to New York’s Vernon C Bain Correctional
        Facility, the world’s largest prison barge.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.73)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        <Year>1996:</Year> Langham Industries acquires Portland Harbour from the
        Royal Navy.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.734)",
          left: "calc(var(--width) * 0.5)",
        }}
      >
        <Year>1997:</Year> Maritime Facility II (fka Bibby Resolution) is sold
        to the UK government, establishing HMP Weare as a solution to the
        overcrowding of Portland’s largest prison, HMP The Verne. HMP Weare
        becomes Langham Industries’ first major contract.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.746)",
          left: "calc(var(--width) * 0.1)",
        }}
      >
        <Year>2004:</Year> A report is published which details the “unacceptably
        cramped and claustrophobic” conditions onboard HMP Weare, prompting the
        beginning of HMP Weare’s closure.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.751)",
          left: "calc(var(--width) * 0.25)",
        }}
      >
        <Year>2005:</Year> HMP Weare closes, eventually leaving Portland in
        December 2009. To this date, HMP Weare is the UK's latest use of a
        prison ship.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.76)",
          left: "calc(var(--width) * 0.4)",
        }}
      >
        <Year>2009:</Year> HMP Weare is sold to a Dutch shipping company and
        renamed once again, to Jascon 27.
      </Bullet>
      <Bullet
        style={{
          top: "calc(var(--height) * 0.765)",
          left: "calc(var(--width) * 0.28)",
          width: "80%",
        }}
      >
        The history of HMP Weare evidences the historical relationship between
        Bibby Line and Langham Industries in profiting from Portland’s
        military-prison nexus. The same corporate actors reappear in HMP Weare’s
        history who are crucially responsible for the utilisation of Bibby
        Stocknholm as a detention prison.
      </Bullet>
    </Wrapper>
  );
}
