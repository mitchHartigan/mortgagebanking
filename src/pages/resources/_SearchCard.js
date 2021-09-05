import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { DisabledButton } from "./DisabledButton";
import { CenterBlock } from "components/CenterBlock";
import { Subtext } from "components/Subtext";

export default function SeachCard() {
  return (
    <Container>
      <Image src="acronym_icon.png" alt="A book, open and bookmarked." />
      <Title size="lg" align="center" alignItems="center" spanColor="#e1e1e1">
        Acronym Search
      </Title>
      <CenterBlock>
        <Subtext
          size="xxs"
          alignment="center"
          styles="margin-bottom: -10px; margin-top: -20px; max-width: 350px; line-height: 28px;"
        >
          Search across our database of acronyms precisely and seamlessly.
        </Subtext>
      </CenterBlock>
      <CenterBlock>
        <DisabledButton />
      </CenterBlock>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 50px 30px 50px;
  background-color: white;
  border-radius: 3px;
  width: 380px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.3);
  height: 400px;

  @media (max-width: 1200px) {
    margin-bottom: 5vh;
  }
`;

const Image = styled.img`
  align-self: center;
  margin-top: 10px;

  @media (max-width: 1800px) {
    height: auto;
  }
`;
