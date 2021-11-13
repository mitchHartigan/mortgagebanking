import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Results from "./Results";

export default function ResultsContainer(props) {
  const { cursor, query, results, searchBarFocused, loadingResults, loadCard } =
    props;

  return (
    <Container>
      <SearchBar
        updateCursor={props.updateCursor}
        updateQuery={props.updateQuery}
        cursorPos={cursor}
        toggleSearchBarFocused={props.toggleSearchBarFocused}
        loadCard={loadCard}
      />
      <Results
        query={query}
        cursorPos={cursor}
        updateCursor={props.updateCursor}
        results={results}
        focused={searchBarFocused}
        loadingResults={loadingResults}
        loadCard={loadCard}
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
