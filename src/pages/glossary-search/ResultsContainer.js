import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Results from "./Results";

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      cursor: 0,
      results: [],
      searchBarFocused: false,
    };
  }

  //this component should query the backend and load the results into its state.

  // The Results component should take an array of objects (the API results) as a prop.

  updateQuery = async (query) => {
    this.setState({ query: query });

    if (query.length > 1) {
      const data = await fetch(
        `https://g92t09z7f4.execute-api.us-east-1.amazonaws.com/search?term=${query}`
      )
        .then((results) => results.json())
        .then((results) => {
          this.setState({ results: results }, () => console.log(this.state));
        });
    }
  };

  updateCursor = (pos) => {
    this.setState({ cursor: pos }, () => console.log(this.state));
  };

  toggleSearchBarFocused = () => {
    this.setState(
      { searchBarFocused: !this.state.searchBarFocused, cursor: 0 },
      () => {
        console.log("this.state", this.state);
      }
    );
  };

  render() {
    const { cursor, query, results, searchBarFocused } = this.state;

    return (
      <Container>
        <SearchBar
          updateCursor={this.updateCursor}
          updateQuery={this.updateQuery}
          cursorPos={cursor}
          toggleSearchBarFocused={this.toggleSearchBarFocused}
        />
        <Results
          query={query}
          cursorPos={cursor}
          results={results}
          focused={searchBarFocused}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
