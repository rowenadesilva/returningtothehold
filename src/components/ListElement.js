import React, { useRef } from "react";
import styled from "styled-components";
import ImageLine from "../components/ImageLine";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListElement = ({ id }) => {
  const ListElementRef = useRef();

  return (
    <Wrapper ref={ListElementRef}>
      <ImageLine id={id} />
    </Wrapper>
  );
};

export default ListElement;
