import React, { useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ChapterWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 60vw;
  left: calc((100vw - var(--width)) / -2);
  margin-left: 20vw;
  // border: 10px solid green;

  @media (max-height: 900px) {
    width: 70vw;
    margin-left: 10vw;
  }
`;

const ChapterCopy = styled.div`
  width: 75%;
  > * {
    margin-top: 800px;
  }

  > *:first-child {
    margin-top: 0px;
  }
`;

const PinnedChapter = styled.div`
  font-size: 1.3em;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 1.1em;
  }

  @media (min-width: 1000px && max-height: 900px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const ChapterTitle = styled.span`
  font-weight: 800;
  color: #2f63be;
`;

const ChapterReference = styled.div`
  width: 18%;
  text-align: left;
  margin-left: 7%;
  > * {
    margin-top: 800px;
  }

  > *:first-child {
    margin-top: 400px;
  }
`;

const PinnedReference = styled.div`
  font-size: 1em;

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export default function Chapters() {
  const abstract1 = useRef();
  const abstractTrigger = useRef();

  const introTrigger = useRef();
  const introduction1 = useRef();
  const introduction2 = useRef();
  const introduction3 = useRef();
  const introReference1 = useRef();
  const introReference2 = useRef();

  const bibbyEmpireTrigger = useRef();
  const bibbyEmpire1 = useRef();
  const bibbyEmpire2 = useRef();
  const bibbyEmpireReference1 = useRef();
  const bibbyEmpireReference2 = useRef();

  const langhamIndustriesTrigger = useRef();
  const langhamIndustries1 = useRef();
  const langhamIndustries2 = useRef();
  const langhamIndustriesReference1 = useRef();
  const langhamIndustriesReference2 = useRef();
  const langhamIndustries3 = useRef();
  const langhamIndustriesTrigger2 = useRef();
  const langhamIndustriesReference3 = useRef();

  const holdRepeatsTrigger = useRef();
  const holdRepeats1 = useRef();
  const holdRepeatsReference1 = useRef();

  // all GSAP text animations
  useGSAP(() => {
    function pinningChapters(
      chapterRefs,
      chapterReferenceRefs,
      chapterTrigger
    ) {
      let offsets; // an Array with each title's offset
      let totalOffset; // adds up all the heights of the titles

      // to make it responsive, we put the calculations into a function that we call on window resize (and initially)
      function calculateOffsets() {
        totalOffset = 0;
        offsets = chapterRefs.map((title) => {
          let prev = totalOffset;
          totalOffset += title.offsetHeight + 50;
          return prev;
        });
      }
      calculateOffsets();
      window.addEventListener("resize", calculateOffsets);

      chapterRefs.forEach((title, i) => {
        let heading = chapterRefs[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: chapterTrigger.current,
          start: () => "top " + (offsets[i] + 70),
          end: () => "bottom " + totalOffset - 0,
          pin: heading,
          pinSpacing: false,
        });
      });

      chapterReferenceRefs.forEach((title, i) => {
        let heading = chapterReferenceRefs[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: chapterTrigger.current,
          start: () => "top " + (offsets[i] + 70),
          end: () => "bottom " + totalOffset - 0,
          pin: heading,
          pinSpacing: false,
        });
      });
    }

    // PIN INTRODUCTION CHAPTER
    pinningChapters(
      [introduction1.current, introduction2.current, introduction3.current],
      [introReference1.current, introReference2.current],
      introTrigger
    );

    // PIN BIBBY EMPIRE CHAPTER
    pinningChapters(
      [bibbyEmpire1.current, bibbyEmpire2.current],
      [bibbyEmpireReference1.current, bibbyEmpireReference2.current],
      bibbyEmpireTrigger
    );

    // PIN LANGHAM INDUSTRIES CHAPTER 1
    pinningChapters(
      [langhamIndustries1.current, langhamIndustries2.current],
      [
        langhamIndustriesReference1.current,
        langhamIndustriesReference2.current,
      ],
      langhamIndustriesTrigger
    );

    // PIN LANGHAM INDUSTRIES CHAPTER 2
    pinningChapters(
      [langhamIndustries3.current],
      [langhamIndustriesReference3.current],
      langhamIndustriesTrigger2
    );

    // PIN THE HOLD REPEATS CHAPTER
    pinningChapters(
      [holdRepeats1.current],
      [holdRepeatsReference1.current],
      holdRepeatsTrigger
    );
  });

  return (
    <div>
      {/* INTRO CHAPTER */}
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.155)" }}>
        <ChapterCopy ref={introTrigger}>
          <PinnedChapter ref={introduction1}>
            <ChapterTitle>INTRODUCTION</ChapterTitle>
            <br />
            Built in 1976, Bibby Stockholm’s original use was to house
            construction workers employed in offshore gas and wind, but in 2005
            the Netherlands deployed it as an immigration detention site. The
            barge was taken out of service after a Dutch investigation into the
            conditions of the vessel detailed instances of assault and abuse
            taking place on board, with one death due to a healthcare response
            failure. And yet, Bibby Stockholm again became a detention prison,
            this time, in the UK.
          </PinnedChapter>
          <PinnedChapter ref={introduction2}>
            With no engine, the barge was towed from Genoa to Falmouth, where it
            was refitted to increase its capacity from 223 to 500 people,
            arriving in Portland in July 2023. This operation plays an intrinsic
            role in the political rhetoric to ‘stop the boats’; an
            anti-immigration soundbite recycled from former Australian PM Scott
            Morrison, which contributed to him winning the election in 2018.
            Official statements surrounding the necessity of Bibby Stockholm
            addressed the high costs of providing hotels for asylum seekers
            (estimated at £6 million daily) and a desire for a sustainable and
            cost-effective solution.
          </PinnedChapter>
          <PinnedChapter ref={introduction3}>
            This strategy of "offshore detention" (albeit moored to the land)
            was presented alongside the Illegal Migration Act, which is to
            “prevent and deter unlawful migration” as a means to cease small
            boat crossings. The legislation aims to detain and remove anyone
            crossing into the UK via illegal routes as well as blocking those
            returning. However, the barge is doing little to mitigate the
            backlog of thousands of people awaiting decisions on their asylum
            applications, with figures doubling between 2020 to 2022. At
            capacity, the barge would only address 0.3% of this backlog.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={introReference1}>
            <br />
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
          <PinnedReference ref={introReference2}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      {/* BIBBY EMPIRE CHAPTER */}
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.34)" }}>
        <ChapterCopy ref={bibbyEmpireTrigger}>
          <PinnedChapter ref={bibbyEmpire1}>
            <ChapterTitle>BIBBY EMPIRE</ChapterTitle>
            <br />
            The vessel’s parent company, Bibby Line, was founded by John Bibby
            in 1807 in Liverpool, a city which was fundamental to the
            transatlantic slave trade, where 1.5 million captured Africans were
            taken from ships which departed from the port. The earliest records
            of Bibby Line show vessels travelling between Europe and South
            America with cargo that would have been produced on plantations
            using the labour of enslaved Africans and slave based economies. An
            example of this is noted in their collection, which logs the Mary
            Bibby's voyage in 1825-1826 carrying a cargo of sugar from Rio de
            Janeiro, Brazil to Rotterdam, the biggest port in Europe.
          </PinnedChapter>
          <PinnedChapter ref={bibbyEmpire2}>
            Looking deeper into this time period reveals John Bibby’s
            involvement in the transatlantic slave trade. Between 1805 and 1806,
            just before founding Bibby Line, John Bibby co-owned three slave
            ships, the Harmonie, the Eagle and the Sally, that carried 737
            forcefully displaced Africans. The voyages carried slaves from West
            Central Africa to Georgetown in Guyana, Bassa to Barbados and
            Cameroon to Kingston, Jamaica. The development of port
            infrastructure and maritime law was shaped by the logistics of the
            slave trade. Bibby Line exemplifies the complicity of maritime
            industries in colonial legacies.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={bibbyEmpireReference1}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
          <PinnedReference ref={bibbyEmpireReference2}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      {/* LANGHAM INDUSTRIES CHAPTER */}
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.51)" }}>
        <ChapterCopy ref={langhamIndustriesTrigger}>
          <PinnedChapter ref={langhamIndustries1}>
            <br />
            Founded by John Langham in 1980, Langham Industries is a
            Dorset-based engineering company working in defence and marine
            sectors–and the owner of Portland Port. Langham Industries acquired
            Portland Harbour from the Royal Navy in 1996, making HMP Weare one
            of the first contracts officiated by the company. Four other ports
            were approached by the Home Office as potential sites for the
            institution of Bibby Stockholm as a detention centre, all of which
            declined. As the port is privately owned, Langham Industries’
            acceptance to the Home Office’s offer was crucial in securing the
            implementation of the barge as a carceral site. The economic and
            political motives in hosting Bibby Stockholm are necessary to
            understand what is at stake, and who stands to gain profit.
          </PinnedChapter>
          <PinnedChapter ref={langhamIndustries2}>
            Bibby Stockholm is berthed below the mean low water mark, meaning
            that the privately owned Portland Harbour was not legally required
            to consult the council for building permission. This strategic
            placement of the barge allowed them to manoeuvre into a legal
            grey-zone, benefitting from laxed rules regarding conditions on the
            barge. The “legal ambiguity” mentioned is used to determine the
            austerity of the hold and the deliberate realisation of a space of
            suspension, endemic to the UK’s treatment of asylum seekers.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={langhamIndustriesReference1}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
          <PinnedReference ref={langhamIndustriesReference2}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.56)" }}>
        <ChapterCopy ref={langhamIndustriesTrigger2}>
          <PinnedChapter ref={langhamIndustries3}>
            From 2003 until the Brexit Referendum in 2016, Langham Industries
            donated just over £73,000 to the UK Independence Party. In 2014, the
            company donated £2000 to support the re-election of UKIP MP Douglas
            Carswell, having left the Conservative party to join UKIP. Carswell
            was a staunch advocate for Brexit, having founded the Vote Leave
            campaign organisation. Catherine Langham, a shareholder and director
            of Langham Family Holdings and self-described Director of Langham
            Industries, is a Conservative parish councillor for Hilton in
            Dorset. In 2016, she was an active member in local campaigns to
            leave the European Union. Brexit is an essential political move for
            Langham Industries. The alignment on aggressive anti-immigration
            politics that fuelled Brexit campaigns and the economic bolstering
            of the UK Independence Party, speaks to Langham Industries’
            co-alliance with the Home Office’s decision to detain migrants on
            Bibby Stockholm. With Langham Industries making £2.5 million from
            its 18-month contract, the profit anticipated by Bibby Stockholm
            will only incentivise private ports to invest in the use of
            detainment vessels. The immense profit gained by Langham Industries
            reveals a network of economic relations directly related to the
            funding of right-wing political parties that have a reliance on the
            institution of Bibby Stockholm as a detention prison for populous
            votes.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={langhamIndustriesReference3}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.7)" }}>
        <ChapterCopy ref={holdRepeatsTrigger}>
          <PinnedChapter ref={holdRepeats1}>
            <ChapterTitle>THE HOLD REPEATS</ChapterTitle>
            <br />
            Bibby Stockholm is not the first time a detainment vessel has been
            used in Portland. In June 1997, the prison ship HM Weare, was moved
            to Portland as a solution to the overcrowding of HMP the Verne.
            Lasting until 2005, it is the UK’s most recent use of a prison ship.
            Similarly to Bibby Stockholm, the ship was built to house offshore
            workers in gas and oil. In 1982, it was then acquired by Bibby Line
            who renamed the vessel Bibby Resolution, which was then bought by
            the New York City Department of Correction in 1988 to function as a
            prison ship. After a report was conducted in 2004 of HM Weare which
            detailed the “unacceptably cramp and claustrophobic” conditions
            onboard, where prisoners had no access to fresh air, the prison was
            closed in 2005, eventually leaving Portland in December 2009. It was
            also mentioned that operational costs were too expensive, despite
            providing minimal standards for those detained onboard. The parallel
            histories between Bibby Resolution and Bibby Stockholm highlight how
            HM Weare acts as a precursor to Bibby Stockholm, and the pattern of
            incarceration that Portland is steeped in. The resemblance of
            histories between HMP Weare and Bibby Stockholm is further
            emphasised by the fact that Bibby Stockholm is docked at the Royal
            Navy dockyard, in the exact position where HMP Weare was moored. The
            same corporate actors reappear in HMP Weare’s history, Langham
            Industries and Bibby Line, who are largely responsible for the
            utilisation of Bibby Stockholm as a detention prison. The profit
            gained from the supplying of the port and vessel infrastructure,
            points towards the collusion between maritime companies involved in
            ship repair, engineering services, vessel logistics and shipping
            operations with the state, to not only enable maritime
            incarceration, but gain a vast profit from the subjugation and
            indefinite detainment of people.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={holdRepeatsReference1}>
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
    </div>
  );
}
