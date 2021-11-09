import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar';

export default class ResultsContainer extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <Results />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
