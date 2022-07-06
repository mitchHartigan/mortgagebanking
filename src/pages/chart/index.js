import React, { useEffect } from "react";
import styled from "styled-components";
import { data } from "./chartData.js";

import Chart from "./Chart";
import Conclusion from "./Conclusion.js";

export default function Index() {
  useEffect(() => {
    const States = data;
    const Columns = States[0].children;

    for (let state of States) {
      console.log(state.name);
    }

    for (let column of Columns) {
      console.log(column.name);
    }
  }, []);

  console.log("data from index", data);

  return (
    <Container>
      <Chart data={data}></Chart>
      <Conclusion />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
