import React from "react";
import styled from "styled-components";
import CitationText from "./CitationText";

export default function AuthorRow(props) {
  const { editMode, cardData, activeCardIndex } = props;
  const { authorName, authorEmail } = cardData;

  return (
    <Container>
      <AuthorNameContainer>
        <TitleContainer>
          <ItemTitle>Submitter Name</ItemTitle>
          <TitleUnderline show />
        </TitleContainer>
        <CitationText>{authorName}</CitationText>
      </AuthorNameContainer>

      <EmailContainer>
        <TitleContainer>
          <ItemTitle>Submitter Email</ItemTitle>
          <TitleUnderline show />
        </TitleContainer>
        <ItemText>{authorEmail}</ItemText>
      </EmailContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 63% 7% 30%;
  width: 100%;
  margin: 25px 0px 25px 0px;
`;

const AuthorNameContainer = styled.div`
  grid-column: 1 / 2;
  align-self: start;
  justify-self: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const EmailContainer = styled.div`
  grid-column: 3 / 4;
  align-self: start;
  justify-self: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.leftAligned ? "flex-start" : "flex-end")};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  font-weight: 600;
  margin: 0px 0px 2px 0px;
  white-space: nowrap;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xs};
  }
`;

const ItemText = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  margin: 7px 0px 0px 0px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const TitleUnderline = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
