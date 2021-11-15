import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Results from "./Results";
import ViewAllResults from "./ViewAllResults";

export default class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewAllResults: false,
    };
  }

  toggleSearch = () => {
    this.setState({ viewAllResults: false });
  };

  toggleViewAllResults = () => {
    this.props.toggleSearchBarFocused();
    this.setState({ viewAllResults: true });
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
            toggleSearchBarFocused={toggleSearchBarFocused}
          />
        </Container>
      );
    } else {
      return (
        <ViewAllResults
          toggleSearch={this.toggleSearch}
          query={query}
          results={results}
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
