import React from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import { BackButton } from "components/resources/BackButton";
import { Title } from "components/Title";
import Navbar from "components/navbar";
import ResultsContainer from "./ResultsContainer";
import Card from "./Card";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      cursor: 0,
      results: [],
      cards: [],
      searchBarFocused: false,
      loadingResults: false,
    };
  }

  loadCard = (index) => {
    const { results, cards } = this.state;

    cards.push(results[index]);
    this.setState({ cards: cards });
  };

  updateQuery = async (query) => {
    this.setState({ query: query, loadingResults: true });

    if (query.length > 1) {
      const data = await fetch(
        `https://g92t09z7f4.execute-api.us-east-1.amazonaws.com/search?term=${query}`
      )
        .then((results) => results.json())
        .then((results) => {
          this.setState({ results: results, loadingResults: false });
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
    });
  };

  render() {
    const { query, cursor, results, cards, searchBarFocused, loadingResults } =
      this.state;

    const resultsContainerProps = {
      query: query,
      cursor: cursor,
      results: results,
      searchBarFocused: searchBarFocused,
      loadingResults: loadingResults,
      updateQuery: this.updateQuery,
      updateCursor: this.updateCursor,
      toggleSearchBarFocused: this.toggleSearchBarFocused,
      loadCard: this.loadCard,
    };

    return (
      <Container>
        <ScrollToTopOnMount />
        <BackButton location="/resources" text="< Resources" />
        <ContentContainer>
          <Title size="xl" styles={TitleStylesOverride}>
            Acronym Glossary
          </Title>
          <ResultsContainer {...resultsContainerProps} />
          <CardContainer>
            {cards.map((card) => {
              return <Card cardData={card} />;
            })}
          </CardContainer>
        </ContentContainer>
        <Navbar alwaysDisplay />
      </Container>
    );
  }
}

const CardContainer = styled.div`
  position: absolute;
  top: 130px;
  overflow: scroll;
  max-height: ${window.innerHeight - 250}px;
  ::-webkit-scrollbar {
    display: none;
  }
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
