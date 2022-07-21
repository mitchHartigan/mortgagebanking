import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
import { data } from "./chartData";
import apiData from "./apiData.json";

import {
  populateCanonicalArrayCoords,
  populateCanonicalDataArray,
  findLowestLevel,
  genCanonicalDataArray,
  genTitleRowArray,
  parseDuplicateCellData,
  parseNonTreeData,
  populateNonTreeCanonicalData,
  findColumns,
  findRowCellHeight,
} from "./utils";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      titleData: [],
    };
  }

  genCanonicalData = async (apiData) => {
    const states = Object.keys(apiData);
    let canonicalData = [];
    let rowOffset = 0;

    for (let state of states) {
      const stateArr = apiData[state];
      console.log("stateArr", stateArr);
      const lowestLevel = await findLowestLevel(stateArr);
      const nonTreeDataArr = await parseNonTreeData(stateArr);
      let canonicalRowData = await genCanonicalDataArray(lowestLevel);
      canonicalRowData = await populateCanonicalDataArray(
        stateArr,
        canonicalRowData
      );
      canonicalRowData = await populateCanonicalArrayCoords(
        canonicalRowData,
        rowOffset
      );
      console.log("canonicalRowData", canonicalRowData);
      canonicalRowData = await populateNonTreeCanonicalData(
        canonicalRowData,
        nonTreeDataArr,
        rowOffset
      );
      canonicalRowData = await parseDuplicateCellData(
        canonicalRowData,
        stateArr
      );
      const rowHeight = await findRowCellHeight(canonicalRowData, rowOffset);
      rowOffset = rowOffset + rowHeight;
      canonicalData.push(canonicalRowData);
    }
    console.log("cd baby", canonicalData);
    return canonicalData;
  };

  // setup = async () => {
  //   const lowestLevel = await findLowestLevel(data);
  //   const nonTreeDataArr = await parseNonTreeData(data);
  //   // const chartCellWidth = await findColumns(apiData);
  //   let canonicalData = await genCanonicalDataArray(lowestLevel);
  //   canonicalData = await populateCanonicalDataArray(data, canonicalData);
  //   canonicalData = await populateCanonicalArrayCoords(canonicalData, data);
  //   canonicalData = await populateNonTreeCanonicalData(
  //     canonicalData,
  //     nonTreeDataArr,
  //     2
  //   );
  //   // console.log(await parseDuplicateCellData(canonicalData, data));
  //   canonicalData = await parseDuplicateCellData(canonicalData, data);
  //   // console.log(findRowCellHeight(canonicalData));
  //   // console.log("canonicalData", canonicalData);
  //   return canonicalData;
  // };

  async componentDidMount() {
    const data = await this.genCanonicalData(apiData);
    this.setState({ data: data, titleData: genTitleRowArray(data[0]) });
  }

  render() {
    return (
      <Container>
        <Grid data={this.state.data} titleData={this.state.titleData} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 100px 0px;
`;
