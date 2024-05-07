import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  font-size: 2rem;
  font-family: LucidBook;
  color: white;
`;
const Title = styled.div`
  font-feature-settings: "ss01" 1;
  color: #2f63be;
`;

export default function Mobile() {
  return (
    <div>
      <Container>
        At the moment, <Title>Retuning to the Hold</Title> is only available on
        desktop devices.
      </Container>
    </div>
  );
}
