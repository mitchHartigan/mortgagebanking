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
import ReactGA from "react-ga";

const resourcesData = {
  title: "Resources",
  image: <ResourcesImage />,
  descriptionText: `
    Mortgage compliance tools to make the job easier.
    A powerful acronym glossary, the popular ULI check digit
    verification calculator, and redesigned document library
    for even easier access.
  `,
  buttonText: "View Resources",
  linkTarget: "/resources",
};

const practiceAreasData = {
  title: "Practice Areas",
  image: <PracticeAreasImage />,
  descriptionText: `
    Shirk Law has extensive experience representing mortgage
    bankers, brokers, credit unions, large and small banks, fintech’s
    and more. Clients appreciate the broad perspective.
  `,
  buttonText: "View Practice Areas",
  linkTarget: "/practice-areas",
};

const initiativesData = {
  title: "Initiatives",
  image: <InitiativesImage />,
  descriptionText: `
    Cooperative initiatives bring many perspectives to the table and reduce
    the cost for each participant. Workshops and Conversations with peers on 
    current topics is one way Shirk Law brings a non-traditional approach.
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

  _handleScrollToForm = () => {
    try {
      const { scrollToForm } = this.props.location.state;

      if (scrollToForm) {
        document.getElementById("scrollTarget").scrollIntoView();
      }
    } catch {
      console.log("ContactLink not provided in link.");
    }
  };

  _handleInterestArea = () => {
    try {
      const { interestArea } = this.props.location.state;

      if (interestArea) {
        this.setState({ interestArea: interestArea }, () => {
          document.getElementById("scrollTarget").scrollIntoView();
        });
      }
    } catch {
      console.log("interestArea not provided in link.");
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
    this._handleScrollToForm();
    ReactGA.pageview("Homepage");
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
        <Navbar fadeIn={firstLoad} homepage />
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

  @media (max-width: 1200px) {
    margin-top: 40px;
  }
`;
