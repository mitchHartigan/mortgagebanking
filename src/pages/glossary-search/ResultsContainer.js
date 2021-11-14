import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Results from "./Results";
import ViewAllResults from "./ViewAllResults";

export default class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewAllResults: true,
    };
  }

  toggleViewAllResults = () => {
    this.setState({ viewAllResults: !this.state.viewAllResults });
    // also set the container as focused.
  };

  render() {
    const {
      cursor,
      query,
      results,
      searchBarFocused,
      loadingResults,
      loadCard,
      updateCursor,
      updateQuery,
      toggleSearchBarFocused,
    } = this.props;

    if (!this.state.viewAllResults) {
      return (
        <Container>
          <SearchBar
            updateCursor={updateCursor}
            updateQuery={updateQuery}
            query={query}
            cursorPos={cursor}
            toggleSearchBarFocused={toggleSearchBarFocused}
            loadCard={loadCard}
            results={results}
            toggleViewAllResults={this.toggleViewAllResults}
          />
          <Results
            query={query}
            cursorPos={cursor}
            updateCursor={updateCursor}
            results={results}
            focused={searchBarFocused}
            loadingResults={loadingResults}
            loadCard={loadCard}
            toggleViewAllResults={this.toggleViewAllResults}
          />
        </Container>
      );
    } else {
      return (
        <ViewAllResults
          toggleViewAllResults={this.toggleViewAllResults}
          query={query}
        />
      );
    }
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
