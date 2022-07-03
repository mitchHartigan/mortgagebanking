import React from "react";
import styled from "styled-components";
import { GridCell } from "./GridCell";
import { CriteriaCell } from "./CriteriaCell";
import { ConclusionCell } from "./ConclusionCell";

export default function Chart(props) {
  const { data } = props;
  const Columns = data[0].data;

  return (
    <Container>
      {Columns.map((column) => {
        return (
          <GridCell
            row="1/2"
            column={`${Columns.indexOf(column) + 1}/${
              Columns.indexOf(column) + 2
            }`}
          >
            {column.name}
          </GridCell>
        );
      })}
      {Columns.map((obj) => {
        if (obj.type === "conclusion") {
          return (
            <ConclusionCell
              row="2/3"
              column={`${data.indexOf(obj) + 1}/${data.indexOf(obj) + 2}`}
              conclusionData={obj.data}
            >
              {obj.name}
            </ConclusionCell>
          );
        } else {
          return (
            <CriteriaCell
              row="2/3"
              column={`${data.indexOf(obj) + 1}/${data.indexOf(obj) + 2}`}
              criteriaData={obj.data}
            />
          );
        }
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
