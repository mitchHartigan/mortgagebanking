import React from "react";
import styled from "styled-components";

import { data } from "./altChartData";

export default function Conclusion(props) {
  return (
    <GridRowContainer>
      <p>conclusions</p>
      <GridCell data={data[0]} />
    </GridRowContainer>
  );
}

const GridCell = ({ data }) => {
  const hasChildren = data.children && data.children.length > 0;
  console.log("hasChildren?", hasChildren);

  return (
    <Cell>
      <p>type: {data.type}</p>
      <p>name: {data.name || "no"}</p>
      {hasChildren &&
        data.children.map((childObj) => {
          console.log("hello?");
          return <GridCell data={childObj} />;
        })}
    </Cell>
  );
};

const GridRowContainer = styled.div``;

const GridCellContainer = styled.div``;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50px;
  min-height: 5px;
  background-color: rgba(100, 0, 0, 0.5);
`;
