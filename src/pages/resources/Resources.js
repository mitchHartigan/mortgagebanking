import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import LibraryCard from "./_LibraryCard";
import SeachCard from "./_SearchCard";
import CalculatorCard from "./_CalculatorCard";
import Navbar from "components/navbar";

export default function Resources() {
  return (
    <Container>
      <Title
        align="center"
        alignTitle="center"
        size="xxl"
        styles="margin-top: 15vh"
      >
        Resources
      </Title>
      <CardContainer>
        <SeachCard />
        <LibraryCard />
        <CalculatorCard />
      </CardContainer>
      <Navbar alwaysDisplay />
    </Container>
  );
}

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
  margin-top: 8vh;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: auto;
    justify-content: space-between;
  }
`;
