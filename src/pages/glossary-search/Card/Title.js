import React from "react";
import styled from "styled-components";

export default function TitleRow(props) {
  const { Acronym, Text } = props.cardData;

  const { index, activeCardIndex, inactive, disableHighlights, editMode } =
    props;

  return (
    <Container
      index={index}
      activeCardIndex={activeCardIndex}
      inactive={inactive || disableHighlights}
      editMode={editMode}
    >
      <Title
        index={index}
        activeCardIndex={activeCardIndex}
        inactive={inactive || disableHighlights}
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
  padding: 0px 35px 0px 35px;
  background: ${(props) => {
    if (!props.editMode) {
      return props.index !== props.activeCardIndex || props.inactive
        ? props.theme.colors.darkBlue
        : props.theme.colors.mainGold;
    }
    if (props.editMode && props.index === props.activeCardIndex)
      return props.theme.colors.mainGold;

    return props.theme.colors.darkBlue;
  }};
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  font-weight: 600;
  margin: 7px 0px 7px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) =>
    props.index !== props.activeCardIndex || props.inactive
      ? props.theme.colors.offWhite
      : props.theme.colors.darkGray};

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xs};
  }
`;
