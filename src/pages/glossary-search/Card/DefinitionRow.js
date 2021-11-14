import React from "react";
import styled from "styled-components";

export default function DefinitionRow(props) {
  let definition = props.cardData.Text;
  let acronym = props.cardData.Acronym;

  if (definition === "") definition = "N/A";
  if (acronym === "") acronym = "N/A";

  return (
    <Container>
      <ItemContainer leftAligned>
        <TitleContainer>
          <ItemTitle>Definition</ItemTitle>
          <TitleUnderline />
        </TitleContainer>
        <ItemText>{definition}</ItemText>
      </ItemContainer>

      <ItemContainer>
        <TitleContainer>
          <ItemTitle>Acronym</ItemTitle>
          <TitleUnderline />
        </TitleContainer>
        <ItemText>{acronym}</ItemText>
      </ItemContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0px 25px 0px;
`;

const ItemContainer = styled.div`
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
`;

const ItemText = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  margin: 7px 0px 0px 0px;
`;

const TitleUnderline = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
`;
