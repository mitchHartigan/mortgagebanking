import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import { CenterBlock } from "components/CenterBlock";
import { GoldBulletPoint } from "./GoldBulletPoint";
import { ContactPrefillButton } from "./ContactPrefillButton";

export function ConversationsCard() {
  return (
    <Container>
      <Image src="conversations_graphic.png" alt="A screwdriver and wrench." />
      <Title size="xl" align="center" styles="margin: 20px 0px 10px 0px;">
        Shared Conversations
      </Title>
      <Subtext size="xs" styles={SubtextStylesOverride}>
        An old fashion telephone call with peers and counsel. Hypothetical
        scenarios proposed by participants. Collaborative communication with
        follow-up from counsel.
      </Subtext>

      <CenterBlock>
        <BulletContainer>
          <GoldBulletPoint>
            Timely talks on the CARES Act, Qualified Mortgages, and Online
            Marketing
          </GoldBulletPoint>
          <GoldBulletPoint>
            Peer interaction expands perspective
          </GoldBulletPoint>
          <GoldBulletPoint>A mini conference on a timely topic</GoldBulletPoint>
          <GoldBulletPoint>
            Suggest a topic for a future conversation
          </GoldBulletPoint>
        </BulletContainer>
      </CenterBlock>

      <ContactPrefillButton interestArea={"Shared Conversations"}>
        Join a Conversation
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
  margin: 2vh 0px 5vh 0px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const BulletContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 0px 30px 30px;
  list-style: none;

  width: 65%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Image = styled.img``;
