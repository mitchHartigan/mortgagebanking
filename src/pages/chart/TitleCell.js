import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function Cell(props) {
  const { coords, name, type, body, column, isTitle } = props;
  const [cellWidth, setCellWidth] = useState();
  const containerRef = useRef();

  useEffect(() => {
    setCellWidth(containerRef.current.offsetWidth);

    window.addEventListener("resize", () => {
      setCellWidth(containerRef.current.offsetWidth);
    });
  });

  return (
    <Container
      ref={containerRef}
      coords={coords}
      isTitle={isTitle}
      column={column}
    >
      <FixedCell cellWidth={cellWidth}>
        <Text>{name || body}</Text>
      </FixedCell>
      <Text>{name || body}</Text>
    </Container>
  );
}

const FixedCell = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ cellWidth }) => `${cellWidth}px`};
  background-color: lightblue;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.textFont};
  font-size: ${({ theme }) => theme.text.md};
  margin: 0px;
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
