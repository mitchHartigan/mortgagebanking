import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "components/navbar/index";
import Summary from "./Summary";
import { ResourcesImage } from "./_ResourcesImage";
import { PracticeAreasImage } from "./_PracticeAreasImage";
import { InitiativesImage } from "./_InitiativesImage";
import AboutUs from "./AboutUs";
import { ContactUs } from "./ContactUs";
import Hero from "./_Hero.js";
import { Footer } from "./Footer";
import { FadeIn } from "components/FadeIn";

const resourcesData = {
  title: "Resources",
  image: <ResourcesImage />,
  descriptionText: `
    Tools and materials for compliance management.
    Glossary of Acronyms that keeps growing to the
    popular ULI Check Digit calculator. 
    Even more tools are in the works... `,
  buttonText: "View Resources",
  linkTarget: "/resources",
};

const practiceAreasData = {
  title: "Practice Areas",
  image: <PracticeAreasImage />,
  descriptionText: `
    At Shirk Law, we have extensive experience
    representing mortgage bankers, brokers, credit unions,
    top ten banks, and more. Our clients appreciate the
    perspective we have as outside counsel, and we regularly
    engage with both state and federal regulators.
  `,
  buttonText: "View Practice Areas",
  linkTarget: "/practice-areas",
};

const initiativesData = {
  title: "Initiatives",
  image: <InitiativesImage />,
  descriptionText: `
    We make mortgage banking law more accessible through
    workshops, cost sharing conversations, and projects sponsored
    by multiple clients. We’re committed to sharing our knowledge,
    creating valuable conversations, and providing educational
    services and materials through these initiatives.
  `,
  buttonText: "View Initiatives",
  linkTarget: "/initiatives",
};

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLoad: true,
    };
  }

  _handleInterestArea = () => {
    try {
      const { interestArea } = this.props.location.state;

      if (interestArea) {
        this.setState({ interestArea: interestArea }, () => {
          document.getElementById("scrollTarget").scrollIntoView();
        });
      }
    } catch {
      console.log("No state in link.");
    }
  };

  _clearLinkStateOnRefresh() {
    window.history.replaceState({}, document.title);
  }

  _preventFadeAnimRecurrence() {
    const firstLoad = sessionStorage.getItem("firstLoad");

    if (firstLoad == null) {
      sessionStorage.setItem("firstLoad", "false");
    } else {
      this.setState({ firstLoad: false });
    }
  }

  componentDidMount() {
    this._handleInterestArea();
    this._clearLinkStateOnRefresh();
    this._preventFadeAnimRecurrence();
  }

  render() {
    const { firstLoad } = this.state;

    return (
      <Container>
        <Hero firstLoad={firstLoad} />
        <Summary id="chevronScrollTarget" data={resourcesData} />
        <Summary data={practiceAreasData} swap />
        <Summary data={initiativesData} />

        <DarkBlueContainer>
          <AboutUs />
          <ContactUs interestArea={this.state.interestArea} />
          <Footer />
        </DarkBlueContainer>
        <Navbar fadeIn={firstLoad} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
  justify-content: center; 
`;

const DarkBlueContainer = styled.div`
  margin-top: 8vh;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;
