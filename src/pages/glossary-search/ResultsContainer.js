import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar';
import Results from './Results'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cursor: 0,
    }
  }

  //this component should query the backend and load the results into its state.

  updateCursor = (pos) => {
    this.setState({cursor: pos}, ()=> console.log(this.state));
  }

  render() {
    const {cursor} = this.state;

    return (
      <Container>
        <SearchBar updateCursor={this.updateCursor} cursorPos={cursor} />
        <Results cursorPos={cursor} />
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
