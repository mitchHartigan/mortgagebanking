import React from "react";
import styled from "styled-components";

import Cell from "./Cell";
import { nanoid } from "nanoid";

export default function Grid(props) {
  const { data } = props;

  return (
    <Container data={data}>
      {data.map((columnArr, i) => {
        return columnArr.map((obj) => {
          return <Cell {...obj} column={i} key={nanoid()} />;
        });
      })}
    </Container>
  );
}

function genRows(data) {
  let rowStr = "";
  data.forEach(() => {
    rowStr = rowStr + "1fr ";
  });
  return rowStr;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: ${({ data }) => genRows(data)};
`;
