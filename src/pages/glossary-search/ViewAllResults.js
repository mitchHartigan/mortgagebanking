import React from "react";
import styled from "styled-components";
import { Acronym, Definition } from "./Results";

const viewAllMesssage = (completedQuery, loadingResults) => {
  if (completedQuery && !loadingResults) {
    return <i>{"See all search results >"}</i>;
  } else {
    return `Searching...`;
  }
};

export default function ViewAllResults(props) {
  const {
    query,
    completedQuery,
    loadingResults,
    results,
    listPos,
    cursorPos,
    updateCursor,
    toggleViewAllResults,
  } = props;

  return (
    <ViewAllResult
      query={query}
      completedQuery={completedQuery}
      loadingResults={loadingResults}
      listPos={1}
      cursorPos={cursorPos}
      onMouseEnter={() => updateCursor(1)}
      results={results}
      onMouseDown={toggleViewAllResults}
    >
      <Acronym>{query}</Acronym>
      <Definition>{viewAllMesssage(completedQuery, loadingResults)}</Definition>
    </ViewAllResult>
  );
}

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
