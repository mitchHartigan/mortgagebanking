import React from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import { BackButton } from "components/resources/BackButton";
import { Title } from "components/Title";
import Navbar from "components/navbar";
import ResultsContainer from "./ResultsContainer";
import Card from "./Card";

export default function index() {
  return (
    <Container>
      <ScrollToTopOnMount />
      <BackButton location="/resources" text="< Resources" />
      <ContentContainer>
        <Title size="xl" styles={TitleStylesOverride}>
          Acronym Glossary
        </Title>
        <ResultsContainer />
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </ContentContainer>
      <Navbar alwaysDisplay />
    </Container>
  );
}

const CardContainer = styled.div`
  overflow: scroll;
  max-height: 730px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TitleStylesOverride = `
  margin-bottom: 2vh; 

  @media (max-width: 900px) {
     margin-top: 80px;
     text-align: center;
  };
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
