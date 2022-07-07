import React, { useEffect } from "react";
import styled from "styled-components";
import { data } from "./chartData.js";

import Chart from "./Chart";
import Conclusion from "./Conclusion.js";
import Row from "./Row";

export default function Index() {
  useEffect(() => {}, []);

  return (
    <Container>
      <Row />
      {/* <Conclusion /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
