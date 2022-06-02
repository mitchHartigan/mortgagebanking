import React from "react";
import styled from "styled-components";

export default function Description(props) {
  let description = props.cardData["Description of use"];

  const { editMode, setData, cardData, activeCardIndex } = props;
  if (description === "" && !editMode) description = "No description provided.";

  const isActiveCard = cardData._id === activeCardIndex;

  return (
    <Container>
      <Title>Description of Use</Title>
      <Underline show={!isActiveCard} />
      {!isActiveCard && <Text description={description}>{description}</Text>}
      {isActiveCard && editMode && (
        <TextInput
          value={description}
          onChange={(evt) =>
            setData({ ...cardData, Description: evt.target.value })
          }
        />
      )}
    </Container>
  );
}

const TextInput = styled.textarea`
  width: 100%;
  min-height: 44px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  padding: 5px 10px 7px 5px;
  margin-top: 1px;
  margin-left: -7px;
  border: 2px solid ${(props) => props.theme.colors.darkGray};
  outline: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0px 20px 0px;

  @media (max-width: 600px) {
    margin: 10px 0px 10px 0px;
  }
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  font-weight: 600;
  margin: 0px 0px 2px 0px;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xs};
  }
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

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const Underline = styled.span`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
