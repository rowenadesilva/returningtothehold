import React from "react";
import styled from "styled-components";
import Verses from "./Verses";
import Chapters from "./Chapters";
import ArchiveTable from "./ArchiveTable";
import Timeline from "./Timeline";

const Wrapper = styled.div`
  text-align: center;
`;

export default function Content() {
  return (
    <Wrapper>
      <Chapters />
      <Verses />
      <ArchiveTable />
      <Timeline />
    </Wrapper>
  );
}
