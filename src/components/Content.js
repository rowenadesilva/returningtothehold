import React, { useEffect, useRef, useState, useContext } from "react";
import { TrackerContext } from "./TrackerContext";
import styled from "styled-components";
import Verse from "./Verse";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  --height: 38874.2px;
  --width: 900px;

  @media (max-width: 1000px) {
    --height: 30235.5px;
    --width: 700px;
  }

  @media (max-width: 768px) {
    --height: 23756.4px;
    --width: 600px;
  }

  @media (max-width: 480px) {
    --height: 12958.1px;
    --width: 300px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50vh;
  margin-left: calc(((100vw - var(--width)) / 2) * -1);
  left: 2vw;
  text-align: left;
  font-size: 4em;
  color: #2f63be;

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const Hold = styled.a.attrs((props) => ({
  className: props.className,
}))`
  display: block;
  position: absolute;
  font-size: 4em;
  right: 2vw;
  color: #eef3e5;
  top: 50vh;
  margin-right: calc(((100vw - var(--width)) / 2) * -1);
  right: 2vw;
  z-index: 100;
  transform-origin: right;

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }

  &.active {
    position: fixed;
    scale: 0.5 !important;
    top: 0;
    margin: 0;
    &:hover {
      transform: scale(1.5) !important;
      transition-duration: 1s !important;
    }
  }
`;

const Chapter = styled.div`
  position: absolute;
  width: 60vw;
  max-width: 1000px;
  text-align: left;
  padding-right: 30vw;
  padding-left: 10vw;
  margin-left: calc(((100vw - var(--width)) / 2) * -1);
  font-size: 1.3em;
  // border: 1px solid yellow;

  @media (max-width: 1000px) {
    font-size: 1.2em;
    border: 1px solid red;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    border: 1px solid blue;
  }

  @media (max-width: 480px) {
    font-size: 1.4em;
  }
`;

const Trigger = styled.div`
  position: absolute;
  > * {
    margin-top: 800px;
  }

  > *:first-child {
    margin-top: 0px;
  }
`;

const PinnedChapter = styled(Chapter)`
  position: relative;
`;

const Intro = styled(Chapter)`
  font-size: 2em;
  @media (max-width: 1000px) {
    font-size: 1.3em;
  }

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const ChapterTitle = styled.span`
  font-weight: 800;
  color: #2f63be;
`;

const VerseStyle = styled(Verse)`
  position: absolute;
  display: block;
  font-size: 1.2em;
  width: max-content;
  height: max-content;
  padding: 0;
`;

const Highlight = styled.span`
  color: #eef3e5;
  &::before {
    content: "(";
    color: #2f63be;
  }
  &::after {
    content: ")";
    color: #2f63be;
  }
`;

export default function Content() {
  const wrapperRef = useRef();
  const abstract = useRef();
  const hold = useRef();
  const introTrigger = useRef();
  const introduction1 = useRef();
  const introduction2 = useRef();
  const introduction3 = useRef();
  const bibbyTrigger = useRef();
  const bibbyEmpire1 = useRef();
  const bibbyEmpire2 = useRef();
  const langhamTrigger = useRef();
  const langham1 = useRef();
  const langham2 = useRef();
  const langhamTrigger2 = useRef();
  const langham3 = useRef();

  const trackerPos = useContext(TrackerContext);

  // check if hold logo finished start sequence
  const [holdActivated, setHoldActivated] = useState(false);

  // set hold logo y-pos to scroll position
  useEffect(() => {
    if (holdActivated) {
      console.log(hold.current.getBoundingClientRect().top);
      console.log(trackerPos);
      hold.current.style.top = trackerPos + "vh";
    }
  });


  // all GSAP text animations
  useGSAP(
    () => {
      const holdGSAP = gsap.to(hold.current, {
        scrollTrigger: {
          trigger: hold.current,
          start: "top center",
          end: "top top",
          // markers: true,
          scrub: 1,
          onLeave: () => {
            holdGSAP.scrollTrigger.kill();
            hold.current.classList.add("active");
            setHoldActivated(true);
          },
        },
        scale: "0.5",
        ease: "expoScale(0.5,7,none)",
      });

      gsap.to(abstract.current, {
        scrollTrigger: {
          trigger: abstract.current,
          start: "bottom center",
          end: 800 + " center",
          pin: abstract.current,
        },
      });

      // PINING INTRODUCTION
      const allIntroductions = [
        introduction1.current,
        introduction2.current,
        introduction3.current,
      ];
      let introductionOffsets; // an Array with each title's offset
      let introductionTotalOffset; // adds up all the heights of the titles

      // to make it responsive, we put the calculations into a function that we call on window resize (and initially)
      function calculateIntroOffsets() {
        introductionTotalOffset = 0;
        introductionOffsets = allIntroductions.map((title) => {
          let prev = introductionTotalOffset;
          introductionTotalOffset += title.offsetHeight + 50;
          return prev;
        });
      }
      calculateIntroOffsets();
      window.addEventListener("resize", calculateIntroOffsets);

      allIntroductions.forEach((title, i) => {
        let heading = allIntroductions[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: introTrigger.current,
          start: () => "top " + (introductionOffsets[i] + 70),
          end: () => "bottom " + introductionTotalOffset - 0,
          pin: heading,
          pinSpacing: false,
        });
      });

      // PINING BIBBY EMPIRE
      const allBibby = [bibbyEmpire1.current, bibbyEmpire2.current];
      let bibbyOffsets; // an Array with each title's offset
      let bibbyTotalOffset; // adds up all the heights of the titles

      // to make it responsive, we put the calculations into a function that we call on window resize (and initially)
      function calculateBibbyOffsets() {
        bibbyTotalOffset = 0;
        bibbyOffsets = allBibby.map((title) => {
          let prev = bibbyTotalOffset;
          bibbyTotalOffset += title.offsetHeight + 50;
          return prev;
        });
      }
      calculateBibbyOffsets();
      window.addEventListener("resize", calculateBibbyOffsets);

      allBibby.forEach((title, i) => {
        let heading = allBibby[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: bibbyTrigger.current,
          start: () => "top " + (bibbyOffsets[i] + 100),
          end: () => "bottom " + bibbyTotalOffset - 50,
          pin: heading,
          pinSpacing: false,
        });
      });

      // PINING LANGHAM INDUSTRIES
      const allLangham = [langham1.current, langham2.current];
      let langhamOffsets; // an Array with each title's offset
      let langhamTotalOffset; // adds up all the heights of the titles

      // to make it responsive, we put the calculations into a function that we call on window resize (and initially)
      function calculateLanghamOffsets() {
        langhamTotalOffset = 0;
        langhamOffsets = allLangham.map((title) => {
          let prev = langhamTotalOffset;
          langhamTotalOffset += title.offsetHeight + 50;
          return prev;
        });
      }
      calculateLanghamOffsets();
      window.addEventListener("resize", calculateLanghamOffsets);

      allLangham.forEach((title, i) => {
        let heading = allLangham[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: langhamTrigger.current,
          start: () => "top " + (langhamOffsets[i] + 100),
          end: () => "bottom " + langhamTotalOffset - 50,
          pin: heading,
          pinSpacing: false,
        });
      });

      ScrollTrigger.create({
        trigger: langham3.current,
        endTrigger: langhamTrigger2.current,
        start: () => "top " + langham3.current.offsetHeight,
        end: () => "bottom " + langham3.current.offsetHeight - 50,
        pin: langham3.current,
        pinSpacing: false,
      });
    },
    { scope: wrapperRef }
  );

  return (
    <Wrapper ref={wrapperRef}>
      <Title>RETURNING TO THE</Title>
      <Hold ref={hold}>
        <Highlight>HOLD</Highlight>
      </Hold>
      <Intro ref={abstract} style={{ top: "calc(var(--height) * 0.03)" }}>
        Bibby Stockholm is a barge berthed at Portland Harbour on the south
        coast of England, currently detaining 135 asylum seekers. <br /> <br />
        Delving into the history of Bibby Stockholm uncovers the company’s
        legacy in the transatlantic slave trade, connecting contemporary border
        practices to a larger narrative of colonialism and empire.
      </Intro>
      <Intro style={{ top: "calc(var(--height) * 0.06)" }}>
        The line from Bibby Stockholm to the transatlantic slave trade is a
        direct one and its history is full of reverberations
      </Intro>

      {Array(9)
        .fill()
        .map((item, i) => {
          return <VerseStyle key={i} index={i + 1} />;
        })}
      <Trigger ref={introTrigger} style={{ top: "calc(var(--height) * 0.19)" }}>
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
          was refitted to increase its capacity from 223 to 500 people, arriving
          in Portland in July 2023. This operation plays an intrinsic role in
          the political rhetoric to ‘stop the boats’; an anti-immigration
          soundbite recycled from former Australian PM Scott Morrison, which
          contributed to him winning the election in 2018. Official statements
          surrounding the necessity of Bibby Stockholm addressed the high costs
          of providing hotels for asylum seekers (estimated at £6 million daily)
          and a desire for a sustainable and cost-effective solution.
        </PinnedChapter>
        <PinnedChapter ref={introduction3}>
          This strategy of "offshore detention" (albeit moored to the land) was
          presented alongside the Illegal Migration Act, which is to “prevent
          and deter unlawful migration” as a means to cease small boat
          crossings. The legislation aims to detain and remove anyone crossing
          into the UK via illegal routes as well as blocking those returning.
          However, the barge is doing little to mitigate the backlog of
          thousands of people awaiting decisions on their asylum applications,
          with figures doubling between 2020 to 2022. At capacity, the barge
          would only address 0.3% of this backlog.
        </PinnedChapter>
      </Trigger>
      {Array(4)
        .fill()
        .map((item, i) => {
          return <VerseStyle key={i} index={i + 10} />;
        })}
      <Trigger
        ref={bibbyTrigger}
        style={{
          top: "calc(var(--height) * 0.348)",
        }}
      >
        <PinnedChapter ref={bibbyEmpire1}>
          <ChapterTitle>BIBBY EMPIRE</ChapterTitle>
          <br />
          The vessel’s parent company, Bibby Line, was founded by John Bibby in
          1807 in Liverpool, a city which was fundamental to the transatlantic
          slave trade, where 1.5 million captured Africans were taken from ships
          which departed from the port. The earliest records of Bibby Line show
          vessels travelling between Europe and South America with cargo that
          would have been produced on plantations using the labour of enslaved
          Africans and slave based economies. An example of this is noted in
          their collection, which logs the Mary Bibby's voyage in 1825-1826
          carrying a cargo of sugar from Rio de Janeiro, Brazil to Rotterdam,
          the biggest port in Europe.
        </PinnedChapter>
        <PinnedChapter ref={bibbyEmpire2}>
          Looking deeper into this time period reveals John Bibby’s involvement
          in the transatlantic slave trade. Between 1805 and 1806, just before
          founding Bibby Line, John Bibby co-owned three slave ships, the
          Harmonie, the Eagle and the Sally, that carried 737 forcefully
          displaced Africans. The voyages carried slaves from West Central
          Africa to Georgetown in Guyana, Bassa to Barbados and Cameroon to
          Kingston, Jamaica. The development of port infrastructure and maritime
          law was shaped by the logistics of the slave trade. Bibby Line
          exemplifies the complicity of maritime industries in colonial
          legacies.
        </PinnedChapter>
      </Trigger>
      {Array(8)
        .fill()
        .map((item, i) => {
          return <VerseStyle key={i} index={i + 14} />;
        })}
      <Trigger
        ref={langhamTrigger}
        style={{ top: "calc(var(--height) * 0.53)" }}
      >
        <PinnedChapter ref={langham1}>
          <ChapterTitle>LANGHAM INDUSTRIES</ChapterTitle>
          <br />
          Founded by John Langham in 1980, Langham Industries is a Dorset-based
          engineering company working in defence and marine sectors–and the
          owner of Portland Port. Langham Industries acquired Portland Harbour
          from the Royal Navy in 1996, making HMP Weare one of the first
          contracts officiated by the company. Four other ports were approached
          by the Home Office as potential sites for the institution of Bibby
          Stockholm as a detention centre, all of which declined. As the port is
          privately owned, Langham Industries’ acceptance to the Home Office’s
          offer was crucial in securing the implementation of the barge as a
          carceral site. The economic and political motives in hosting Bibby
          Stockholm are necessary to understand what is at stake, and who stands
          to gain profit.
        </PinnedChapter>
        <PinnedChapter ref={langham2}>
          Bibby Stockholm is berthed below the mean low water mark, meaning that
          the privately owned Portland Harbour was not legally required to
          consult the council for building permission. This strategic placement
          of the barge allowed them to manoeuvre into a legal grey-zone,
          benefitting from laxed rules regarding conditions on the barge. The
          “legal ambiguity” mentioned is used to determine the austerity of the
          hold and the deliberate realisation of a space of suspension, endemic
          to the UK’s treatment of asylum seekers.
        </PinnedChapter>
      </Trigger>
      <Trigger
        ref={langhamTrigger2}
        style={{ top: "calc(var(--height) * 0.6)" }}
      >
        <PinnedChapter ref={langham3}>
          From 2003 until the Brexit Referendum in 2016, Langham Industries
          donated just over £73,000 to the UK Independence Party. In 2014, the
          company donated £2000 to support the re-election of UKIP MP Douglas
          Carswell, having left the Conservative party to join UKIP. Carswell
          was a staunch advocate for Brexit, having founded the Vote Leave
          campaign organisation. Catherine Langham, a shareholder and director
          of Langham Family Holdings and self-described Director of Langham
          Industries, is a Conservative parish councillor for Hilton in Dorset.
          In 2016, she was an active member in local campaigns to leave the
          European Union. Brexit is an essential political move for Langham
          Industries. The alignment on aggressive anti-immigration politics that
          fuelled Brexit campaigns and the economic bolstering of the UK
          Independence Party, speaks to Langham Industries’ co-alliance with the
          Home Office’s decision to detain migrants on Bibby Stockholm. With
          Langham Industries making £2.5 million from its 18-month contract, the
          profit anticipated by Bibby Stockholm will only incentivise private
          ports to invest in the use of detainment vessels. The immense profit
          gained by Langham Industries reveals a network of economic relations
          directly related to the funding of right-wing political parties that
          have a reliance on the institution of Bibby Stockholm as a detention
          prison for populous votes.
        </PinnedChapter>
      </Trigger>
    </Wrapper>
  );
}
