import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { CenterBlock } from "components/CenterBlock";
import { Subtext } from "components/Subtext";

export function Chevron(props) {
  const { firstLoad } = props;

  return (
    <Container>
      <Link
        to="chevronScrollTarget"
        spy={true}
        offset={-60}
        delay={0}
        duration={1300}
        smooth={true}
        style={{ LinkStyleOverride }}
      >
        <CenterContent firstLoad={firstLoad}>
          <Subtext size="xs" styles={LearnMoreTextOverride}>
            Learn More
          </Subtext>

          <Image src="chevron.png" alt="Chevron icon." firstLoad={firstLoad} />
        </CenterContent>
      </Link>
    </Container>
  );
}

const LearnMoreTextOverride = `
  color: #F7F7F2;
  margin-bottom: 10px;
`;

const LinkStyleOverride = {
  margin: "0px",
  padding: "0px",
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

const Container = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 1;
  cursor: pointer;

  &: hover {
    transform: translate(0, -2px);
  }
  transition: transform 100ms linear;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: translate(${(props) => (props.firstLoad ? "0, 20px" : "0, 0")});
  opacity: ${(props) => (props.firstLoad ? "0" : "1")};
  animation: ${(props) => (props.firstLoad ? fadeIn : "")};

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1700ms;
`;

const Image = styled.img``;
