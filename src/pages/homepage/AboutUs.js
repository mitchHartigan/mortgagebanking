import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import { CenterBlock } from "components/CenterBlock";

export default function AboutUs() {
  return (
    <CenterBlock>
      <Container>
        <Title size="xxl" color="offWhite">
          About Us
        </Title>
        <Subtext
          size="sm"
          alignment="center"
          styles="line-height: 35px; margin-top: 30px;"
          color="offWhite"
        >
          Our members have focused on mortgage banking for over 25 years and
          recognize that regulatory compliance is more complex than ever.
          Regulatory risk is compounded with overlapping state and federal
          liability. Now more than ever, industry participants need access to
          experienced mortgage banking compliance guidance. The distinctions
          between retail, wholesale, and correspondent lending are subtle and
          easily misunderstood. We understand the business as well as the law.
        </Subtext>
      </Container>
    </CenterBlock>
  );
}

const Container = styled.div`
  margin: 9vh 0vw 9vh 0vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 1500px) {
    width: 70%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
