import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { genTruncatedResults, parseDuplicatesFromResults } from "./_utils";

import "../../index.css";

const data = {
  Acronym: "CD",
  Citation: "12 CFR Sec. 1026.19(f)(1)",
  "Date Entered": "",
  "Description of use":
    "Contains terms of transaction and actual closing costs. Substituted for the HUD-1 Settlement Statement effective 10/3/2015.",
  FIELD6: "",
  Text: "Closing Disclosure",
  _id: "614cd65f33c9ad4ea838e8bc",
};

export default function Results(props) {
  const {
    focused,
    query,
    cursorPos,
    loadingResults,
    completedQuery,
    updateCursor,
    loadCard,
    toggleViewAllResults,
    toggleSearchBarFocused,
  } = props;

  // These checks may be unecessary with the new parseDuplicates util.
  let results = props.results;
  if (results.errorMessage) results = [];

  const _toggleViewAllResults = () => {
    toggleSearchBarFocused();
    toggleViewAllResults();
  };

  const mapResults = () => {
    const parsedResults = parseDuplicatesFromResults(results, props.cards);
    return genTruncatedResults(parsedResults).map((result, i) => {
      return (
        <Result
          key={nanoid()}
          listPos={i + 2}
          cursorPos={cursorPos}
          onMouseEnter={() => updateCursor(i + 2)}
          name={result._id}
          currentIndex={i}
          onMouseDown={() => loadCard(i)} // this is i, not i+2, because it's the position in the results[] array.
        >
          <Acronym>{result.Acronym}</Acronym>
          <Definition>{result.Text}</Definition>
        </Result>
      );
    });
  };

  const viewAllMesssage = (completedQuery, loadingResults) => {
    if (completedQuery && !loadingResults) {
      return <i>{"See all search results >"}</i>;
    } else {
      return `Searching...`;
    }
  };

  return (
    <Container query={query} focused={focused}>
      <ViewAllResult
        query={query}
        completedQuery={completedQuery}
        loadingResults={loadingResults}
        listPos={1}
        cursorPos={cursorPos}
        onMouseEnter={() => updateCursor(1)}
        results={results}
        onMouseDown={_toggleViewAllResults}
      >
        <Acronym>{query}</Acronym>
        <Definition>
          {viewAllMesssage(completedQuery, loadingResults)}
        </Definition>
      </ViewAllResult>
      <NoResultsFound
        results={results}
        completedQuery={completedQuery}
        loadCard={loadCard}
      >
        <NoResultsMessage>
          No results found. Please try a different search term.
        </NoResultsMessage>
      </NoResultsFound>
      {mapResults()}
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) =>
    props.query.length > 1 && props.focused ? "flex" : "none"};
  flex-direction: column;
  background-color: white;
  width: 760px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 5px 5px;

  @media (max-width: 1330px) {
    width: 560px;
  }

  @media (max-width: 600px) {
    width: 85vw;
  }
`;

const Result = styled.div`
  display: grid;
  grid-template-columns: 65px 10% 10% 1fr 65px;
  width: 100%;

  background-color: ${(props) =>
    props.listPos === props.cursorPos
      ? props.theme.colors.darkBlue
      : "transparent"};
  color: ${(props) => (props.listPos === props.cursorPos ? "white" : "black")};
  cursor: pointer;

  @media (max-width: 1050px) {
    grid-template-columns: 65px 25% 5% 1fr 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 27px 25% 5% 1fr 20px;
  }
`;

export const Acronym = styled.p`
  grid-column: 2 / 3;
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

export const Definition = styled.p`
  grid-column: 4 / 5;
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const ViewAllResult = styled.li`
  display: ${(props) =>
    props.query.length < 3 ||
    (props.completedQuery && props.results.length <= 6)
      ? "none"
      : "grid"};
  grid-template-columns: 65px 10% 10% 50% 1fr;
  width: 100%;

  background-color: ${(props) =>
    props.listPos === props.cursorPos
      ? props.theme.colors.darkBlue
      : "transparent"};
  color: ${(props) => (props.listPos === props.cursorPos ? "white" : "black")};
  cursor: pointer;

  @media (max-width: 1050px) {
    grid-template-columns: 65px 25% 5% 1fr 20px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 27px 25% 5% 1fr 20px;
  }
`;

const NoResultsFound = styled.div`
  display: ${(props) =>
    props.results.length <= 0 && props.completedQuery ? "flex" : "none"};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const NoResultsMessage = styled.p`
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};
  font-weight: 400;
  font-style: italic;
  margin-left: 65px;

  @media (max-width: 600px) {
    margin-left: 25px;
    font-size: ${(props) => props.theme.text.xxs};
  }
`;
