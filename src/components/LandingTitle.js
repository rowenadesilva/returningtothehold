import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // position: absolute;
  // width: 100vw;
`;

const Title = styled.div`
  // font-size: 2em;
  // font-weight: bold;
  // // margin-top: 10vh;
  // // margin-bottom: 5vh;
  // width: 70vw;
  // text-align: center;
  // // position: relative;
`;

const Copy = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  width: 70vw;
  margin-bottom: 5vh;
  text-align: center;
`;

class LandingTitle extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>RETURNING TO THE HOLD</Title>
        {/* <Copy>
          <p>
            Bibby Stockholm is a barge berthed at Portland Harbour on the south
            coast of England, where it will detain 500 migrants. The history of
            Bibby Stockholm as a detention site, paired with the company’s
            longer legacy in the transatlantic slave trade, contextualises
            contemporary border practices within a larger narrative of
            colonialism and empire. Indebted to Christina Sharpe and Édouard
            Glissant, this work demonstrates how Bibby Stockholm sits in the
            lineage of the architecture and logic of slave ships, looking
            towards the ocean as an archive of this violence. Through this lens,
            Bibby Stockholm is an object to enter into the border-migration
            nexus and legacies of slavery–both intimately tied to the spatial
            politics of incarceration and border techniques situated
            within maritime space.
          </p>
        </Copy> */}
      </Wrapper>
    );
  }
}

export default LandingTitle;
