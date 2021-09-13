import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import { CenterBlock } from "components/CenterBlock";
import { GoldBulletPoint } from "pages/practice-areas/_GoldBulletPoint";
import { ContactPrefillButton } from "./ContactPrefillButton";

export function ComplianceCard() {
  return (
    <Container>
      <Image src="compliance_graphic.png" alt="A screwdriver and wrench." />
      <Title size="xl" align="center" styles="margin: 20px 0px 10px 0px;">
        Compliance Workshops
      </Title>
      <Subtext size="xs" styles={SubtextStylesOverride}>
        Engage in an online interactive Compliance Workshop. Practical
        operational topics that present and assess compliance issues clients
        face every day.
      </Subtext>

      <CenterBlock>
        <BulletContainer>
          <GoldBulletPoint>Take home work aids</GoldBulletPoint>
          <GoldBulletPoint>Scenario based approach</GoldBulletPoint>
          <GoldBulletPoint>
            Peer interaction expands perspective
          </GoldBulletPoint>
          <GoldBulletPoint>
            Suggest a topic for a future workshop
          </GoldBulletPoint>
        </BulletContainer>
      </CenterBlock>

      <ContactPrefillButton interestArea={"Compliance Workshops"}>
        Get Involved in a Workshop
      </ContactPrefillButton>
    </Container>
  );
}

const SubtextStylesOverride = `
  text-align: justify;
  width: 90%;
  
  @media (max-width: 900px) {
    width: 100%;
    line-height: 26px;
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  padding: 30px 10% 30px 10%;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
  margin: 30px 0px 5vh 0px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 0px 30px -20px;
`;

const Image = styled.img``;
