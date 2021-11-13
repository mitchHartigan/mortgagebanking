import React from "react";
import styled from "styled-components";

export default function Description(props) {
  let description = props.cardData["Description of use"];
  if (description === "") description = "No description provided.";

  return (
    <Container>
      <Title>Description of Use</Title>
      <Underline />
      <Text description={description}>{description}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0px 20px 0px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  font-weight: 600;
  margin: 0px 0px 2px 0px;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  font-style: ${(props) =>
    props.description === "No description provided." ? "italic" : "normal"};
  margin: 7px 0px 0px 0px;
  line-height: 25px;
  color: ${(props) =>
    props.description === "No description provided." ? "gray" : "black"};
`;

const Underline = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
`;
