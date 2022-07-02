import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "./chartData.js";

import Chart from "./Chart";

export default function Index() {
  const [chartData, setChartData] = useState([]);
  const [rows, setRows] = useState(["Alaska"]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const States = data;
    const Columns = States[0].data;

    for (let state of States) {
      console.log(state.name);
    }

    for (let column of Columns) {
      console.log(column.name);
    }
  }, []);

  return (
    <Container>
      <Chart data={data}></Chart>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
