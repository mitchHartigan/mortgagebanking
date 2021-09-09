import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import { CenterBlock } from "components/CenterBlock";
import { GoldBulletPoint } from "pages/practice-areas/_GoldBulletPoint";

export default function ComplianceCard() {
  return (
    <Container>
      <Image src="compliance_graphic.png" alt="A screwdriver and wrench." />
      <Title size="xl" alignment="center">
        Compliance Workshops
      </Title>
      <Subtext size="xs" styles="text-align: justify;">
        Engage in an intensive online interactive Compliance Workshop. Practical
        operational topics that provide in-depth analysis and hands on scenarios
        to present and assess compliance issues clients face every day.
      </Subtext>

      <CenterBlock>
        <BulletContainer>
          <GoldBulletPoint>
            Take home work aids, tools, and checklists
          </GoldBulletPoint>
          <GoldBulletPoint>
            Significant savings over hourly rates
          </GoldBulletPoint>
          <GoldBulletPoint>Valuable feedback and guidance</GoldBulletPoint>
          <GoldBulletPoint>
            Suggest a topic for a future workshop
          </GoldBulletPoint>
        </BulletContainer>
      </CenterBlock>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  padding: 40px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.35);
`;

const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Image = styled.img``;
