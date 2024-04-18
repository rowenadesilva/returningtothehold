import React, { useRef } from "react";
import styled from "styled-components";
import ImageLine from "../components/ImageLine";
import Title from "../components/Title";
import Hold from "../components/Hold";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function CheckFocus(id) {
  console.log(id);
  if (id.id === 0) {
    return <Title />;
  }
}

const ListElement = ({ focus, id }) => {
  const ListElementRef = useRef();

  return (
    <Wrapper ref={ListElementRef}>
      <CheckFocus id={id} />
      <ImageLine />
    </Wrapper>
  );
};

export default ListElement;
