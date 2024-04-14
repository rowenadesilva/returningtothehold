import react from "react";
import styled from "styled-components";

const Inst = styled.div`
  font-size: 1.5em;
  text-align: left;
  margin: 20vw;
  width: 60vw;
  word-spacing: 1000px;
  border: 1px solid yellow;
`;

const Tab = styled.span`
  margin-left: 2em;
`;

const Instructions = () => {
  return (
    <Inst>
      <p>
        The
        <br />
        <Tab />
        line
        <br />
        <Tab />
        <Tab />
        from
        <br />
        <Tab />
        <Tab />
        <Tab />
        Bibby
        <br />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        Stockholm
      </p>
      <p style={{ marginLeft: "10em" }}>
        to <br />
        <Tab />
        the
        <br />
        <Tab />
        <Tab />
        transatlantic
        <br /> <Tab />
        <Tab />
        <Tab />
        slave
        <br /> <Tab />
        <Tab />
        <Tab />
        <Tab />
        trade
      </p>
      <p style={{ marginLeft: "20em" }}>
        is
        <br /> <Tab />
        a<br /> <Tab />
        <Tab />
        direct
        <br /> <Tab />
        <Tab />
        <Tab />
        one
      </p>
      <p style={{ marginLeft: "30em" }}>
        and
        <br /> <Tab />
        its
        <br /> <Tab />
        <Tab />
        history
        <br /> <Tab />
        <Tab />
        <Tab />
        is
        <br /> <Tab />
        <Tab />
        <Tab />
        <Tab />
        full
        <br /> <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        of
        <br /> <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        reverberations
      </p>
    </Inst>
  );
};

export default Instructions;
