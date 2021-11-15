import React from "react";
import styled from "styled-components";

export default function TitleRow(props) {
  const { Acronym, Text } = props.cardData;

  const { index, activeCardIndex } = props;

  return (
    <Container index={index} activeCardIndex={activeCardIndex}>
      <Title
        index={index}
        activeCardIndex={activeCardIndex}
      >{`${Acronym} (${Text})`}</Title>
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
  padding: 0px 15px 0px 15px;
  background: ${(props) =>
    props.index === props.activeCardIndex
      ? props.theme.colors.mainGold
      : props.theme.colors.darkBlue};
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: 18px;
  font-weight: 600;
  margin: 7px 0px 7px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) =>
    props.index === props.activeCardIndex
      ? props.theme.colors.darkGray
      : props.theme.colors.offWhite};
`;
