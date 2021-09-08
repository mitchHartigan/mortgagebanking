import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { ExpandableBulletPoint } from "./_ExpandableBulletPoint";
import { GoldBulletPoint } from "./_GoldBulletPoint";
import { BulletPoint } from "./_BulletPoint";

export default function RepresentativeEngagements() {
  return (
    <Container>
      <Title size="xl" alignTitle="start" styles={TitleStyleOverride}>
        Representative Engagements
      </Title>

      <ExpandableBulletPoint title="Representatives Compliance Guidance">
        <GoldBulletPoint>Analysis and Opinions</GoldBulletPoint>
        <GoldBulletPoint>Transaction support desk</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Liscensing">
        <GoldBulletPoint>Requirement Analysis</GoldBulletPoint>
        <GoldBulletPoint>Filing Assistance</GoldBulletPoint>
        <GoldBulletPoint>Renewal Assitance</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Multi-state Charts">
        <GoldBulletPoint>Mortgage lender licensing</GoldBulletPoint>
        <GoldBulletPoint>Mortgage broker licensing</GoldBulletPoint>
        <GoldBulletPoint>Mortgage service licensing</GoldBulletPoint>
        <GoldBulletPoint>Lead generator licensing</GoldBulletPoint>
        <GoldBulletPoint>Call center licensing</GoldBulletPoint>
        <GoldBulletPoint>
          Contract underwriter/processor licensing
        </GoldBulletPoint>
        <GoldBulletPoint>
          Spousal signature requirements (not in title)
        </GoldBulletPoint>
        <GoldBulletPoint>
          Depository institution and subsidiary exemptions
        </GoldBulletPoint>
      </ExpandableBulletPoint>

      <BulletPoint>
        CFPB Civil Investigative Demand and ensuing enforcement action
      </BulletPoint>
    </Container>
  );
}

const TitleStyleOverride = `
  margin: 0px 0px 10px 20px;

  @media (max-width: 800px) {
    margin-left: 0px;
    align-items: flex-start !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: white;
  padding: 2vh 2vw 2vh 2vw;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
  border-radius: 3px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 2vh 20px 2vh 20px;
  }
`;
