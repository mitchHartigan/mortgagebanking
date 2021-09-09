import React from "react";
import styled from "styled-components";

import LinkButton from "components/LinkButton";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";

export default function Summary(props) {
  const { title, image, descriptionText, buttonText, linkTarget } = props.data;
  const { swap } = props;

  return (
    <Container swap={swap}>
      <ImageContainer swap={swap}>{image}</ImageContainer>
      <DescriptionContainer swap={swap}>
        <Title size="xxl" alignTitle="flex-start" spanWidth="200px">
          {title}
        </Title>
        <Subtext size="xs" styles={SubtextStylesOverride}>
          {descriptionText}
        </Subtext>
        <LinkButton to={linkTarget}>{buttonText}</LinkButton>
      </DescriptionContainer>
    </Container>
  );
}

const SubtextStylesOverride = `
  margin-bottom: 25px;

  @media (max-width: 1400px){ 
    text-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.swap ? "22% 32% 10% 16% 20%" : "21% 16% 10% 32% 21%"};
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10vh 0vw 10vh 0vw;

  @media (max-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 10vh 10px 10vh 10px;
  }
`;

const ImageContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "4 / 5" : "2 / 3")};
  align-self: end;
  justify-self: start;
  grid-row-start: 1;

  @media (max-width: 1400px) {
    justify-self: center;
    align-self: center;
  }
`;

const DescriptionContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "2 / 3" : "4 / 5")};
  align-self: stretch;
  justify-self: center;
  grid-row-start: 1;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
