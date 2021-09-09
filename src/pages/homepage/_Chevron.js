import React from "react";
import styled, { keyframes } from "styled-components";

export function Chevron() {
  return <Image src="chevron.png" alt="Chevron icon." />;
}

const fadeIn = keyframes`
  from {
    transform: translate(0, 20px);
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const Image = styled.img`
  position: absolute;
  opacity: 0;
  bottom: 30px;
  z-index: 1;
  animation: ${fadeIn} 1s;
  animation-fill-mode: forwards;
  animation-delay: 1700ms;
`;
