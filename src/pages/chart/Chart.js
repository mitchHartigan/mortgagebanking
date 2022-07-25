import React from "react";
import styled from "styled-components";

import Grid from "./Grid";

import {
  populateCanonicalArrayCoords,
  populateCanonicalDataArray,
  findLowestLevel,
  genCanonicalDataArray,
  genTitleRowArray,
  parseDuplicateCellData,
  parseNonTreeData,
  populateNonTreeCanonicalData,
  findRowCellHeight,
  parseCitations,
} from "./utils";

import dummyData from "./apiData.json";

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
    console.log("dataaaaa", data[0]);
    return data[0];
  };

  fetchCitations = async (apiData) => {
    let data = await fetch(
      "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/chartCitations",
      {
        method: "POST",
        body: { citations: await parseCitations(apiData) },
        mode: "no-cors",
      }
    );

    data = await data.json();
    console.log("citations data", data);
    return data;
  };

  genCanonicalData = async (apiData) => {
    const states = Object.keys(apiData);
    let canonicalData = [];
    let rowOffset = 0;

    for (let state of states) {
      const stateArr = apiData[state];
      parseCitations(apiData);
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
    const apiData = dummyData;
    await this.fetchCitations(apiData);
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
