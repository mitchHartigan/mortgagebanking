import React from "react";
import styled from "styled-components";

export default function CellSubdivision(props) {
  const { data } = props;
  const hasChildren = data.children && data.children.length > 0;
  console.log(hasChildren);

  return <Subdivision></Subdivision>;
}

const Subdivision = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  display: grid;
  grid-template-columns: 1fr;
  min-height: 50px;
  min-width: 100px;
  background-color: lightblue;
  margin: 5px;
`;
