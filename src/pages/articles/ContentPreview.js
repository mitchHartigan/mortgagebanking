import React from "react";
import styled from "styled-components";

export default function ContentPreview() {
  return (
    <Container>
      <HeaderContainer>
        <Title>Regulation by Software</Title>
        <Date>Sep 19th, 2019</Date>
        <Span />
      </HeaderContainer>
      <TextContainer>
        <Text>
          The slippery slope of regulation by software has apparently been
          traversed again. On a call with software developers regarding HMDA,
          the Consumer Financial Protection Bureau ("Bureau") indicated that the
          Universal Loan Identifier ("ULI") is not case sensitive.
        </Text>
      </TextContainer>
    </Container>
  );
}

const HeaderContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-column: 2/3;
  justify-self: end;
  height: 100%;
  margin-left: 5px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.text.lg};
  font-family: ${(props) => props.theme.titleFont};
  font-weight: normal;
  margin: -12px 0px 5px 0px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Date = styled.p`
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.titleFont};
  margin: 5px 0px 5px 0px;
`;

const Span = styled.div`
  width: 80px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.mainGold};
  margin: 10px 0px 10px 0px;
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.text.xxs};
  font-family: ${(props) => props.theme.textFont};
  margin: 8px 0px 0px 0px;
  line-height: 22px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const TextContainer = styled.div``;
