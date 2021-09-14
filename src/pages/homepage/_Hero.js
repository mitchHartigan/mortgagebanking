import React from "react";
import styled, { keyframes } from "styled-components";
import CallToAction from "./_CallToAction";
import { Chevron } from "./_Chevron";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImgLoaded: false,
    };
  }

  // Check if the image has been loaded. Setting the src below onload was
  // recommended by stack overflow.
  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({ backgroundImageLoaded: true });
    };
    img.src = "homepage_hero.jpg";
  }

  render() {
    const { firstLoad } = this.props;
    const { backgroundImageLoaded } = this.state;

    return (
      <Container>
        <CallToAction firstLoad={firstLoad} />
        <Chevron firstLoad={firstLoad} />
        <Filter
          firstLoad={firstLoad}
          backgroundImageLoaded={backgroundImageLoaded}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  background-image: url(homepage_hero.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  margin-bottom: 5vh;

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
`;

const backgroundFade = keyframes`
  from  {
    background-color: #1D2A4A;
    opacity: 1;
  }

  to {
    background-color: #1E3755;
    opacity: 0.7;
  }
`;
// Conditionally begins the fade animation if it's the first time the page
// has been loaded, and if the image has been loaded. Freezes on the dark blue
// background if the image fails to load.

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.firstLoad || !props.backgroundImageLoaded
      ? props.theme.colors.darkBlue
      : "#1E3755"};
  opacity: ${(props) =>
    props.firstLoad || !props.backgroundImageLoaded ? "1" : "0.7"};
  animation: ${(props) =>
    props.firstLoad && props.backgroundImageLoaded ? backgroundFade : ""};
  animation-duration: 600ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1900ms;
`;
