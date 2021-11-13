import React from "react";
import styled from "styled-components";

export default function TitleRow(props) {
  const { Acronym, Text } = props.cardData;
  return (
    <Container>
      <Title>{`${Acronym} (${Text})`}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.mainGold};
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: 18px;
  font-weight: 600;
  margin: 7px 0px 7px 0px;
`;
