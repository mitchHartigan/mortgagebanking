import React from "react";
import styled from "styled-components";
import PreviewCard from "../../PreviewCard";

function searchByTags(tags, articles) {
  let filteredResults = [];

  for (let article of articles) {
    // for each article
    if (article.tags) {
      for (let articleTag of article.tags) {
        // for each article tag
        for (let filterTag of tags) {
          // for each filter tag
          if (articleTag === filterTag) {
            filteredResults.push(article);
          }
        }
      }
    }
  }
  console.log(filteredResults);
  return filteredResults;
}

export const FilterResults = (props) => {
  const { tags, articleData } = props;
  const rawSearchResults = searchByTags(tags, articleData);
  const searchResults = [...new Set(rawSearchResults)];

  return (
    <ContentContainer>
      <p>{`${tags.length} filter(s) applied to results.`}</p>
      {searchResults.map((article) => {
        return <PreviewCard key={article._id} data={article} />;
      })}
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
