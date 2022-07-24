import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function Cell(props) {
  const { coords, name, type, body, column, isTitle } = props;
  const [cellWidth, setCellWidth] = useState();
  const [cellHeight, setCellHeight] = useState();
  const containerRef = useRef();

  useEffect(() => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    setCellWidth(width);
    setCellHeight(height);

    window.addEventListener("resize", () => {
      setCellWidth(width);
      setCellHeight(height);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <Container
      ref={containerRef}
      coords={coords}
      isTitle={isTitle}
      column={column}
    >
      <FixedCell cellWidth={cellWidth} cellHeight={cellHeight}>
        <Text>{name || body}</Text>
      </FixedCell>
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
  height: ${({ cellHeight }) => `${cellHeight}px`};
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.offWhite};
  box-sizing: border-box;
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
