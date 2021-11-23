import React from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import { Title } from "components/Title";
import Navbar from "components/navbar";
import ResultsContainer from "./ResultsContainer";
import Sidebar from "./Sidebar";
import ResultCards from "./ResultCards";
import { reverseArray } from "./_utils";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      cursor: 0,
      results: [],
      cards: [],
      searchBarFocused: false,
      viewAllResultsFocused: false,
      loadingResults: false,
      highlightedCardIndex: 0,
      scrollToCardId: "",
    };
  }

  componentDidMount() {
    const cards = JSON.parse(sessionStorage.getItem("cards"));

    if (cards && cards.length > 0) {
      this.setState({ cards: cards });
    }
  }

  setScrollToCardId = (id) => {
    this.setState({ scrollToCardId: id });
  };

  clearScrollToCardId = () => {
    this.setState({ scrollToCardId: "" });
  };

  setHighlightedCardIndex = (index) => {
    this.setState({ highlightedCardIndex: index });
  };

  deleteCard = (index) => {
    let { cards } = this.state;
    let reverseArr = reverseArray(cards);

    reverseArr.splice(index, 1);

    this.setState({ cards: reverseArr });
  };

  loadCard = (index) => {
    const { results, cards } = this.state;

    cards.push(results[index]);
    this.setState({ cards: cards, query: "" }, () => {
      sessionStorage.setItem("cards", JSON.stringify(cards));
    });
  };

  updateQuery = async (query) => {
    this.setState({ query: query, loadingResults: true });

    if (query.length > 1) {
      fetch(
        `https://ib1w9yyw7a.execute-api.us-east-1.amazonaws.com/search?term=${query}`
      )
        .then((results) => results.json())
        .then((results) => {
          this.setState({ results: results, loadingResults: false }, () => {
            console.log("results", this.state.results);
          });
        });
    }
  };

  updateCursor = (pos) => {
    this.setState({ cursor: pos });
  };

  toggleSearchBarFocused = () => {
    this.setState({
      searchBarFocused: !this.state.searchBarFocused,
      cursor: 0,
      query: "",
    });
  };

  toggleViewAllResultsFocused = () => {
    this.setState({ viewAllResultsFocused: !this.state.viewAllResultsFocused });
  };

  render() {
    const {
      query,
      cursor,
      results,
      cards,
      searchBarFocused,
      viewAllResultsFocused,
      loadingResults,
      highlightedCardIndex,
    } = this.state;

    const resultsContainerProps = {
      query: query,
      cursor: cursor,
      results: results,
      cards: cards,
      searchBarFocused: searchBarFocused,
      loadingResults: loadingResults,
      updateQuery: this.updateQuery,
      updateCursor: this.updateCursor,
      toggleSearchBarFocused: this.toggleSearchBarFocused,
      toggleViewAllResultsFocused: this.toggleViewAllResultsFocused,
      loadCard: this.loadCard,
    };

    return (
      <Container id="state">
        <ScrollToTopOnMount />
        <BackButtonContainer>
          <BackButton
            onClick={this.props.toggleGlossary}
          >{`< Resources`}</BackButton>
        </BackButtonContainer>
        <ContentContainer>
          <Title size="xl" styles={TitleStylesOverride}>
            Acronym Glossary
          </Title>
          <Sidebar
            cards={cards}
            highlightedCardIndex={highlightedCardIndex}
            setScrollToCardId={this.setScrollToCardId}
            searchBarFocused={searchBarFocused}
            viewAllResultsFocused={viewAllResultsFocused}
          />
          <ResultsContainer {...resultsContainerProps} />
          <ResultCards
            cards={cards}
            deleteCard={this.deleteCard}
            setHighlightedCardIndex={this.setHighlightedCardIndex}
            scrollToCardId={this.state.scrollToCardId}
            clearScrollToCardId={this.clearScrollToCardId}
            searchBarFocused={searchBarFocused}
            viewAllResultsFocused={viewAllResultsFocused}
          />
        </ContentContainer>
        <Navbar alwaysDisplay />
      </Container>
    );
  }
}

const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 4vw;
  box-sizing: border-box;
  margin-top: 9vh;

  @media (max-width: 900px) {
    display: none;
  }
`;

const BackButton = styled.div`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  cursor: pointer;
`;

const TitleStylesOverride = `
  margin-bottom: 2vh; 

  @media (max-width: 900px) {
     margin-top: 80px;
     text-align: center;
  };
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
