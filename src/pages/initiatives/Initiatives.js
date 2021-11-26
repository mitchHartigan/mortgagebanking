import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import Navbar from "components/navbar/index";
import { ComplianceCard } from "./_ComplianceCard";
import { ConversationsCard } from "./_ConversationsCard";
import { ProjectsCard } from "./_ProjectsCard";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import ReactGA from "react-ga";
import { Footer } from "components/Footer";

export default function Initiatives() {
  ReactGA.pageview("Initiatives");
  return (
    <Container>
      <ScrollToTopOnMount />
      <ContentContainer>
        <Title size="xl" alignment="center">
          Initiatives
        </Title>
        <Subtext size="xs" alignment="center">
          Compliance is a cornerstone in a sustainable business model. These
          initiatives increase awareness and understanding. Workshops and
          conversations cover timely topics recommended by participants.
          Projects involve shared deliverables.
        </Subtext>

        <ComplianceCard />
        <ConversationsCard />
        <ProjectsCard />
      </ContentContainer>
      <Footer />
      <Navbar alwaysDisplay />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-top: 2.5vh;
  }
`;

const Image = styled.img``;
