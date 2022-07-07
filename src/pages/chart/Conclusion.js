import React from "react";
import styled from "styled-components";

import { data } from "./altChartData";

export default function Conclusion(props) {
  return (
    <GridRowContainer>
      <GridCell data={data[0]} />
    </GridRowContainer>
  );
}

const GridCell = ({ data }) => {
  const hasChildren = data.children && data.children.length > 0;

  return (
    <Cell>
      {hasChildren &&
        data.children.map((childObj) => {
          return <GridCell data={childObj} />;
        })}
    </Cell>
  );
};

const GridRowContainer = styled.div``;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50px;
  min-height: 25px;
`;
