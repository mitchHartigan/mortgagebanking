import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Grid from "./Grid";

import { data } from "./altChartData";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  findObjRowSize = async (obj) => {
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
    return value;
  };

  populateCanonicalArrayCoords = async (canonicalData) => {
    let leafCursor = 1;
    let newData = canonicalData;

    for (let [i, array] of canonicalData.entries()) {
      let cursor = 1;

      for (let [x, obj] of array.entries()) {
        const objRowSize = await this.findObjRowSize(obj);

        if (objRowSize === 0) {
          const objCoords = [leafCursor, leafCursor + 1];
          leafCursor = leafCursor + 1;
          const updatedObj = { ...newData[i][x] };
          updatedObj.coords = objCoords;
          newData[i].splice(x, 1, updatedObj);
        } else {
          const objCoords = [cursor, cursor + objRowSize];
          cursor = cursor + objRowSize;
          const updatedObj = { ...newData[i][x] };
          updatedObj.coords = objCoords;
          newData[i].splice(x, 1, updatedObj);
        }
      }
    }

    return newData;
  };

  populateCanonicalDataArray = async (objArray, canonicalData) => {
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

  genCanonicalDataArray = (level) => {
    const canonicalArr = [];

    for (let i = 0; i <= level; i++) {
      canonicalArr.push([]);
    }

    return canonicalArr;
  };

  findLowestLevel = async (objArray) => {
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

  setup = async () => {
    const lowestLevel = await this.findLowestLevel(data);
    let canonicalData = await this.genCanonicalDataArray(lowestLevel);
    console.log(canonicalData);
    canonicalData = await this.populateCanonicalDataArray(data, canonicalData);
    console.log(canonicalData);
    canonicalData = await this.populateCanonicalArrayCoords(
      canonicalData,
      data
    );
    console.log("cd", canonicalData);
    return canonicalData;
  };

  async componentDidMount() {
    const data = await this.setup();
    console.log("data bitch.......", data);
    this.setState({ data: data });
  }

  render() {
    return (
      <Container>
        <Grid data={this.state.data} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
