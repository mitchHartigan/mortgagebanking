import React from "react";
import styled from "styled-components";

export function GridCell(props) {
  const { column, row, children } = props;

  return (
    <Container column={column} row={row}>
      <p>{children}</p>
    </Container>
  );
}

const Container = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  min-height: 50px;
  min-width: 100px;
  background-color: lightblue;
  margin: 5px;
`;
