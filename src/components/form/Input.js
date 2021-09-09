import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  const { label, onChange, invalid, name, value } = props;

  return (
    <Container>
      {/* <Label>{label}</Label> */}
      <_Input
        name={name}
        onChange={onChange}
        invalid={invalid}
        value={value}
        placeholder={label}
      />
      <ErrorMessage invalid={invalid}>Please complete this field.</ErrorMessage>
    </Container>
  );
};

const _Input = styled.input`
  height: 45px;
  padding: 5px 5px 6px 15px;
  background-color: ${(props) => props.theme.colors.offWhite};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border: 2px solid ${(props) =>
    props.invalid ? "red" : props.theme.colors.darkGray};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 2px;
  &:focus {
    border 2px solid ${(props) => props.theme.colors.mainGold};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.darkGray}
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  margin-top: 10px;
  visibility: ${(props) => (props.invalid ? "visible" : "hidden")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0px 0px 0px;

  @media (max-width: 700px) {
    padding: 1vh 0px 1kvh 0px;
  }
`;
