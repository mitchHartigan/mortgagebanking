import React from "react";
import styled from "styled-components";

export default function Cell(props) {
  const { coords, name, type, body, column, isTitle } = props;

  return <Container {...props}>{name || body}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  grid-row: ${({ coords, isTitle }) =>
    isTitle ? `1 /2 ` : `${coords[0]}/${coords[1]}`};
  flex-direction: row;
  outline: ${({ isTitle }) => (isTitle ? `` : ` 1px solid black`)};
  align-items: center;
  min-width: 100px;
  min-height: 75px;
  max-width: 400px;
  padding: 25px;
  text-align: center;
  font-family: ${({ theme }) => theme.textFont};
  font-size: ${({ name }) => (name ? "16px" : "14px")};
  line-height: 23px;
`;
