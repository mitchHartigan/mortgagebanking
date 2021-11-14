import React from "react";
import styled from "styled-components";

import { reverseArray } from "./_utils";

export default function Sidebar(props) {
  const newArr = reverseArray(props.cards);

  return (
    <Container>
      {newArr.map((card) => {
        return <Acronym>{card.Acronym}</Acronym>;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 175px;
  left: -175px;
`;

const Acronym = styled.p`
  min-width: 75px;
  max-width: 200px;
  margin: 7px 0px 7px 0px;
  box-sizing: border-box;
  padding: 5px 7px 5px 7px;

  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  text-align: center;
  background: #e1a915;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
