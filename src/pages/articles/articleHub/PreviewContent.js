import React from "react";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import "./styles.css";

export default function PreviewContent(props) {
  const { title, date, previewContent, snippet, term, keyword } = props.data;

  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Span />
      </HeaderContainer>
      <TextContainer>
        {!snippet && <Text>{previewContent}</Text>}
        {snippet && (
          <Highlighter
            className="highlighterContainer"
            highlightClassName="highlighterActiveArea"
            searchWords={[keyword]}
            autoEscape
            textToHighlight={snippet}
          />
        )}
      </TextContainer>
    </Container>
  );
}

const HeaderContainer = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-column: 2/3;
  justify-self: end;
  height: 100%;
  margin-left: 5px;

  @media (max-width: 900px) {
    align-items: center;
  }
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

  @media (max-width: 900px) {
    text-align: center;
  }
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

const TextContainer = styled.div`
  padding: 0px 5px 0px 0px;
  box-sizing: border-box;
`;

const Highlight = styled.div`
  background-color: red;
`;
