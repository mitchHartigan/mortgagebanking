import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import Results from "./Results";
import AllResultsCard from "./AllResultsCard";

export default class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewAllResults: false,
      viewAllResultsQuery: "",
    };
  }

  toggleSearch = () => {
    this.props.toggleViewAllResultsFocused();
    this.setState({ viewAllResults: false });
  };

  toggleViewAllResults = () => {
    this.props.toggleViewAllResultsFocused();
    this.props.toggleSearchBarFocused();
    this.setState(
      {
        viewAllResultsQuery: this.props.query,
      },
      () => {
        this.setState({ viewAllResults: true });
      }
    );
  };

  render() {
    const {
      cursor,
      query,
      results,
      cards,
      searchBarFocused,
      loadingResults,
      completedQuery,
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
            cards={cards}
            focused={searchBarFocused}
            loadingResults={loadingResults}
            completedQuery={completedQuery}
            loadCard={loadCard}
            toggleViewAllResults={this.toggleViewAllResults}
            toggleSearchBarFocused={toggleSearchBarFocused}
          />
        </Container>
      );
    } else {
      return (
        <AllResultsCard
          toggleSearch={this.toggleSearch}
          query={this.state.viewAllResultsQuery}
          results={results}
          loadCard={loadCard}
        />
      );
    }
  }
}

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
