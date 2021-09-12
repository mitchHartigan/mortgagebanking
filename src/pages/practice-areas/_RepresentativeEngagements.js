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

      <ExpandableBulletPoint title="Compliance Guidance">
        <GoldBulletPoint>Analysis and Opinions</GoldBulletPoint>
        <GoldBulletPoint>Compliance Support Desk</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Licensing">
        <GoldBulletPoint>
          License Exemption/Requirements Analysis
        </GoldBulletPoint>
        <GoldBulletPoint>Filing Assistance</GoldBulletPoint>
        <GoldBulletPoint>Renewal Assistance</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Typical Charts">
        <GoldBulletPoint>
          Licensing of Mortgage Lenders/Brokers/Servicers
        </GoldBulletPoint>
        <GoldBulletPoint>Lead Generator Licensing</GoldBulletPoint>
        <GoldBulletPoint>Call Center Licensing</GoldBulletPoint>
        <GoldBulletPoint>
          Contract Underwriter/Processor Licensing
        </GoldBulletPoint>
        <GoldBulletPoint>
          Depository Institution Subsidiary Licensing/Exemption/Registration
        </GoldBulletPoint>
        <GoldBulletPoint>Spousal Signature Requirements</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Marketing">
        <GoldBulletPoint>Advertising Material Reviews</GoldBulletPoint>
        <GoldBulletPoint>Website Compliance Reviews</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Drafting">
        <GoldBulletPoint>
          Loan Originator Compensation Agreements
        </GoldBulletPoint>
        <GoldBulletPoint>
          Correspondent and Wholesale Lending Agreements
        </GoldBulletPoint>
        <GoldBulletPoint>Policies and Procedures</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Negotiating Contracts">
        <GoldBulletPoint>Software License Agreements</GoldBulletPoint>
        <GoldBulletPoint>Subservicer Agreements</GoldBulletPoint>
        <GoldBulletPoint>Office Leases</GoldBulletPoint>
        <GoldBulletPoint>
          Reviewing Contracts for Key Risk/Performance Indicators
        </GoldBulletPoint>
        <GoldBulletPoint>
          Software and Subservicing Agreement Exit Strategies
        </GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Examination Support">
        <GoldBulletPoint>State Examination Support</GoldBulletPoint>
        <GoldBulletPoint>Mock Examinations</GoldBulletPoint>
        <GoldBulletPoint>
          HUD Post Endorsement Technical Reviews
        </GoldBulletPoint>
        <GoldBulletPoint>File Reviews</GoldBulletPoint>
      </ExpandableBulletPoint>

      <ExpandableBulletPoint title="Agency Investigations">
        <GoldBulletPoint>CFPB Civil Investigative Demand</GoldBulletPoint>
        <GoldBulletPoint>
          HUD Notice of Violation/Intent to Seek Civil Monetary Penalty
        </GoldBulletPoint>
      </ExpandableBulletPoint>
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
