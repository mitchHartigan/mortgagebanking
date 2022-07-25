import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Chart from "./Chart";
import { nanoid } from "nanoid";

export default function Index() {
  console.log("nano", nanoid());
  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
