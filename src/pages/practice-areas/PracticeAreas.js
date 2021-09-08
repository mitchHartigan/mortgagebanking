import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import Navbar from "components/navbar/index";
import RepresentativeEngagements from "./_RepresentativeEngagements";

export default function PracticeAreas() {
  return (
    <Container>
      <ContentContainer>
        <Title size="xl" aligmnent="center">
          Our Practice Areas
        </Title>
        <TextContainer>
          <Subtext size="xs">
            Shirk Law has experience representing mortgage bankers, mortgage
            brokers, banks, credit unions, and a variety of service providers
            including: loan origination software companies, service provider
            networks, lead providers, real estate companies, finance companies
            and more. We have represented top ten banks and sole proprietors.
          </Subtext>
          <Subtext size="xs" styles="margin-top: 10px">
            Clients appreciate an outside counsel perspective, but also value
            the experience of a former mortgage company CEO and the functional
            architect of loan origination systems of three top ten mortgage
            lenders.
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
  width: 45%;
  margin-top: 10vh;
`;
