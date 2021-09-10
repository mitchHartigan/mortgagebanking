import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export function Chevron(props) {
  const { firstLoad } = props;

  return (
    <Container firstLoad={firstLoad}>
      <Link
        to="chevronScrollTarget"
        spy={true}
        offset={-60}
        delay={0}
        duration={1300}
        smooth={true}
        style={{ margin: "0px", padding: "0px" }}
      >
        <Image src="chevron.png" alt="Chevron icon." />
      </Link>
    </Container>
  );
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

const Container = styled.div`
  position: absolute;
  opacity: ${(props) => (props.firstLoad ? "0" : "1")};
  bottom: 30px;
  z-index: 1;
  transform: translate(${(props) => (props.firstLoad ? "0, 20px" : "0, 0")});
  animation: ${(props) => (props.firstLoad ? fadeIn : "")};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1700ms;
  cursor: pointer;

  &: hover {
    transform: translate(0, -2px);
  }
  transition: transform 100ms linear;
`;

const Image = styled.img``;
