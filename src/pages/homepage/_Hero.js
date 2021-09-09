import React from "react";
import styled, { keyframes } from "styled-components";
import CallToAction from "./_CallToAction";
import { Chevron } from "./_Chevron";

export default function Hero(props) {
  const { firstLoad } = props;

  return (
    <Container>
      <CallToAction firstLoad={firstLoad} />
      <Chevron firstLoad={firstLoad} />
      <Filter firstLoad={firstLoad} />
    </Container>
  );
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

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.firstLoad ? props.theme.colors.darkBlue : "#1E3755"};
  opacity: ${(props) => (props.firstLoad ? "1" : "0.7")};
  animation: ${(props) => (props.firstLoad ? backgroundFade : "")};
  animation-duration: 600ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1900ms;
`;
