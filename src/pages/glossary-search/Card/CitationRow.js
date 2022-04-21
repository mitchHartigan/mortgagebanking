import React from "react";
import styled from "styled-components";
import CitationText from "./CitationText";

export default function CitationRow(props) {
  let dateAdded = props.cardData["Date Entered"];
  let citation = props.cardData.Citation;

  const { editMode, setData, cardData, activeCardIndex } = props;
  const isActiveCard = cardData._id === activeCardIndex;

  if (citation === "" && !editMode) citation = "N/A";
  if (dateAdded === "" && !editMode) dateAdded = "N/A";

  return (
    <Container>
      <CitationContainer>
        <TitleContainer>
          <ItemTitle>Citation</ItemTitle>
          <TitleUnderline show={!isActiveCard} />
        </TitleContainer>
        {!isActiveCard && <CitationText>{citation}</CitationText>}
        {isActiveCard && editMode && (
          <CitationInput
            value={citation}
            onChange={(evt) => {
              setData({ ...cardData, Citation: evt.target.value });
            }}
          />
        )}
      </CitationContainer>

      <DateContainer>
        <TitleContainer>
          <ItemTitle>Date Added</ItemTitle>
          <TitleUnderline show />
        </TitleContainer>
        <ItemText>{dateAdded}</ItemText>
      </DateContainer>
    </Container>
  );
}

const CitationInput = styled.input`
  height: 20px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  padding: 5px 10px 7px 5px;
  margin-top: 1px;
  margin-left: -7px;
  border: 2px solid ${(props) => props.theme.colors.darkGray};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 63% 7% 30%;
  width: 100%;
  margin: 25px 0px 25px 0px;
`;

const CitationContainer = styled.div`
  grid-column: 1 / 2;
  align-self: start;
  justify-self: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const DateContainer = styled.div`
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
