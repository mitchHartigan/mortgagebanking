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
      <Text>
        The slippery slope of regulation by software has apparently been
        traversed again. On a call with software developers regarding HMDA, the
        Consumer Financial Protection Bureau ("Bureau") indicated that the
        Universal Loan Identifier ("ULI") is not case sensitive. However, that
        conclusion appears to be driven by software development rather than
        regulations. I believe it is an inappropriate determination under the
        regulation, particularly since the Regulation's Appendix C shows mixed
        case characters.
      </Text>
    </Container>
  );
}

const HeaderContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-column: 2/3;
  height: 100%;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.text.lg};
  font-family: ${(props) => props.theme.titleFont};
  font-weight: normal;
  margin: -12px 0px 5px 0px;
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
  margin: 10px 0px 0px 0px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow-y: hidden;
`;
