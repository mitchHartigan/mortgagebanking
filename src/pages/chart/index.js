import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Chart from "./Chart";
import { data } from "./chartData";

export default function Index() {
  const [stateData, setStateData] = useState({
    [data[0].name]: data,
  });

  useEffect(() => {}, []);

  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
