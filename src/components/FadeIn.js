import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * @param props
 * @param props.delay - ms to delay the fade animation by.
 * @param props.children - element to fade in.
 */

export const FadeIn = (props) => {
  const { children, delay, play } = props;

  return (
    <FadeWrapper delay={delay} play={play}>
      {children}
    </FadeWrapper>
  );
};

const fadeIn = keyframes`
  from {
    transform: translate(0, 20px);
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const FadeWrapper = styled.div`
  opacity: ${(props) => (props.play ? "0" : "1")};
  animation: ${(props) => (props.play ? fadeIn : "")};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay}ms;
`;
