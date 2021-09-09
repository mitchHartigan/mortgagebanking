import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import { CenterBlock } from "components/CenterBlock";
import { GoldBulletPoint } from "pages/practice-areas/_GoldBulletPoint";
import { ContactPrefillButton } from "./ContactPrefillButton";

export function ProjectsCard() {
  return (
    <Container>
      <Image src="projects_graphic.png" alt="A screwdriver and wrench." />
      <Title size="xl" align="center" styles="margin: 20px 0px 10px 0px;">
        Research Projects
      </Title>
      <Subtext size="xs" styles={SubtextStylesOverride}>
        Cooperative Research Projects make large compliance projects more
        affordable. Clients interested in cooperatively funding projects like
        drafting model procedures, multi-state charts, and disclosure revisions
        may choose to collaborate in defining the project scope as sponsors or
        simply subscribe to receive the deliverables.
      </Subtext>

      <CenterBlock>
        <BulletContainer>
          <GoldBulletPoint>
            Subscribe to existing projects, or submit your own
          </GoldBulletPoint>
          <GoldBulletPoint>
            Significant savings over hourly rates
          </GoldBulletPoint>
          <GoldBulletPoint>Valuable feedback and guidance</GoldBulletPoint>
          <GoldBulletPoint>
            Propose a topic from your to-do list
          </GoldBulletPoint>
        </BulletContainer>
      </CenterBlock>

      <ContactPrefillButton interestArea={"Research Projects"} />
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
  margin: 2vh 0px 5vh 0px;

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
