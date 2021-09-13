import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import Navbar from "components/navbar/index";
import RepresentativeEngagements from "./_RepresentativeEngagements";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";

export default function PracticeAreas() {
  return (
    <Container>
      <ScrollToTopOnMount />
      <ContentContainer>
        <Title size="xl" aligmnent="center">
          Our Practice Areas
        </Title>
        <TextContainer>
          <Subtext size="xs" alignment="center" styles="width: 90%;">
            Law’s practice focuses on mortgage lending, lead providers, and
            fintechs. Within that scope are myriad issues addressed for clients.
          </Subtext>
        </TextContainer>

        <RepresentativeEngagements />
      </ContentContainer>
      <Navbar alwaysDisplay />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vh 0vw 2vh 0vw;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin-top: 10vh;
  margin-bottom: 7vh;

  @media (max-width: 1400px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
    margin-top: 15px;
  }
`;
