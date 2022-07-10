import React from "react";
import styled from "styled-components";

export default function Cell(props) {
  const { coords, name, type, body, column, isTitle } = props;

  return (
    <Container coords={coords} isTitle={isTitle} column={column}>
      {name || body}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-row: ${({ coords, isTitle }) =>
    isTitle ? `1 /2 ` : `${coords[0]}/${coords[1]}`};
  grid-column: $ ${({ column }) => `${column}`};
  flex-direction: row;
  border: 1px solid black;
  align-items: center;
  min-width: 75px;
  min-height: 75px;
  padding: 10px;
`;
