import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { data } from "./altChartData";

export default function Chart(props) {
  const [coordinates, setCoordinates] = useState([]);

  const findObjRowSize = async (obj) => {
    let value = 0;

    async function findSmallestChildren(objArray) {
      objArray.forEach((obj) => {
        const hasChildren = obj.children && obj.children.length > 0;

        if (hasChildren) {
          findSmallestChildren(obj.children);
        } else {
          value = value + 1;
        }
      });
    }

    await findSmallestChildren(obj.children);
    return value;
  };

  useEffect(async () => {
    console.log(await findObjRowSize(data[0]));
  });

  return <Container>chart.</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
