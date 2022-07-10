import React from "react";
import styled from "styled-components";

import CellContainer from "./CellContainer";

export default function Grid(props) {
  const { data } = props;
  console.log("data babyyy", data);

  return (
    <Container data={data}>
      {data.map((columnArr, i) => {
        return columnArr.map((obj) => {
          console.log("obj", obj);
          return <CellContainer {...obj} column={i} />;
        });
      })}
    </Container>
  );
}

function genRows(data) {
  let rowStr = "";
  data.forEach((column) => {
    rowStr = rowStr + "1fr ";
  });
  console.log(rowStr);
  return rowStr;
}

const Container = styled.div`
  display: grid;
  /* grid-template-rows: ${({ data }) => genRows(data)}; */
`;
