import React, { useState, useEffect } from "react";
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
