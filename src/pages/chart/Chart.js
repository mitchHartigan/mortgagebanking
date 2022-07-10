import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
import { data } from "./chartData";

import {
  populateCanonicalArrayCoords,
  populateCanonicalDataArray,
  findLowestLevel,
  genCanonicalDataArray,
  genTitleRowArray,
} from "./utils";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      titleData: [],
    };
  }

  setup = async () => {
    const lowestLevel = await findLowestLevel(data);
    let canonicalData = await genCanonicalDataArray(lowestLevel);
    canonicalData = await populateCanonicalDataArray(data, canonicalData);
    canonicalData = await populateCanonicalArrayCoords(canonicalData, data);
    return canonicalData;
  };

  async componentDidMount() {
    const data = await this.setup();
    this.setState({ data: data, titleData: genTitleRowArray(data) });
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
`;
