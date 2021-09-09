import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Button } from "components/Button";
import { Subtext } from "components/Subtext";
import { FadeIn } from "components/FadeIn";
import { CenterBlock } from "components/CenterBlock";

export default function CallToAction() {
  return (
    <Container>
      <Image src="shirklaw.png" alt="Shirk Law PLLC Logo." />
      <FadeIn visible delay="1000">
        <Subtext
          size="sm"
          alignment="center"
          color="offWhite"
          styles="margin: 30px 0px 30px 0px;"
        >
          A traditional law firm with a non-traditional approach. We offer
          typical law practice outside counsel but also make experienced
          mortgage banking lawyers more accessible through cost saving
          cooperative initiatives.{" "}
        </Subtext>
      </FadeIn>
      <FadeIn visible delay="1300">
        <Link
          to="scrollTarget"
          spy={true}
          offset={-150}
          delay={0}
          duration={1300}
          smooth={true}
        >
          <CenterBlock>
            <Button>Contact Us</Button>
          </CenterBlock>
        </Link>
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 35%;

  @media (max-width: 900px) {
    width: 70%;
  }
`;

const Image = styled.img`
  @media (max-width: 500px) {
    width: 225px;
    height: auto;
  }
`;
