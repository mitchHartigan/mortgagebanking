import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { data } from "./altChartData";

export default function Chart(props) {
  const [coordinates, setCoordinates] = useState([]);

  const findObjRowSize = async (obj) => {
    let value = 0;

    async function findSmallestChildren(objArray) {
      if (objArray && objArray.length > 0) {
        objArray.forEach((obj) => {
          const hasChildren = obj.children && obj.children.length > 0;

          if (hasChildren) {
            findSmallestChildren(obj.children);
          } else {
            value = value + 1;
          }
        });
      }
    }

    await findSmallestChildren(obj.children);

    // minimum row size for an object is one. Objects with no children
    // (before this check) have a row size of 0.
    if (value === 0) value = 1;
    return value;
  };

  async function genCoordinateArray(objArray) {
    const genColumnCoords = async (objArray) => {
      let columnCoords = [];
      let cursor = 1;

      objArray.forEach(async (obj, i) => {
        const objRowSize = await findObjRowSize(obj);
        console.log("obj", obj);
        console.log("objRowSize", objRowSize);

        const objCoords = [cursor, cursor + objRowSize];
        cursor = cursor + objRowSize;
        console.log(objCoords);

        if (obj.children && obj.children.length > 0) {
          return genColumnCoords(obj.children);
        }
      });
    };

    return await genColumnCoords(objArray);
  }

  useEffect(async () => {
    console.log(await findObjRowSize(data[0]));
    console.log(await genCoordinateArray(data));
  });

  return <Container>chart.</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
