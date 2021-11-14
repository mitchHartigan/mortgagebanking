import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

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
    results,
    loadingResults,
    updateCursor,
    loadCard,
    toggleViewAllResults,
  } = props;

  const mapResults = () => {
    return results.map((result, i) => {
      if (i <= 5) {
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
      }
    });
  };

  return (
    <Container query={query} focused={focused}>
      <ViewAllResult
        listPos={1}
        cursorPos={cursorPos}
        query={query}
        onMouseEnter={() => updateCursor(1)}
        results={results}
        onMouseDown={toggleViewAllResults}
      >
        <Acronym>{query}</Acronym>
        <Definition>
          <i>{`See all search results >`}</i>
        </Definition>
      </ViewAllResult>
      <NoResultsFound
        results={results}
        loadingResults={loadingResults}
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
`;

const Result = styled.div`
  display: grid;
  grid-template-columns: 65px 10% 10% 50% 1fr;
  width: 100%;

  background-color: ${(props) =>
    props.listPos === props.cursorPos
      ? props.theme.colors.darkBlue
      : "transparent"};
  color: ${(props) => (props.listPos === props.cursorPos ? "white" : "black")};
  cursor: pointer;
`;

const Acronym = styled.p`
  grid-column: 2 / 3;
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Definition = styled.p`
  grid-column: 4 / 5;
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const ViewAllResult = styled.li`
  display: ${(props) => (props.results.length >= 6 ? "grid" : "none")};
  grid-template-columns: 65px 10% 10% 50% 1fr;
  width: 100%;

  background-color: ${(props) =>
    props.listPos === props.cursorPos
      ? props.theme.colors.darkBlue
      : "transparent"};
  color: ${(props) => (props.listPos === props.cursorPos ? "white" : "black")};
  cursor: pointer;
`;

const NoResultsFound = styled.div`
  display: ${(props) =>
    props.results.length <= 0 && !props.loadingResults ? "flex" : "none"};
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
`;
