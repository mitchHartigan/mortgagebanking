import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import Navbar from "components/navbar/index";
import { ContactPrefillButton } from "./ContactPrefillButton";

export default function Initiatives() {
  return (
    <Container>
      <ContentContainer>
        <Title size="xl" alignment="center">
          Our Initiatives
        </Title>
        <Subtext size="xs">
          We make experienced mortgage banking lawyers more accessible through
          workshops, cost sharing conversations, and projects sponsored by
          multiple clients. We are in this together.
        </Subtext>
      </ContentContainer>
      <ContactPrefillButton interestArea={"Compliance Workshops"} />
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
