import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import LibraryCard from "./_LibraryCard";
import SeachCard from "./_SearchCard";
import CalculatorCard from "./_CalculatorCard";

export default function Resources() {
  return (
    <Container>
      <Title
        align="center"
        alignTitle="center"
        size="xl"
        styles="margin-top: 10vh"
      >
        Resources
      </Title>
      <CardContainer>
        <SeachCard />
        <LibraryCard />
        <CalculatorCard />
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 5vh;
`;
