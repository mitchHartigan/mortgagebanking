import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Results from "./Results";

export default function ResultsContainer(props) {
  const { cursor, query, results, searchBarFocused, loadingResults } = props;

  return (
    <Container id="resultsContainer">
      <SearchBar
        updateCursor={props.updateCursor}
        updateQuery={props.updateQuery}
        cursorPos={cursor}
        toggleSearchBarFocused={props.toggleSearchBarFocused}
      />
      <Results
        query={query}
        cursorPos={cursor}
        updateCursor={props.updateCursor}
        results={results}
        focused={searchBarFocused}
        loadingResults={loadingResults}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
