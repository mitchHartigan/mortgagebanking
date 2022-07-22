import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
// import { data } from "./chartData";
// import apiData from "./apiData.json";

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

  fetchData = async () => {
    let data = await fetch(
      "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/chartData"
    );

    data = await data.json();
    delete data[0]._id;
    return data[0];
  };

  genCanonicalData = async (apiData) => {
    const states = Object.keys(apiData);
    let canonicalData = [];
    let rowOffset = 0;

    for (let state of states) {
      const stateArr = apiData[state];
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
    return canonicalData;
  };

  async componentDidMount() {
    const apiData = await this.fetchData();
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
