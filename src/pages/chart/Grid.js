import React from "react";
import styled from "styled-components";

import Cell from "./Cell";
import TitleCell from "./TitleCell";

import { nanoid } from "nanoid";

export default function Grid(props) {
  const { data, titleData } = props;

  if (data) {
    return (
      <Container>
        {titleData.map((title, i) => {
          return <TitleCell name={title} isTitle column={i} key={nanoid()} />;
        })}
        {data.map((row) => {
          console.log("row", row);
          return row.map((columnArr, i) => {
            return columnArr.map((obj) => {
              return <Cell {...obj} column={i} key={nanoid()} />;
            });
          });
        })}
      </Container>
    );
  }
  return <p>uh oh</p>;
}

// function genRows(data) {
//   let rowStr = "50px ";
//   data[0].forEach(() => {
//     rowStr = rowStr + "1fr ";
//   });
//   return rowStr;
// }

const Container = styled.div`
  display: grid;
`;
