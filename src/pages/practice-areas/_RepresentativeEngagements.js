import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { ExpandableBulletPoint } from "./_ExpandableBulletPoint";

export default function RepresentativeEngagements() {
  return (
    <Container>
      <Title size="xl" alignTitle="start">
        Representative Engagements
      </Title>
      <ExpandableBulletPoint title="test bullet point.">
        <p>Ayy lmao</p>
        <p>Ayy lmao</p>
        <p>Ayy lmao</p>
        <p>Ayy lmao</p>
        <p>Ayy lmao</p>
      </ExpandableBulletPoint>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  background-color: white;
`;
