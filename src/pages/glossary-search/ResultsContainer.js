import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar';
import Results from './Results'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       query: "",
       cursor: 0,
    }
  }

  //this component should query the backend and load the results into its state.

  // The Results component should take an array of objects (the API results) as a prop.

  updateQuery = (query) => {
    this.setState({query: query}, ()=> console.log(this.state));
  }

  updateCursor = (pos) => {
    this.setState({cursor: pos}, ()=> console.log(this.state));
  }

  render() {
    const {cursor, query} = this.state;

    return (
      <Container>
        <SearchBar updateCursor={this.updateCursor} updateQuery={this.updateQuery} cursorPos={cursor} />
        <Results query={query} cursorPos={cursor} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
