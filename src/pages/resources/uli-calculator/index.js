import React, { Component } from "react";
import styled from "styled-components";

import { BackButton } from "components/resources/BackButton.js";
import { Subtext } from "components/Subtext";
import { Title } from "components/Title";
import Navbar from "components/navbar";
import { AnchorLink } from "components/AnchorLink";
import Calculator from "./Calculator";

export default class ULICalculator extends Component {
  render() {
    return (
      <Container>
        <BackButton location="/resources" text="< Resources" />
        <ContentContainer>
          <Title size="xl" styles="margin-bottom: 2vh; margin-top: 2vh;">
            ULI Check Digit Calculator
          </Title>
          <Subtext styles={SubtextParagraphStyles} size="xs">
            Check digits identify whether any of the characters have been
            changed. An invalid check digit indicates the ULI was either
            mistyped or tampered with. HMDA requires all loans to have a single
            and forever unique ULI beginning with 2018 transactions that will be
            reported in 2019. The ULI can be composed of letters and numbers but
            no special characters. Letters may be upper or lower case. For more
            information on the capacity of the ULI to support your production,
            <AnchorLink to="https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/hmda-reporting-requirements/home-mortgage-disclosure-act-faqs/">
              {" "}
              click here.
            </AnchorLink>
          </Subtext>

          <Subtext styles={SubtextParagraphStyles} size="xs">
            This tool provides the ability to enter a loan number that is a
            combination of your company's 20 character Legal Entity Identifier
            combined with a Loan Number of up to 23 additional characters. The
            tool generates the 2-digit check digits and appends them to form a
            valid ULI. It also lets you enter up to a 45 character ULI number
            that already has the check digits for validation. For more
            information on obtaining your company's Legal Entity Identifier,
            <AnchorLink to="https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/hmda-reporting-requirements/home-mortgage-disclosure-act-faqs/">
              {" "}
              click here.
            </AnchorLink>
          </Subtext>

          <Calculator />
        </ContentContainer>
        <Navbar alwaysDisplay />
      </Container>
    );
  }
}

const SubtextParagraphStyles = `
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const ContentContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
