import React, { useEffect, useRef, useState, useContext } from "react";
import { TrackerContext } from "./TrackerContext";
import styled from "styled-components";
import Verse from "./Verse";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ContentDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  text-align: left;
  padding: 0 10vw;
  height: 100vh;
  border: 1px solid yellow;
`;

const Chapter = styled.div`
  position: absolute;
  font-size: 1.5em;
  text-align: left;
  padding-left: 5vw;
  padding-right: 25vw;
  font-family: "ApfelGrotezk", serif;
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

const Title = styled.div`
  position: absolute;
  top: 50vh;
  left: 2vw;
  text-align: left;
  font-size: 4em;
  color: #2f63be;
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
  z-index: 100;
  transform-origin: right;
  &.active {
    position: fixed;
    scale: 0.5 !important;
    top: 0;
    &:hover {
      transform: scale(1.5) !important;
      transition-duration: 1s !important;
    }
  }
`;

const Abstract = styled(ContentDiv)`
  top: calc(var(--list-element-height) * 0.03);
`;

const Instructions = styled(ContentDiv)`
  top: calc(var(--list-element-height) * 0.06);
`;

const Introduction = styled(Chapter)`
  top: calc(var(--list-element-height) * 0.18);
`;

export default function ImageContent() {
  const abstract = useRef();
  const hold = useRef();
  const introduction1 = useRef();
  const introduction2 = useRef();
  const introduction3 = useRef();

  const trackerPos = useContext(TrackerContext);

  // check if hold logo finished start sequence
  const [holdActivated, setHoldActivated] = useState(false);

  // set hold logo y-pos to scroll position
  useEffect(() => {
    if (holdActivated) {
      hold.current.style.top = trackerPos + "vh";
    }
  }, [trackerPos]);

  // all GSAP text animations
  useGSAP(() => {
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
        start: "top top",
        end: "400 top",
        pin: abstract.current,
        markers: false,
      },
    });

    gsap.to(introduction1.current, {
      scrollTrigger: {
        trigger: introduction1.current,
        start: "-200 top",
        end: "300 top",
        pin: introduction1.current,
        scrub: true,
        markers: true,
      },
    });
    gsap.to(introduction2.current, {
      scrollTrigger: {
        trigger: introduction2.current,
        start: "-200 top",
        end: "300 top",
        pin: introduction2.current,
        scrub: true,
        markers: true,
      },
    });
    gsap.to(introduction3.current, {
      scrollTrigger: {
        trigger: introduction3.current,
        start: "-200 top",
        end: "300 top",
        pin: introduction3.current,
        scrub: true,
        markers: true,
      },
    });
  });

  return (
    <div>
      <Title>RETURNING TO THE</Title>
      <Hold ref={hold}>
        <Highlight>HOLD</Highlight>
      </Hold>
      <Abstract ref={abstract}>
        Bibby Stockholm is a barge berthed at Portland Harbour on the south
        coast of England, currently detaining 135 asylum seekers. <br /> <br />
        Delving into the history of Bibby Stockholm uncovers the company’s
        legacy in the transatlantic slave trade, connecting contemporary border
        practices to a larger narrative of colonialism and empire.
      </Abstract>
      <Instructions>
        The line from Bibby Stockholm to the transatlantic slave trade is a
        direct one and its history is full of reverberations
      </Instructions>

      {Array(9)
        .fill()
        .map((item, i) => {
          console.log(i);
          return <VerseStyle index={i + 1} />;
        })}
      <Chapter
        ref={introduction1}
        style={{ top: "calc(var(--list-element-height) * 0.175)" }}
      >
        <ChapterTitle>INTRODUCTION</ChapterTitle>
        <br />
        Built in 1976, Bibby Stockholm’s original use was to house construction
        workers employed in offshore gas and wind, but in 2005 the Netherlands
        deployed it as an immigration detention site. The barge was taken out of
        service after a Dutch investigation into the conditions of the vessel
        detailed instances of assault and abuse taking place on board, with one
        death due to a healthcare response failure. And yet, Bibby Stockholm
        again became a detention prison, this time, in the UK.
      </Chapter>
      <Chapter
        ref={introduction2}
        style={{ top: "calc(var(--list-element-height) * 0.195)" }}
      >
        With no engine, the barge was towed from Genoa to Falmouth, where it was
        refitted to increase its capacity from 223 to 500 people, arriving in
        Portland in July 2023. This operation plays an intrinsic role in the
        political rhetoric to ‘stop the boats’; an anti-immigration soundbite
        recycled from former Australian PM Scott Morrison, which contributed to
        him winning the election in 2018. Official statements surrounding the
        necessity of Bibby Stockholm addressed the high costs of providing
        hotels for asylum seekers (estimated at £6 million daily) and a desire
        for a sustainable and cost-effective solution.
      </Chapter>
      <Chapter
        ref={introduction3}
        style={{ top: "calc(var(--list-element-height) * 0.215)" }}
      >
        This strategy of "offshore detention" (albeit moored to the land) was
        presented alongside the Illegal Migration Act, which is to “prevent and
        deter unlawful migration” as a means to cease small boat crossings. The
        legislation aims to detain and remove anyone crossing into the UK via
        illegal routes as well as blocking those returning. However, the barge
        is doing little to mitigate the backlog of thousands of people awaiting
        decisions on their asylum applications, with figures doubling between
        2020 to 2022. At capacity, the barge would only address 0.3% of this
        backlog.
      </Chapter>
      {Array(4)
        .fill()
        .map((item, i) => {
          console.log(i);
          return <VerseStyle index={i + 10} />;
        })}
    </div>
  );
}
