import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import LinkButton from "components/LinkButton";
import { CenterBlock } from "components/CenterBlock";
import { Subtext } from "components/Subtext";
import { LinkWrapper } from "components/LinkWrapper";

export default function CalculatorCard() {
  return (
    <Container>
      <LinkWrapper to="/check-digit-calculator">
        <Image src="calculator_icon.png" alt="A book, open and bookmarked." />
      </LinkWrapper>
      <Title
        size="lg"
        align="center"
        alignItems="center"
        styles="margin-bottom: 7px;"
      >
        ULI Check Digit Calculator
      </Title>
      <CenterBlock>
        <Subtext
          size="xs"
          alignment="center"
          styles="margin-bottom: -5px; margin-top: -20px; max-width: 350px; line-height: 28px"
        >
          Generate check digits or validate HMDA Universal Loan Identifiers.
        </Subtext>
      </CenterBlock>
      <CenterBlock>
        <LinkButton to="/check-digit-calculator">Start</LinkButton>
      </CenterBlock>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 50px 30px 50px;
  background-color: white;
  border-radius: 3px;
  height: 380px;
  width: 340px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1800px) {
    height: 350px;
    width: 300px;
  }

  @media (max-width: 1350px) {
    margin-bottom: 5vh;
  }
`;

const Image = styled.img`
  align-self: center;
  margin-top: 10px;
  height: auto;
  width: 115px;

  @media (max-width: 1800px) {
    width: 95px;
  }
`;
