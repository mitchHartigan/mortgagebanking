import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  const { label, onChange, invalid, name } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <_Input name={name} onChange={onChange} invalid={invalid} />
      <ErrorMessage invalid={invalid}>Please complete this field.</ErrorMessage>
    </Container>
  );
};

const _Input = styled.input`
  height: 40px;
  padding: 5px 5px 5px 5px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  border: 1px solid ${(props) =>
    props.invalid ? "red" : props.theme.colors.darkBlue};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border 2px solid ${(props) => props.theme.colors.mainBlue};
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const Label = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: ${(props) => props.theme.colors.darkBlue};
  margin: 0px 0px 10px 0px;

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
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0px 0px 0px;

  @media (max-width: 700px) {
    padding: 1vh 0px 1kvh 0px;
  }
`;
