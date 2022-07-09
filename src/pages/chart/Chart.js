import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { data } from "./altChartData";

export default function Chart(props) {
  const [coordinates, setCoordinates] = useState([]);
  const [canonicalData, setCanonicalData] = useState([]);

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
      let cursor = 1;
      let rowMaxHeight = 1;

      objArray.forEach(async (obj, i) => {
        const objRowSize = await findObjRowSize(obj);

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

  const genChartFriendlyData = async (objArray) => {
    const chartFriendlyData = [];

    const parseObjects = async (objArray) => {
      const newArr = [];

      if (objArray && objArray.length) {
        objArray.forEach((obj) => {
          newArr.push(obj);

          if (obj.children && obj.children.length > 0) {
            chartFriendlyData.push(newArr);
            parseObjects(obj.children);
          }
        });
      }
    };

    await parseObjects(objArray);

    console.log("chartFriendlyData", chartFriendlyData);
    return chartFriendlyData;
  };

  const populateCanonicalDataArray = async (objArray, canonicalData) => {
    const data = canonicalData;

    const parseObjects = async (objArray) => {
      console.log("objArray", objArray);
      objArray.forEach((obj) => {
        if (obj.level || obj.level === 0) {
          data[obj.level].push(obj);
        }
        if (obj.children) parseObjects(obj.children);
      });
    };

    await parseObjects(objArray);
    console.log("canonical data", data);
    return data;
  };

  const genCanonicalDataArray = (level) => {
    const canonicalArr = [];

    for (let i = 0; i <= level; i++) {
      canonicalArr.push([]);
    }

    return canonicalArr;
  };

  const findLowestLevel = async (objArray) => {
    let lowestLevel = 0;

    const parseHierarchy = async (objArray) => {
      objArray.forEach((obj) => {
        if (obj.level > lowestLevel) lowestLevel = obj.level;
        if (obj.children && obj.children.length > 0) {
          parseHierarchy(obj.children);
        }
      });
    };

    await parseHierarchy(objArray);
    return lowestLevel;
  };

  useEffect(async () => {
    // console.log(await findObjRowSize(data[0]));
    console.log(await genCoordinateArray(data));
    // genChartFriendlyData(data);
    // const lowestLevel = await findLowestLevel(data);
    // console.log("lowestLevel", lowestLevel);
    // const canonicalData = genCanonicalDataArray(lowestLevel);
    // await populateCanonicalDataArray(data, canonicalData);
  });

  return <Container>chart.</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
