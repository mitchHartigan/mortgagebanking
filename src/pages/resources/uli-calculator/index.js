import React, { Component } from "react";
import styled from "styled-components";

import { BackButton } from "components/resources/BackButton.js";
import { Subtext } from "components/Subtext";
import { Title } from "components/Title";
import Navbar from "components/navbar";
import { AnchorLink } from "components/AnchorLink";
import Calculator from "./Calculator";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import ReactGA from "react-ga";

export default class ULICalculator extends Component {
  componentDidMount() {
    ReactGA.pageview("ULI Calculator");
  }
  render() {
    return (
      <Container>
        <ScrollToTopOnMount />
        <BackButton location="/resources" text="< Resources" />
        <ContentContainer>
          <Title size="xl" styles={TitleStylesOverride}>
            ULI Check Digit Calculator
          </Title>
          <Subtext styles={SubtextParagraphStyles} size="xs">
            Check digits identify whether any of the characters have been
            changed. An invalid check digit indicates the ULI was either
            mistyped or tampered with. HMDA requires all loans to have a single
            and forever unique ULI beginning with 2018 transactions that will be
            reported in 2019. The ULI can be composed of letters and numbers but
            no special characters. Letters may be upper or lower case.
          </Subtext>

          <Subtext styles={SubtextParagraphStyles} size="xs">
            This tool provides the ability to enter a loan number that is a
            combination of your company's 20 character Legal Entity Identifier
            combined with a Loan Number of up to 23 additional characters. The
            tool generates the 2-digit check digits and appends them to form a
            valid ULI. It also lets you enter up to a 45 character ULI number
            that already has the check digits for validation. For more
            information on obtaining your company's Legal Entity Identifier,
            <AnchorLink to="https://www.ecfr.gov/cgi-bin/text-idx?SID=6927cd88c645a329312ae8e214123576&mc=true&node=pt12.8.1003&rgn=div5#ap12.8.1003_16.c">
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

const TitleStylesOverride = `
  margin-bottom: 2vh; 

  @media (max-width: 900px) {
     margin-top: 80px;
     text-align: center;
  };
`;

const SubtextParagraphStyles = `
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const ContentContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
