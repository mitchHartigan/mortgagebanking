import React from "react";
import styled from "styled-components";

export default function DefinitionRow(props) {
  let definition = props.cardData.Text;
  let acronym = props.cardData.Acronym;

  const { editMode, setData, cardData, activeCardIndex } = props;
  const isActiveCard = cardData._id === activeCardIndex;

  if (definition === "" && !editMode) definition = "N/A";
  if (acronym === "" && !editMode) acronym = "N/A";

  return (
    <Container>
      <DefinitionContainer>
        <TitleContainer>
          <ItemTitle>Definition</ItemTitle>
          <TitleUnderline show={!isActiveCard} />
        </TitleContainer>
        {!isActiveCard && <ItemText>{definition}</ItemText>}
        {isActiveCard && editMode && (
          <TitleInput
            value={definition}
            onChange={(evt) => {
              setData({ ...cardData, Text: evt.target.value });
            }}
          />
        )}
      </DefinitionContainer>

      <AcronymContainer>
        <TitleContainer>
          <ItemTitle>Acronym</ItemTitle>
          <TitleUnderline show={!isActiveCard} />
        </TitleContainer>
        {!isActiveCard && <Acronym>{acronym}</Acronym>}
        {isActiveCard && editMode && (
          <AcronymInput
            value={acronym}
            onChange={(evt) => {
              setData({ ...cardData, Acronym: evt.target.value });
            }}
          />
        )}
      </AcronymContainer>
    </Container>
  );
}

const TitleInput = styled.input`
  height: 20px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  padding: 5px 10px 7px 5px;
  margin-top: 1px;
  margin-left: -7px;
  border: 2px solid ${(props) => props.theme.colors.darkGray};
  outline: none;
`;

const AcronymInput = styled(TitleInput)`
  text-align: right;
  padding: 5px 5px 7px 5px;
  margin-top: 1px;
  margin-right: -7px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 5% 25%;
  width: 100%;
  margin: 30px 0px 25px 0px;
`;

const DefinitionContainer = styled.div`
  grid-column: 1 / 2;
  height: 100%;
  align-self: start;
  display: flex;
  justify-self: start;
  flex-direction: column;
  text-overflow: wrap;
  align-items: flex-start;
`;

const AcronymContainer = styled.div`
  grid-column: 3 / 4;
  height: 100%;
  align-self: start;
  display: flex;
  justify-self: end;
  flex-direction: column;
  align-items: flex-end;
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

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xs};
  }
`;

const ItemText = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  margin: 7px 0px 0px 0px;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
  word-break: break-word;
`;

const Acronym = styled(ItemText)`
  width: 100%;
  text-align: right;
`;

const TitleUnderline = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
