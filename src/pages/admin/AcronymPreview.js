import React from "react";
import styled from "styled-components";

export default function AcronymPreview(props) {
  const { Acronym, Text, _id } = props.acronym;
  const { scrollToCard } = props;

  return (
    <Container onClick={() => scrollToCard(_id)}>
      <Title>
        {Acronym} - {Text}
      </Title>
    </Container>
  );
}

const Title = styled.h1`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  margin: 0px;
  padding: 0px;
  margin-top: 5px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Container = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.colors.offWhite};
  padding: 10px 20px 10px 20px;
  max-width: 300px;
  margin: 10px 0px 10px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: background-color 0.1s linear;
    transition: box-shadow 0.1s linear;
  }
`;
