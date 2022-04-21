import React from "react";
import styled from "styled-components";

import { Container } from "./CardContainer.styles";

export const ApproveCard = (props) => {
  return (
    <Container>
      <PromptTitle>
        Are you sure you want to add {acronym.Acronym} to production?
      </PromptTitle>
      <ButtonRow>
        <AcceptButton></AcceptButton>
        <RejectButton></RejectButton>
      </ButtonRow>
    </Container>
  );
};

const PromptTitle = styled.h1`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
`;

const AcceptButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px 15px 0px;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
  width: 130px;
  height: 35px;
  
  cursor: pointer;
  background-color: white;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${(props) => colors[props.name]};
    color: white;
  }
`;