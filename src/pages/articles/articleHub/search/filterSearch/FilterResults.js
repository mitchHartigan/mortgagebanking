import React from "react";
import styled from "styled-components";
import PreviewCard from "../../PreviewCard";
import buttonClose from "./button_close.svg";

function checkArrayIncludesAll(array, target) {
  return target.every((value) => array.includes(value));
}

function searchByTags(filterTags, articles) {
  let filteredResults = [];

  for (let article of articles) {
    // for each article
    if (article.tags.length > 0) {
      const matchingTags = checkArrayIncludesAll(article.tags, filterTags);

      if (matchingTags) {
        filteredResults.push(article);
      }
    }
  }
  return filteredResults;
}

export const FilterResults = (props) => {
  const { tags, articleData } = props;
  const rawSearchResults = searchByTags(tags, articleData);
  const searchResults = [...new Set(rawSearchResults)];

  return (
    <ContentContainer>
      <StatusContainer>
        <CloseButton
          onClick={props.clearSearch}
          src={buttonClose}
          alt="close button"
        />
        <StatusMessage>{`Filtering articles by ${tags.length} tag(s):`}</StatusMessage>
      </StatusContainer>
      <TagContainer>
        {tags.map((tag) => {
          return <Tag>{tag}</Tag>;
        })}
      </TagContainer>
      {searchResults.length > 0 &&
        searchResults.map((article) => {
          return <PreviewCard key={article._id} data={article} />;
        })}
      {searchResults.length == 0 && (
        <NoResultsFoundMessage>
          No articles found matching the selected tags.
        </NoResultsFoundMessage>
      )}
    </ContentContainer>
  );
};

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

const TagContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px 0px 20px;
  margin: 10px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin: 5px 10px 5px 10px;
  padding: 5px 10px 7px 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 25%);
  color: black;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.mainGold};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
`;

const CloseButton = styled.img`
  cursor: pointer;
`;

const NoResultsFoundMessage = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
`;

const StatusMessage = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: bold;
  margin: 0px;
  margin-left: 15px;
  margin-top: -2px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 10px 0px;
`;
