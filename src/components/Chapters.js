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
  mix-blend-mode: difference;
  font-family: Times New Roman, serif;

  --pin-margin: 20;
  --end-offset: 80;
  @media (max-height: 900px) {
    width: 70vw;
    margin-left: 10vw;
  }

  @media (max-width: 480px) {
    display: none;
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
    font-size: 1em;
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
    margin-top: 200px;
  }

  > *:first-child {
    margin-top: 400px;
  }
`;

const PinnedReference = styled.div`
  font-size: 1em;

  @media (max-width: 1000px) {
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`;
const RefNumberCopy = styled.sup`
  color: #2f63be;
`;

const RefNumber = styled.span`
  color: #2f63be;
`;

const Link = styled.a`
  color: #2f63be;
`;

const Spotlight = styled.div`
  font-size: 2em;
  text-align: left;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
`;

const QuoteRef = styled.div`
  font-size: 0.5em;
  text-align: left;
  width: 100%;
`;

export default function Chapters() {
  const wrapperRef = useRef();

  const introTrigger = useRef();
  const introduction1 = useRef();
  const introduction2 = useRef();
  const introduction3 = useRef();

  const bibbyEmpireTrigger = useRef();
  const bibbyEmpire1 = useRef();
  const bibbyEmpire2 = useRef();
  const bibbyEmpireReference1 = useRef();
  const bibbyEmpireReference2 = useRef();
  const bibbyEmpireReference3 = useRef();

  const langhamIndustriesTrigger = useRef();
  const langhamIndustries1 = useRef();
  const langhamIndustries2 = useRef();
  const langhamIndustriesReference1 = useRef();
  const langhamIndustriesReference2 = useRef();
  const langhamIndustries3 = useRef();
  const langhamIndustries4 = useRef();
  const langhamIndustriesTrigger2 = useRef();
  const langhamIndustriesReference3 = useRef();
  const langhamIndustriesReference4 = useRef();
  const langhamIndustriesReference5 = useRef();
  const langhamIndustriesReference6 = useRef();
  const langhamIndustriesReference7 = useRef();

  const holdRepeatsTrigger = useRef();
  const holdRepeats1 = useRef();
  const holdRepeatsReference1 = useRef();

  const architectureTrigger = useRef();
  const architecture1 = useRef();
  const architecture2 = useRef();
  const architecture3 = useRef();
  const architectureReference1 = useRef();
  const architectureReference2 = useRef();
  const architectureReference3 = useRef();

  // all GSAP text animations
  useGSAP(() => {
    function pinningChapters(
      chapterRefs,
      chapterReferenceRefs,
      chapterTrigger
    ) {
      let offsets; // an Array with each title's offset
      let totalOffset; // adds up all the heights of the titles
      let referenceOffsets;
      let totalReferenceOffset;

      // to make it responsive, we put the calculations into a function that we call on window resize (and initially)
      function calculateOffsets() {
        totalOffset = 0;
        console.log(pinMargin);
        offsets = chapterRefs.map((title) => {
          let prev = totalOffset;
          totalOffset += title.offsetHeight + pinMargin;
          return prev;
        });
      }

      function calculateReferenceOffsets() {
        totalReferenceOffset = 0;
        console.log(pinMargin);
        referenceOffsets = chapterReferenceRefs.map((title) => {
          let prev = totalReferenceOffset;
          totalReferenceOffset += title.offsetHeight + pinMargin;
          return prev;
        });
      }
      const pinMargin = parseFloat(
        window
          .getComputedStyle(wrapperRef.current)
          .getPropertyValue("--pin-margin")
      );
      var endOffset = parseFloat(
        window
          .getComputedStyle(wrapperRef.current)
          .getPropertyValue("--end-offset")
      );
      var startOffset = endOffset;
      if (chapterRefs.length < 2) {
        endOffset = endOffset * 4;
      } else {
      }

      calculateOffsets();
      calculateReferenceOffsets();
      window.addEventListener("resize", calculateOffsets);
      window.addEventListener("resize", calculateReferenceOffsets);

      chapterRefs.forEach((title, i) => {
        let heading = chapterRefs[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: chapterTrigger.current,
          start: () => "top " + (offsets[i] + startOffset),
          end: () => "bottom " + (totalOffset - endOffset),
          pin: heading,
          pinSpacing: false,
          anticipatePin: 0.5,
          // markers: true,
        });
      });

      chapterReferenceRefs.forEach((title, i) => {
        let heading = chapterReferenceRefs[i];
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: chapterTrigger.current,
          start: () => "top " + (referenceOffsets[i] + startOffset),
          end: () => "bottom " + (totalOffset - endOffset),
          pin: heading,
          pinSpacing: false,
          anticipatePin: 0.5,
        });
      });
    }

    // PIN INTRODUCTION CHAPTER
    pinningChapters(
      [introduction1.current, introduction2.current, introduction3.current],
      [],
      introTrigger
    );

    // PIN BIBBY EMPIRE CHAPTER
    pinningChapters(
      [bibbyEmpire1.current, bibbyEmpire2.current],
      [
        bibbyEmpireReference1.current,
        bibbyEmpireReference2.current,
        bibbyEmpireReference3.current,
      ],
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
      [langhamIndustries3.current, langhamIndustries4.current],
      [
        langhamIndustriesReference3.current,
        langhamIndustriesReference4.current,
        langhamIndustriesReference5.current,
        langhamIndustriesReference6.current,
        langhamIndustriesReference7.current,
      ],
      langhamIndustriesTrigger2
    );

    // PIN THE HOLD REPEATS CHAPTER
    pinningChapters(
      [holdRepeats1.current],
      [holdRepeatsReference1.current],
      holdRepeatsTrigger
    );

    // PIN ARCHITECTURE CHAPTER
    pinningChapters(
      [architecture1.current, architecture2.current, architecture3.current],
      [
        architectureReference1.current,
        architectureReference2.current,
        architectureReference3.current,
      ],
      architectureTrigger
    );
  });

  return (
    <div>
      {/* INTRO CHAPTER */}
      <ChapterWrapper
        style={{ top: "calc(var(--height) * 0.155)" }}
        ref={wrapperRef}
      >
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
            taken from ships which departed from the port.
            <RefNumberCopy>3</RefNumberCopy> The earliest records of Bibby Line
            show vessels travelling between Europe and South America with cargo
            that would have been produced on plantations using the labour of
            enslaved Africans and slave based economies. An example of this is
            noted in their collection, which logs the Mary Bibby's voyage in
            1825-1826 carrying a cargo of sugar from Rio de Janeiro, Brazil to
            Rotterdam, the biggest port in Europe.{" "}
            <RefNumberCopy>4</RefNumberCopy>
          </PinnedChapter>
          <PinnedChapter ref={bibbyEmpire2}>
            Looking deeper into this time period reveals John Bibby’s
            involvement in the transatlantic slave trade. Between 1805 and 1806,
            just before founding Bibby Line, John Bibby co-owned three slave
            ships, the Harmonie, the Eagle and the Sally, that carried 737
            forcefully displaced Africans.<RefNumberCopy>5</RefNumberCopy> The
            voyages carried slaves from West Central Africa to Georgetown in
            Guyana, Bassa to Barbados and Cameroon to Kingston, Jamaica. The
            development of port infrastructure and maritime law was shaped by
            the logistics of the slave trade. Bibby Line exemplifies the
            complicity of maritime industries in colonial legacies.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={bibbyEmpireReference1}>
            <RefNumber>3</RefNumber>
            <br />
            “Liverpool and the transatlantic slave trade,” Archives Centre,
            Maritime Museum, National Museums of Liverpool
          </PinnedReference>
          <PinnedReference ref={bibbyEmpireReference2}>
            <RefNumber>4</RefNumber>
            <br />
            “Bibby Line, Shipowners” Maritime Museum, <br />
            <Link
              href="https://www.liverpoolmuseums.org.uk/artifact/bibby-line-shipowners"
              target="_blank"
            >
              National Museums of Liverpool
            </Link>
          </PinnedReference>
          <PinnedReference ref={bibbyEmpireReference3}>
            <RefNumber>5</RefNumber>
            <br />
            <Link
              href="https://www.slavevoyages.org/voyage/database"
              target="_blank"
            >
              "Trans-atlantic Slave Database,” Slave Voyages <br />
            </Link>
            accessed 03 September 2023
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      {/* LANGHAM INDUSTRIES CHAPTER */}
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.51)" }}>
        <ChapterCopy ref={langhamIndustriesTrigger}>
          <PinnedChapter ref={langhamIndustries1}>
            <ChapterTitle>LANGHAM INDUSTRIES</ChapterTitle>
            <br />
            Founded by John Langham in 1980, Langham Industries is a
            Dorset-based engineering company working in defence and marine
            sectors–and the owner of Portland Port. Langham Industries acquired
            Portland Harbour from the Royal Navy in 1996, making HMP Weare one
            of the first contracts officiated by the company. Four other ports
            were approached by the Home Office as potential sites for the
            institution of Bibby Stockholm as a detention centre, all of which
            declined. <RefNumberCopy>6</RefNumberCopy> As the port is privately
            owned, Langham Industries’ acceptance to the Home Office’s offer was
            crucial in securing the implementation of the barge as a carceral
            site. The economic and political motives in hosting Bibby Stockholm
            are necessary to understand what is at stake, and who stands to gain
            profit.
          </PinnedChapter>
          <PinnedChapter ref={langhamIndustries2}>
            Bibby Stockholm is berthed below the mean low water mark, meaning
            that the privately owned Portland Harbour was not legally required
            to consult the council for building permission.
            <RefNumberCopy>7</RefNumberCopy> This strategic placement of the
            barge allowed them to manoeuvre into a legal grey-zone, benefitting
            from laxed rules regarding conditions on the barge. The “legal
            ambiguity” mentioned is used to determine the austerity of the hold
            and the deliberate realisation of a space of suspension, endemic to
            the UK’s treatment of asylum seekers.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={langhamIndustriesReference1}>
            <RefNumber>6</RefNumber>
            <br />
            Marcus White, “Bibby Stockholm barge: Why is asylum housing plan so
            controversial?” <br />
            <Link
              href="https://www.bbc.co.uk/news/uk-england-dorset-66189989"
              target="_blank"
            >
              BBC News, 17 July 2023
            </Link>
          </PinnedReference>
          <PinnedReference ref={langhamIndustriesReference2}>
            <RefNumber>7</RefNumber>
            <br />
            “Leader’s comments on the Home Office barge” <br />
            <Link
              href="https://moderngov.dorsetcouncil.gov.uk/documents/s10407/Leaders%20comments%20on%20the%20Home%20Office%20barge.pdf"
              target="_blank"
            >
              Dorset Council, 18 July 2023
            </Link>
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.56)" }}>
        <ChapterCopy ref={langhamIndustriesTrigger2}>
          <PinnedChapter ref={langhamIndustries3}>
            From 2003 until the Brexit Referendum in 2016, Langham Industries
            donated just over £73,000 to the UK Independence Party.
            <RefNumberCopy>8</RefNumberCopy> In 2014, the company donated £2000
            to support the re-election of UKIP MP Douglas Carswell, having left
            the Conservative party to join UKIP. Carswell was a staunch advocate
            for Brexit, having founded the Vote Leave campaign organisation.
            <RefNumberCopy>9</RefNumberCopy> Catherine Langham, a shareholder
            and director of Langham Family Holdings and self-described Director
            of Langham Industries, is a Conservative parish councillor for
            Hilton in Dorset.<RefNumberCopy>10</RefNumberCopy> In 2016, she was
            an active member in local campaigns to leave the European Union.
            <RefNumberCopy>11</RefNumberCopy>
          </PinnedChapter>
          <PinnedChapter ref={langhamIndustries4}>
            Brexit is an essential political move for Langham Industries. The
            alignment on aggressive anti-immigration politics that fuelled
            Brexit campaigns and the economic bolstering of the UK Independence
            Party, speaks to Langham Industries’ co-alliance with the Home
            Office’s decision to detain migrants on Bibby Stockholm. With
            Langham Industries making £2.5 million from its 18-month contract,
            the profit anticipated by Bibby Stockholm will only incentivise
            private ports to invest in the use of detainment vessels.
            <RefNumberCopy>12</RefNumberCopy> The immense profit gained by
            Langham Industries reveals a network of economic relations directly
            related to the funding of right-wing political parties that have a
            reliance on the institution of Bibby Stockholm as a detention prison
            for populous votes.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={langhamIndustriesReference3}>
            <RefNumber>8</RefNumber>
            <br />
            “Langham Industries” <br />
            <Link
              href="https://search.electoralcommission.org.uk/?currentPage=2&rows=10&query=%22Langham%20Industries%22&sort=AcceptedDate&order=desc&tab=2&open=filter&et=pp&et=ppm&et=tp&et=perpar&et=rd&isIrishSourceYes=true&isIrishSourceNo=true&date=Reported&from=&to=&quarters=2023q1234&quarters=2022q1234&quarters=2021q1234&quarters=2020q1234&quarters=2019q1234&quarters=2018q1234&quarters=2017q1234&quarters=2016q1234&quarters=2015q1234&quarters=2014q1234&quarters=2013q1234&quarters=2012q1234&quarters=2011q1234&quarters=2010q1234&quarters=2009q1234&quarters=2008q1234&quarters=2007q1234&quarters=2006q1234&quarters=2005q1234&quarters=2004q1234&quarters=2003q1234&quarters=2002q1234&quarters=2001q1234&prePoll=true&postPoll=true&donorStatus=individual&donorStatus=tradeunion&donorStatus=company&donorStatus=unincorporatedassociation&donorStatus=publicfund&donorStatus=other&donorStatus=registeredpoliticalparty&donorStatus=friendlysociety&donorStatus=trust&donorStatus=limitedliabilitypartnership&donorStatus=impermissibledonor&donorStatus=na&donorStatus=unidentifiabledonor&donorStatus=buildingsociety&register=gb&register=ni&register=none&optCols=Register&optCols=CampaigningName&optCols=AccountingUnitsAsCentralParty&optCols=IsSponsorship&optCols=IsIrishSource&optCols=RegulatedDoneeType&optCols=CompanyRegistrationNumber&optCols=Postcode&optCols=NatureOfDonation&optCols=PurposeOfVisit&optCols=DonationAction&optCols=ReportedDate&optCols=IsReportedPrePoll&optCols=ReportingPeriodName&optCols=IsBequest&optCols=IsAggregation"
              target="_blank"
            >
              The Electoral Commission
            </Link>
            , accessed 03 September 2023
          </PinnedReference>
          <PinnedReference ref={langhamIndustriesReference4}>
            <RefNumber>9</RefNumber>
            <br />
            “The Register of Members' Financial Interests: Part 1”
            <br />
            <Link
              href="https://publications.parliament.uk/pa/cm/cmregmem/150223/carswell_douglas.htm"
              target="_blank"
            >
              House of Commons, UK Parliament
            </Link>
            , 2 March 2015
          </PinnedReference>
          <PinnedReference ref={langhamIndustriesReference5}>
            <RefNumber>10</RefNumber>
            <br />
            “Councillor Catherine Langham, Hilton Parish Council - Register of
            Members' Interests”
            <br />
            <Link
              href="https://www.dorsetcouncil.gov.uk/-/councillor-catherine-langham-hilton-parish-council"
              target="_blank"
            >
              Dorset Council
            </Link>
            , 5 July 2023
          </PinnedReference>
          <PinnedReference ref={langhamIndustriesReference6}>
            <RefNumber>11</RefNumber>
            <br />
            “Application Appendix B5 - Councillors”
            <br />
            <Link
              href="https://www.electoralcommission.org.uk/sites/default/files/pdf_file/Vote-Leave-Ltd-designation-application-Appendix-B5.pdf"
              target="_blank"
            >
              Electoral Commission, 43
            </Link>
            , accessed 03 September 2023
          </PinnedReference>
          <PinnedReference ref={langhamIndustriesReference7}>
            <RefNumber>12</RefNumber>
            <br />
            Mike Taylor, “Protest planned as refugees are welcome but not on a
            'prison barge' at Portland Port”
            <br />
            <Link
              href="https://www.dorset.live/news/dorset-news/protest-planned-refugees-welcome-not-8431335"
              target="_blank"
            >
              Dorset Live
            </Link>
            , 11 May 2023
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.7)" }}>
        <ChapterCopy ref={holdRepeatsTrigger}>
          <PinnedChapter ref={holdRepeats1}>
            <ChapterTitle>THE HOLD REPEATS</ChapterTitle>
            <br />
            Bibby Stockholm is not the first time a detainment vessel has been
            used in Portland. <br />
            In June 1997, the prison ship HMP Weare, was moved to Portland as a
            solution to the overcrowding of the largest prison in Portland, HMP
            the Verne. Lasting until 2005, it is the UK’s most recent use of a
            prison ship. <br /> Similarly to Bibby Stockholm, the ship was built
            to house offshore workers in gas and oil. In 1982, it was then
            acquired by Bibby Line who renamed the vessel Bibby Resolution,
            which was then bought by the New York City Department of Correction
            in 1988 to function as a prison ship. <br /> After a report was
            conducted in 2004 of HM Weare which detailed the “unacceptably cramp
            and claustrophobic” conditions onboard, where prisoners had no
            access to fresh air, the prison was closed in 2005, eventually
            leaving Portland in December 2009.<RefNumberCopy>13</RefNumberCopy>
            It was also mentioned that operational costs were too expensive,
            despite providing minimal standards for those detained onboard.
            <br /> The parallel histories between Bibby Resolution and Bibby
            Stockholm highlight how HM Weare acts as a precursor to Bibby
            Stockholm, and the pattern of incarceration that Portland is steeped
            in. The resemblance of histories between HMP Weare and Bibby
            Stockholm is further emphasised by the fact that Bibby Stockholm is
            docked at the Royal Navy dockyard, in the exact position where HMP
            Weare was moored. The same corporate actors reappear in HMP Weare’s
            history, Langham Industries and Bibby Line, who are largely
            responsible for the utilisation of Bibby Stockholm as a detention
            prison. The profit gained from the supplying of the port and vessel
            infrastructure, points towards the collusion between maritime
            companies involved in ship repair, engineering services, vessel
            logistics and shipping operations with the state, to not only enable
            maritime incarceration, but gain a vast profit from the subjugation
            and indefinite detainment of people.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={holdRepeatsReference1}>
            <RefNumber>13</RefNumber>
            <br />
            “HM Prison Weare”
            <br />
            <Link
              href="https://www.portlandhistory.co.uk/hm-prison-weare.html"
              target="_blank"
            >
              The Encyclopedia of Portland History
            </Link>
            , accessed 03 September 2023
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.05)" }}>
        <ChapterCopy>
          <Spotlight>
            “As the only professional voice, firefighters believe the Bibby
            Stockholm to be a potential deathtrap.” <br /><br /><QuoteRef>Ben Selby, Assistant
            General Secretary of the Fire Brigades Union, in a letter to the
            Home Office before asylum seekers were detained</QuoteRef>
          </Spotlight>
        </ChapterCopy>
      </ChapterWrapper>
      <ChapterWrapper style={{ top: "calc(var(--height) * 0.91)" }}>
        <ChapterCopy ref={architectureTrigger}>
          <PinnedChapter ref={architecture1}>
            <ChapterTitle>ARCHITECTURE</ChapterTitle>
            <br />
            The architectural overhaul of Bibby Stockholm optimised its use as a
            carceral zone to hold and detain. Single-use bedrooms were refitted
            with bunk beds, which gained considerable media attention for being
            only “slightly larger in size than a prison cell”.
            <RefNumberCopy>15</RefNumberCopy> The barge features both a gym with
            two working treadmills and an education room with eight seats. The
            lack of communal space speaks to how the design of the barge fails
            to meet the demands of such a high population, illustrating the
            purposeful overcrowding and falsity of its social spaces in
            providing support and fostering community. Corridors are narrow and
            windowless, presenting issues around fire safety and evacuation
            routes. Organisations such as Reclaim the Sea have voiced concerns
            around those seeking asylum as having already experienced sea trauma
            from small boat crossings and have thus questioned the cruel
            decision to detain migrants on a floating vessel, which runs the
            high risk in retraumatising people.<RefNumberCopy>16</RefNumberCopy>
          </PinnedChapter>
          <PinnedChapter ref={architecture2}>
            The detainees live in the proximity of death, with the barge flagged
            in a second report by an NGO as a “floating Grenfell”, drawing vivid
            parallels with the government’s track record of abandonment and
            neglect.<RefNumberCopy>17</RefNumberCopy> This proximity is
            manufactured through the spatial conditions of the hold.
          </PinnedChapter>
          <PinnedChapter ref={architecture3}>
            Within days of being detained on Bibby Stockholm, all 39 asylum
            seekers were evacuated after reports of Legionella being found in
            the water system onboard. Not only the spatial conditions, but also
            the internal architecture work to immobilise those within. We again
            see Glissant’s tautology in the fact that the water containing
            Legionella folds back into itself, reaffirming the hold through its
            poisoned infrastructure. Through the ageing pipes that encircle the
            structure of the barge reach into every corner, the contaminated
            water transcends, even as it describes, the physical limitations of
            the hold. Death permeates all scales, even the molecular. Death is
            prescribed from the conception of the vessel.
          </PinnedChapter>
        </ChapterCopy>
        <ChapterReference>
          <PinnedReference ref={architectureReference1}>
            <RefNumber>15</RefNumber>
            <br />
            Amelia Gentleman, “‘Cabins slightly larger than a prison cell’: Life
            aboard the UK’s barge for asylum seekers”
            <br />
            <Link
              href="https://www.theguardian.com/uk-news/2023/jul/21/life-aboard-bibby-stockholm-asylum-seeker-barge-home-office-tour"
              target="_blank"
            >
              The Guardian
            </Link>
            , 21 July 2023,
          </PinnedReference>
          <PinnedReference ref={architectureReference2}>
            <RefNumber>16</RefNumber>
            <br />
            “An Open Letter to Bibby Marine”
            <br />
            <Link
              href="https://www.refugeecouncil.org.uk/latest/news/an-open-letter-to-bibby-marine/"
              target="_blank"
            >
              Refugee Council
            </Link>
            , 4 July 2023
          </PinnedReference>
          <PinnedReference ref={architectureReference3}>
            <RefNumber>16</RefNumber>
            <br />
            Syal and Taylor, “Bibby Stockholm asylum barge is ‘potential
            deathtrap’, say firefighters”.
          </PinnedReference>
        </ChapterReference>
      </ChapterWrapper>
    </div>
  );
}
