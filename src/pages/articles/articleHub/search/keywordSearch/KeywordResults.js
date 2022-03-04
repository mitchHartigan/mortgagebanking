import React, { useState, useEffect } from "react";
import styled from "styled-components";
import closeButton from "../filterSearch/button_close.svg";

import PreviewCard from "../../PreviewCard";

function arrayToString(array) {
  var string = "";

  for (let elem of array) {
    if (array.indexOf(elem) == 0) {
      string = string + elem;
    } else {
      string = string + " " + elem;
    }
  }

  return string;
}

function searchByKeyword(keywordQuery, articles) {
  let filteredResults = [];
  let snippets = [];
  // const searchPattern = new RegExp(keywordQuery, "i");
  const searchPattern = new RegExp(keywordQuery, "gi");
  console.log(searchPattern);

  for (let article of articles) {
    if (article.content) {
      const strIndex = article.content.search(searchPattern);

      if (strIndex >= 0) {
        // Add matching article to results.

        const regex = /[\r\n]+/gm;
        const parsedContent = article.content.replace(regex, "");

        let rawSnippet = parsedContent.substring(
          strIndex - 100,
          strIndex + 200
        );

        const parsedSnippet = rawSnippet.split(" ");
        parsedSnippet[0] = "...";

        const snippet = arrayToString(parsedSnippet);
        snippets.push(snippet);

        const newArticleObj = {
          ...article,
          snippet: snippet,
          keyword: keywordQuery,
          keywordPattern: searchPattern,
        };

        filteredResults.push(newArticleObj);
      }
    }
  }
  return filteredResults;
}

export const KeywordResults = (props) => {
  const { keywordQuery, articleData, clearSearch } = props;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(searchByKeyword(keywordQuery, articleData));
  }, [keywordQuery]);

  function genStatusMessage() {
    if (searchResults.length == 0)
      return `No results found for '${keywordQuery}'.`;
    return `Showing articles containing '${keywordQuery}'.`;
  }

  return (
    <ContentContainer>
      <StatusContainer>
        <CloseButton
          onClick={clearSearch}
          src={closeButton}
          alt="close button"
        />
        <StatusMessage>{genStatusMessage()}</StatusMessage>
      </StatusContainer>
      {searchResults.map((article) => {
        return <PreviewCard key={article._id} data={article} />;
      })}
    </ContentContainer>
  );
};

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 10px 0px;
`;

const StatusMessage = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: bold;
  margin: 0px;
  margin-left: 15px;
  margin-top: -2px;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 10px 0px 60px 0px;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
`;
