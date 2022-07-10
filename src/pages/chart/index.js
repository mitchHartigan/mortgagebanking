import React from "react";
import styled from "styled-components";

import Chart from "./Chart";

export default function Index() {
  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
