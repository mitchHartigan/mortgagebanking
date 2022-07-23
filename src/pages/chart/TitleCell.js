import React from "react";
import styled from "styled-components";

export default function Cell(props) {
  const { coords, name, type, body, column, isTitle } = props;

  return (
    <Container coords={coords} isTitle={isTitle} column={column}>
      <Text>{name || body}</Text>
    </Container>
  );
}

const Text = styled.p`
  position: fixed;
  font-family: ${({ theme }) => theme.textFont};
  font-size: ${({ theme }) => theme.text.md};
  margin: 0px;
  margin-bottom: 25px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-row: 1 / 2;
  /* grid-column: $ ${({ column }) => `${column}`}; */
  flex-direction: row;
  border-bottom: 2px solid black;
  align-items: center;
  padding: 20px 40px 20px 40px;
`;
