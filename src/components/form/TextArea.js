import React from "react";
import styled from "styled-components";

export const TextArea = (props) => {
  const { label, onChange, invalid, name, interestArea } = props;

  let interestAreaMessage = "";

  if (interestArea) {
    interestAreaMessage = `Hey! I'm interested in the ${interestArea} initiative and I'd like some more information.`;
  }

  return (
    <Container>
      <_TextArea
        name={name}
        onChange={onChange}
        invalid={invalid}
        defaultValue={interestAreaMessage}
        placeholder={label}
      />
      <ErrorMessage invalid={invalid}>Please complete this field.</ErrorMessage>
    </Container>
  );
};

const _TextArea = styled.textarea`
  height: 215px;
  padding: 10px 5px 5px 15px;
  background-color: ${(props) => props.theme.colors.offWhite};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border: 2px solid
    ${(props) => (props.invalid ? "red" : props.theme.colors.darkGray)};
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border-radius: 2px;
  resize: none;
  &:focus {
    border: 3px solid ${(props) => props.theme.colors.mainGold};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: ${(props) => props.theme.text.xs};
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  margin-top: 10px;
  visibility: ${(props) => (props.invalid ? "visible" : "hidden")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 0px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    padding: 1vh 0px 1vh 0px;
    margin-bottom: 0px;
  }
`;
