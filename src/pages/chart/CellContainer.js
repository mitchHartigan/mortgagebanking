import React from "react";
import styled from "styled-components";

export default function CellContainer(props) {
  const { coords, name, type, body, column } = props;

  return (
    <Container coords={coords} column={column}>
      {name || body}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  grid-row: ${({ coords }) => `${coords[0]}/${coords[1]}`};
  grid-column: $ ${({ column }) => `${column}`};
  flex-direction: row;
  border: 1px solid black;
  min-width: 75px;
  min-height: 75px;
`;
