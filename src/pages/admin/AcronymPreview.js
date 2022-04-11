import React from "react";
import styled from "styled-components";

export default function AcronymPreview(props) {
  const { Acronym, Text } = props.acronym;

  return (
    <Container>
      <Title>
        {Acronym} - {Text}
      </Title>
    </Container>
  );
}

const Title = styled.h1`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  margin: 0px;
  padding: 0px;
  margin-top: 5px;
`;

const Container = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.colors.offWhite};
  padding: 10px 20px 10px 20px;
  margin: 10px 20px 10px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  text-overflow: ellipsis;
`;
