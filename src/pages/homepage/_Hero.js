import React from "react";
import styled, { keyframes } from "styled-components";
import CallToAction from "./_CallToAction";
import { Chevron } from "./_Chevron";
import { FadeIn } from "components/FadeIn";

export default function Hero() {
  return (
    <Container>
      <CallToAction />
      <Chevron />
      <Filter />
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
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  height: 100%;
  animation: ${backgroundFade} 0.7s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 1900ms;
`;
