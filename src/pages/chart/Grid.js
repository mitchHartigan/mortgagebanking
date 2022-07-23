import React from "react";
import styled from "styled-components";

import Cell from "./Cell";
import TitleCell from "./TitleCell";

import { nanoid } from "nanoid";
import { findChartHeight } from "./utils";

export default function Grid(props) {
  const { data, titleData } = props;

  if (data) {
    return (
      <Container {...props}>
        {titleData.map((title, i) => {
          return <TitleCell name={title} isTitle column={i} key={nanoid()} />;
        })}
        {data.map((row) => {
          return row.map((columnArr, i) => {
            return columnArr.map((obj) => {
              return <Cell {...obj} column={i} key={nanoid()} />;
            });
          });
        })}
      </Container>
    );
  }
  return <p>Loading...</p>;
}

const genRows = (data) => {
  let str;
  const rows = findChartHeight(data);

  for (let i; i <= rows; i++) {
    str = str + "auto ";
  }
  return str;
};

const genColumns = (titleData) => {
  let str = "";
  for (let title of titleData) {
    str = str + "1fr ";
  }
  return str;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ titleData }) =>
    titleData ? genColumns(titleData) : ""};
  grid-template-rows: ${({ data }) => (data ? genRows(data) : "")};
  grid-template-areas: "header" "body";
`;
