import React from "react";
import styled from "styled-components";

import Cell from "./Cell";
import TitleCell from "./TitleCell";

import { nanoid } from "nanoid";

export default function Grid(props) {
  const { data, titleData } = props;

  return (
    <Container data={data}>
      {titleData.map((title, i) => {
        return <TitleCell name={title} isTitle column={i} key={nanoid()} />;
      })}
      {data.map((columnArr, i) => {
        return columnArr.map((obj) => {
          return <Cell {...obj} column={i} key={nanoid()} />;
        });
      })}
    </Container>
  );
}

function genRows(data) {
  let rowStr = "50px ";
  data.forEach(() => {
    rowStr = rowStr + "1fr ";
  });
  return rowStr;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: ${({ data }) => genRows(data)};
`;
