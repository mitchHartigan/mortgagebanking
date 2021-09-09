import React from "react";
import styled, { keyframes } from "styled-components";

export function Chevron(props) {
  const { firstLoad } = props;
  return <Image src="chevron.png" alt="Chevron icon." firstLoad={firstLoad} />;
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
  opacity: ${(props) => (props.firstLoad ? "0" : "1")};
  bottom: 30px;
  z-index: 1;
  transform: translate(${(props) => (props.firstLoad ? "0, 20px" : "0, 0")});
  animation: ${(props) => (props.firstLoad ? fadeIn : "")};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1700ms;
`;
