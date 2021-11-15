import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { DisabledButton } from "./DisabledButton";
import { CenterBlock } from "components/CenterBlock";
import { Subtext } from "components/Subtext";
import { Button } from "components/Button";

export default function SeachCard(props) {
  return (
    <Container>
      <Image src="acronym_icon.png" alt="A book, open and bookmarked." />
      <Title size="lg" align="center" alignItems="center" spanColor="#e1a915">
        Acronym Glossary
      </Title>
      <CenterBlock>
        <Subtext
          size="xs"
          alignment="center"
          styles="margin-bottom: -10px; margin-top: -20px; max-width: 350px; line-height: 28px;"
        >
          Search our extensive glossary of acronyms by the acronym or by any
          word or phrase.
        </Subtext>
      </CenterBlock>
      <CenterBlock>
        <Button onClick={props.toggleGlossary}>Start</Button>
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
  height: 380px;
  width: 340px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1800px) {
    height: 350px;
    width: 300px;
  }

  @media (max-width: 1350px) {
    margin-bottom: 5vh;
  }
`;

const Image = styled.img`
  align-self: center;
  margin-top: 10px;
  width: 144px;
  height: auto;

  @media (max-width: 1800px) {
    width: 100px;
  }
`;
