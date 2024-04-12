import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  font-weight: bold;
  text-align: center;
  left: 0;
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

const Date = styled.div`
  position: fixed;
  left: 2vw;
  top: 2vh;
  font-size: 1.5em;
  opacity: 1;
  &.active {
    transition: opacity 0.3s;
    opacity: 0;
  }
`;

const Title = styled.div`
  position: absolute;
  margin-top: 50vh;
  margin-left: 2vw;
  text-align: left;
  font-size: 4em;
  color: #2f63be;
`;

const Hold = styled.div`
  &:hover {
    transform: scale(1.5);
    transition-duration: 1s;
  }
  position: absolute;
  font-size: 4em;
  right: 2vw;
  color: #eef3e5;
  top: 50vh;
  z-index: 100;
  transform-origin: right;
`;

const Abstract = styled.div`
  margin-top: 100vh;
  font-size: 1.5em;
  text-align: center;
  padding: 20vw;
`;

const Instruction = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 20vw;
`;

const ContentDiv = styled.div`
  margin-top: -20vh;
  font-size: 1.5em;
  text-align: left;
  padding: 20vw;
  font-family: "ApfelGrotezk", serif;
`;

const Content = (trackerPos) => {
  const abstract = useRef();
  const instruction = useRef();
  const introduction = useRef();
  const bibbyEmpire = useRef();
  const langhamIndustires1 = useRef();
  const langhamIndustires2 = useRef();
  const theHoldRepeats = useRef();
  const architecture1 = useRef();
  const architecture2 = useRef();
  const onThe12th = useRef();
  const hold = useRef();
  const dateRef = useRef();

  const [scrollPos, setScrollPos] = useState(0);
  const [date, setDate] = useState("0000");

  // check if hold logo finished start sequence
  const [holdActivated, setHoldActivated] = useState(false);

  // set hold logo y-pos to scroll position
  useEffect(() => {
    setScrollPos(trackerPos.trackerPos);
    if (holdActivated) {
      hold.current.style.top = scrollPos + "vh";
    }
  }, [trackerPos.trackerPos]);

  const activateHold = () => {
    hold.current.style.position = "fixed";
    hold.current.style.scale = "0.5";
    setHoldActivated(true);
  };

  const setNewDate = (newDate) => {
    setDate(newDate);
    if (newDate === true || newDate === false) {
      dateRef.current.classList.toggle("active");
    }
  };

  // gsap code here
  useGSAP(() => {
    const holdGSAP = gsap.to(hold.current, {
      scrollTrigger: {
        trigger: hold.current,
        start: "top center",
        end: "top top",
        //pin: hold.current,
       // markers: true,
        scrub: 1,
        onLeave: () => {
          holdGSAP.scrollTrigger.disable();
          activateHold();
        },
      },
      scale: "0.5"
    });

    gsap.to(abstract.current, {
      scrollTrigger: {
        trigger: abstract.current,
        start: "top top",
        end: "800 top",
        pin: abstract.current,
        scrub: true,
        markers: false,
        onEnter: () => {
          setNewDate("2024");
        },
        onLeave: () => {
          setNewDate(false);
        },
      },
    });
    // gsap.to(instruction.current, {
    //   scrollTrigger: {
    //     trigger: instruction.current,
    //     start: "-50 top",
    //     end: "800 top",
    //     pin: instruction.current,
    //     scrub: true,
    //     markers: { startColor: "white", endColor: "white" },
    //   },
    // });

    gsap.to(introduction.current, {
      scrollTrigger: {
        trigger: introduction.current,
        start: "240 top",
        end: "1000 top",
        pin: introduction.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(bibbyEmpire.current, {
      scrollTrigger: {
        trigger: bibbyEmpire.current,
        start: "180 top",
        end: "1000 top",
        pin: bibbyEmpire.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(langhamIndustires1.current, {
      scrollTrigger: {
        trigger: langhamIndustires1.current,
        start: "200 top",
        end: "1000 top",
        pin: langhamIndustires1.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(langhamIndustires2.current, {
      scrollTrigger: {
        trigger: langhamIndustires2.current,
        start: "170 top",
        end: "1000 top",
        pin: langhamIndustires2.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(theHoldRepeats.current, {
      scrollTrigger: {
        trigger: theHoldRepeats.current,
        start: "265 top",
        end: "1000 top",
        pin: theHoldRepeats.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(architecture1.current, {
      scrollTrigger: {
        trigger: architecture1.current,
        start: "140 top",
        end: "1200 top",
        pin: architecture1.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(architecture2.current, {
      scrollTrigger: {
        trigger: architecture2.current,
        start: "140 top",
        end: "1000 top",
        pin: architecture2.current,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(onThe12th.current, {
      scrollTrigger: {
        trigger: onThe12th.current,
        start: "80 top",
        end: "1000 top",
        pin: onThe12th.current,
        scrub: true,
        markers: false,
      },
    });
  });

  return (
    <Wrapper>
      <Date ref={dateRef}>{date}</Date>
      <Title style={{}}>RETURNING TO THE</Title>
      <Hold
        ref={hold}
        style={
          {
            //  top: scrollPos + "vh",
          }
        }
      >
        <Highlight>HOLD</Highlight>
      </Hold>
      <Abstract ref={abstract}>
        Bibby Stockholm is a barge berthed at Portland Harbour on the south
        coast of England, currently detaining 135 asylum seekers. Delving into
        the history of Bibby Stockholm uncovers the company’s legacy in the
        transatlantic slave trade, connecting contemporary border practices to a
        larger narrative of colonialism and empire.
      </Abstract>
      <Instruction ref={instruction} style={{ marginBottom: "100vh" }}>
        The line from Bibby Stockholm to the transatlantic slave trade is a
        direct one and its history is full of reverberations
      </Instruction>
      <ContentDiv ref={introduction}>
        <span style={{ fontWeight: "800", color: "#2f63be" }}>
          INTRODUCTION
        </span>
        <br />
        <br />
        Built in 1976, Bibby Stockholm’s original use was to house construction
        workers employed in offshore gas and wind, but in 2005 the Netherlands
        deployed it as an immigration detention site. The barge was taken out of
        service after a Dutch investigation into the conditions of the vessel
        detailed instances of assault and abuse taking place on board, with one
        death due to a healthcare response failure. And yet, Bibby Stockholm
        again became a detention prison, this time, in the UK. <br />
        <br />
        <br />
        With no engine, the barge was towed from Genoa to Falmouth, where it was
        refitted to increase its capacity from 223 to 500 people, arriving in
        Portland in July 2023. This operation plays an intrinsic role in the
        political rhetoric to ‘stop the boats’; an anti-immigration soundbite
        recycled from former Australian PM Scott Morrison, which contributed to
        him winning the election in 2018. Official statements surrounding the
        necessity of Bibby Stockholm addressed the high costs of providing
        hotels for asylum seekers (estimated at £6 million daily) and a desire
        for a sustainable and cost-effective solution. This strategy of
        "offshore detention" (albeit moored to the land) was presented alongside
        the Illegal Migration Act, which is to “prevent and deter unlawful
        migration” as a means to cease small boat crossings. The legislation
        aims to detain and remove anyone crossing into the UK via illegal routes
        as well as blocking those returning. However, the barge is doing little
        to mitigate the backlog of thousands of people awaiting decisions on
        their asylum applications, with figures doubling between 2020 to 2022.
        At capacity, the barge would only address 0.3% of this backlog.
      </ContentDiv>
      <ContentDiv ref={bibbyEmpire}>
        <span style={{ fontWeight: "800", color: "#2f63be" }}>
          BIBBY EMPIRE
        </span>
        <br />
        <br />
        The vessel’s parent company, Bibby Line, was founded by John Bibby in
        1807 in Liverpool, a city which was fundamental to the transatlantic
        slave trade, where 1.5 million captured Africans were taken from ships
        which departed from the port. The earliest records of Bibby Line show
        vessels travelling between Europe and South America with cargo that
        would have been produced on plantations using the labour of enslaved
        Africans and slave based economies. An example of this is noted in their
        collection, which logs the Mary Bibby's voyage in 1825-1826 carrying a
        cargo of sugar from Rio de Janeiro, Brazil to Rotterdam, the biggest
        port in Europe. <br />
        <br />
        Looking deeper into this time period reveals John Bibby’s involvement in
        the transatlantic slave trade. Between 1805 and 1806, just before
        founding Bibby Line, John Bibby co-owned three slave ships, the
        Harmonie, the Eagle and the Sally, that carried 737 forcefully displaced
        Africans. The voyages carried slaves from West Central Africa to
        Georgetown in Guyana, Bassa to Barbados and Cameroon to Kingston,
        Jamaica. The development of port infrastructure and maritime law was
        shaped by the logistics of the slave trade. Bibby Line exemplifies the
        complicity of maritime industries in colonial legacies.
      </ContentDiv>
      <ContentDiv ref={langhamIndustires1}>
        <span style={{ fontWeight: "800", color: "#2f63be" }}>
          LANGHAM INDUSTRIES
        </span>
        <br />
        <br />
        Founded by John Langham in 1980, Langham Industries is a Dorset-based
        engineering company working in defence and marine sectors–and the owner
        of Portland Port. Langham Industries acquired Portland Harbour from the
        Royal Navy in 1996, making HMP Weare one of the first contracts
        officiated by the company. Four other ports were approached by the Home
        Office as potential sites for the institution of Bibby Stockholm as a
        detention centre, all of which declined. As the port is privately owned,
        Langham Industries’ acceptance to the Home Office’s offer was crucial in
        securing the implementation of the barge as a carceral site. The
        economic and political motives in hosting Bibby Stockholm are necessary
        to understand what is at stake, and who stands to gain profit. <br />
        <br />
        Bibby Stockholm is berthed below the mean low water mark, meaning that
        the privately owned Portland Harbour was not legally required to consult
        the council for building permission. This strategic placement of the
        barge allowed them to manoeuvre into a legal grey-zone, benefitting from
        laxed rules regarding conditions on the barge. The “legal ambiguity”
        mentioned is used to determine the austerity of the hold and the
        deliberate realisation of a space of suspension, endemic to the UK’s
        treatment of asylum seekers. <br />
        <br />
      </ContentDiv>
      <ContentDiv ref={langhamIndustires2} style={{ marginTop: "-60vh" }}>
        From 2003 until the Brexit Referendum in 2016, Langham Industries
        donated just over £73,000 to the UK Independence Party. In 2014, the
        company donated £2000 to support the re-election of UKIP MP Douglas
        Carswell, having left the Conservative party to join UKIP. Carswell was
        a staunch advocate for Brexit, having founded the Vote Leave campaign
        organisation. Catherine Langham, a shareholder and director of Langham
        Family Holdings and self-described Director of Langham Industries, is a
        Conservative parish councillor for Hilton in Dorset. In 2016, she was an
        active member in local campaigns to leave the European Union. Brexit is
        an essential political move for Langham Industries. The alignment on
        aggressive anti-immigration politics that fuelled Brexit campaigns and
        the economic bolstering of the UK Independence Party, speaks to Langham
        Industries’ co-alliance with the Home Office’s decision to detain
        migrants on Bibby Stockholm. With Langham Industries making £2.5 million
        from its 18-month contract, the profit anticipated by Bibby Stockholm
        will only incentivise private ports to invest in the use of detainment
        vessels. The immense profit gained by Langham Industries reveals a
        network of economic relations directly related to the funding of
        right-wing political parties that have a reliance on the institution of
        Bibby Stockholm as a detention prison for populous votes.
      </ContentDiv>
      <ContentDiv ref={theHoldRepeats}>
        {" "}
        <span style={{ fontWeight: "800", color: "#2f63be" }}>
          THE HOLD REPEATS
        </span>
        <br />
        <br />
        Bibby Stockholm is not the first time a detainment vessel has been used
        in Portland. In June 1997, the prison ship HM Weare, was moved to
        Portland as a solution to the overcrowding of HMP the Verne. Lasting
        until 2005, it is the UK’s most recent use of a prison ship. Similarly
        to Bibby Stockholm, the ship was built to house offshore workers in gas
        and oil. In 1982, it was then acquired by Bibby Line who renamed the
        vessel Bibby Resolution, which was then bought by the New York City
        Department of Correction in 1988 to function as a prison ship. After a
        report was conducted in 2004 of HM Weare which detailed the
        “unacceptably cramp and claustrophobic” conditions onboard, where
        prisoners had no access to fresh air, the prison was closed in 2005,
        eventually leaving Portland in December 2009. It was also mentioned that
        operational costs were too expensive, despite providing minimal
        standards for those detained onboard. The parallel histories between
        Bibby Resolution and Bibby Stockholm highlight how HM Weare acts as a
        precursor to Bibby Stockholm, and the pattern of incarceration that
        Portland is steeped in. The resemblance of histories between HMP Weare
        and Bibby Stockholm is further emphasised by the fact that Bibby
        Stockholm is docked at the Royal Navy dockyard, in the exact position
        where HMP Weare was moored. The same corporate actors reappear in HMP
        Weare’s history, Langham Industries and Bibby Line, who are largely
        responsible for the utilisation of Bibby Stockholm as a detention
        prison. The profit gained from the supplying of the port and vessel
        infrastructure, points towards the collusion between maritime companies
        involved in ship repair, engineering services, vessel logistics and
        shipping operations with the state, to not only enable maritime
        incarceration, but gain a vast profit from the subjugation and
        indefinite detainment of people.
      </ContentDiv>
      <ContentDiv ref={architecture1}>
        {" "}
        <span style={{ fontWeight: "800", color: "#2f63be" }}>
          ARCHITECTURE OF THE HOLD
        </span>
        <br />
        <br />
        The architectural overhaul of Bibby Stockholm optimised its use as a
        carceral zone to hold and detain. Single-use bedrooms were refitted with
        bunk beds, which gained considerable media attention for being only
        “slightly larger in size than a prison cell”. The barge features both a
        gym with two working treadmills and an education room with eight seats.
        The lack of communal space speaks to how the design of the barge fails
        to meet the demands of such a high population, illustrating the
        purposeful overcrowding and falsity of its social spaces in providing
        support and fostering community. Corridors are narrow and windowless,
        presenting issues around fire safety and evacuation routes.
        Organisations such as Reclaim the Sea have voiced concerns around those
        seeking asylum as having already experienced sea trauma from small boat
        crossings and have thus questioned the cruel decision to detain migrants
        on a floating vessel, which runs the high risk in retraumatising people.
      </ContentDiv>
      <ContentDiv ref={architecture2} style={{ marginTop: "-60vh" }}>
        The detainees live in the proximity of death, with the barge flagged in
        a second report by an NGO as a “floating Grenfell”, drawing vivid
        parallels with the government’s track record of abandonment and neglect.
        This proximity is manufactured through the spatial conditions of the
        hold. <br /> <br />
        Within days of being detained on Bibby Stockholm, all 39 asylum seekers
        were evacuated after reports of Legionella being found in the water
        system onboard. Not only the spatial conditions, but also the internal
        architecture work to immobilise those within. We again see Glissant’s
        tautology in the fact that the water containing Legionella folds back
        into itself, reaffirming the hold through its poisoned infrastructure.
        Through the ageing pipes that encircle the structure of the barge reach
        into every corner, the contaminated water transcends, even as it
        describes, the physical limitations of the hold. Death permeates all
        scales, even the molecular. Death is prescribed from the conception of
        the vessel.
      </ContentDiv>
      <ContentDiv ref={onThe12th}>
        On the 12th December 2023, Leonard Farruku died by suicide whilst
        detained on Bibby Stockholm. Leonard was found by his roommate Yusuf
        Deen Kargbo, in their shower room, twelve hours later. After Leonard’s
        death, Yusuf was relocated to another room, without his belongings,
        isolated from others, and without any emotional support. <br />
        <br />
        “They're saying Leonard's death is just the beginning.” <br />
        Yusuf Deen Kargbo --
      </ContentDiv>
    </Wrapper>
  );
};

export default Content;
