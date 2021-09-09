import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import LibraryCard from "./_LibraryCard";
import SeachCard from "./_SearchCard";
import CalculatorCard from "./_CalculatorCard";
import Navbar from "components/navbar";
import { Subtext } from "components/Subtext";

export default function Resources() {
  return (
    <Container>
      <Title
        align="center"
        alignTitle="center"
        size="xxl"
        styles={TitleStylesOverride}
      >
        Resources
      </Title>
      <Subtext size="xs" styles={SubtextStylesOverride}>
        We’ve developed a set of tools to improve the compliance management
        workflow, including a ULI check digit calculator, document library, and
        a glossary of commonly used acronyms. We’re dedicated to improving your
        experience.
      </Subtext>

      <CardContainer>
        <SeachCard />
        <LibraryCard />
        <CalculatorCard />
      </CardContainer>
      <Navbar alwaysDisplay />
    </Container>
  );
}

const TitleStylesOverride = `
  margin-top: 17vh;
  @media (max-width: 900px) {
    margin-top: 2vh;
  }
`;

const SubtextStylesOverride = `
  text-align: center;
  width: 50%;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  margin-top: 4vh;

  @media (max-width: 1800px) {
    width: 100%;
  }

  @media (max-width: 1350px) {
    flex-direction: column;
    width: auto;
    justify-content: space-between;
  }
`;
