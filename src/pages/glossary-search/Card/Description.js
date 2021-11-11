import React from "react";
import styled from "styled-components";

export default function Description() {
  return (
    <Container>
      <Title>Description of Use</Title>
      <Underline />
      <Text>
        The system used to process P&I remittances related to MBS pools that
        have the standard remittance cycle, MBS pools that have the RPM
        remittance cycle (except for those that have a 6th of the month
        remittance date), scheduled P&I remittances related to MBS Express
        pools, MBS guaranty fees and guaranty fee buydown charges for all MBS
        pools, and commitment-related or mortgage-related fees and charges for
        portfolio mortgage loans and MBS mortgage loans.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  font-weight: 600;
  margin: 0px 0px 2px 0px;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  margin: 7px 0px 0px 0px;
  line-height: 25px;
`;

const Underline = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
`;
