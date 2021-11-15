import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import LibraryCard from "./_LibraryCard";
import SeachCard from "./_SearchCard";
import CalculatorCard from "./_CalculatorCard";
import Navbar from "components/navbar";
import { Subtext } from "components/Subtext";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import ReactGA from "react-ga";
import GlossarySearch from "../glossary-search/index";

export default class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadGlossary: false,
    };
  }

  toggleGlossary = () => {
    this.setState({ loadGlossary: !this.state.loadGlossary });
  };

  render() {
    ReactGA.pageview("Resources");
    if (!this.state.loadGlossary) {
      return (
        <Container>
          <ScrollToTopOnMount />
          <Title
            align="center"
            alignTitle="center"
            size="xxl"
            styles={TitleStylesOverride}
          >
            Resources
          </Title>
          <Subtext size="xs" styles={SubtextStylesOverride}>
            Tools the firm uses that it decided to share. It’s a new site and a
            few of the tools are being refined, but they’ll be worth the wait.
            Have an idea for a new tool, let us know, we are working on several.
          </Subtext>

          <CardContainer>
            <SeachCard toggleGlossary={this.toggleGlossary} />
            <LibraryCard />
            <CalculatorCard />
          </CardContainer>
          <Navbar alwaysDisplay />
        </Container>
      );
    } else {
      return <GlossarySearch toggleGlossary={this.toggleGlossary} />;
    }
  }
}

const TitleStylesOverride = `
  margin-top: 150px;

  @media (max-width: 1200px) {
    margin-top: 120px;
  }

  @media (max-width: 900px) {
  margin-top: 15px;
  }
`;

const SubtextStylesOverride = `
  text-align: center;
  width: 50%;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  margin-top: 4vh;

  @media (max-width: 1800px) {
    width: 100%;
  }

  @media (max-width: 1350px) {
    flex-direction: column;
    width: auto;
    justify-content: space-between;
  }
`;
