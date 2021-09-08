import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { ExpandableBulletPoint } from "./_ExpandableBulletPoint";
import { GoldBulletPoint } from "./_GoldBulletPoint";

export default function RepresentativeEngagements() {
  return (
    <Container>
      <Title size="xl" alignTitle="start" styles="margin-left: 20px;">
        Representative Engagements
      </Title>
      <ExpandableBulletPoint title="test bullet point.">
        <GoldBulletPoint>Ayy lmao</GoldBulletPoint>
        <GoldBulletPoint>Ayy lmao</GoldBulletPoint>
        <GoldBulletPoint>Ayy lmao</GoldBulletPoint>
        <GoldBulletPoint>Ayy lmao</GoldBulletPoint>
        <GoldBulletPoint>Ayy lmao</GoldBulletPoint>
        <GoldBulletPoint>Ayy lmao</GoldBulletPoint>
      </ExpandableBulletPoint>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  background-color: white;
  padding: 2vh 2vw 2vh 2vw;
`;
