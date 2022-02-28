import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import { saveArticlesToSessionStorage } from "./utils";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { Title } from "components/Title";
import PreviewCard from "./PreviewCard";
import { FETCH_ARTICLE_DATA } from "../API";
import { LoadingArticles } from "./LoadingArticles";
import FilterSearch from "./search/filterSearch";
import KeywordSearch from "./search/keywordSearch";
import { FilterResults } from "./search/filterSearch/FilterResults";

export default function ArticlesHub() {
  const [articleData, setArticleData] = useState([]);
  const [loadingArticleData, setLoadingArticleData] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState(false);
  const [tagSearch, setTagSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState([]);

  function toggleKeywordSearch(value) {
    if (!value) {
      setKeywordSearch(value);
      return;
    }
    setKeywordSearch(value);
    setTagSearch(false);
  }

  function updateKeyword(keyword) {
    setKeyword(keyword);
  }

  function searchByKeyword(keyword, articles) {
    let filteredResults = [];

    const searchPattern = new RegExp(keyword, "i");

    for (let article of articles) {
      if (article.content) {
        if (article.content.search(searchPattern) >= 0) {
          filteredResults.push(article);
        }
      }
    }
    return filteredResults;
  }

  function clearSearch() {
    setTagSearch(false);
    setKeywordSearch(false);
  }

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

  function updateTags(tagsArr) {
    const newTagsArr = [...tagsArr];

    if (newTagsArr.length > 0) {
      setKeywordSearch(false);
      setTagSearch(true);
      setTags(newTagsArr);
    } else {
      setTagSearch(false);
    }
  }

  // -------------------------------------------------------------------------------
  const genKeywordResults = (keyword, articleData) => {
    const searchResults = searchByKeyword(keyword, articleData);

    function genStatusMessage() {
      if (searchResults.length == 0)
        return `No results found for '${keyword}'.`;
      return `Showing articles containing '${keyword}'.`;
    }

    return (
      <ContentContainer>
        <button onClick={clearSearch}>Clear</button>
        <StatusMessage>{genStatusMessage()}</StatusMessage>
        {searchResults.map((article) => {
          return <PreviewCard key={article._id} data={article} />;
        })}
      </ContentContainer>
    );
  };
  // --------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  const genFilterResults = (tags, articleData) => {
    const searchResults = searchByTags(tags, articleData);

    return (
      <ContentContainer>
        <p>{`${tags.length} filter(s) applied to results.`}</p>
        {searchResults.map((article) => {
          return <PreviewCard key={article._id} data={article} />;
        })}
      </ContentContainer>
    );
  };
  // --------------------------------------------------------------------------------

  useEffect(() => {
    setLoadingArticleData(true);

    async function loadData() {
      const articleData = await FETCH_ARTICLE_DATA();
      if (articleData)
        saveArticlesToSessionStorage(
          articleData,
          setArticleData,
          setLoadingArticleData
        );
    }
    loadData();
  }, []);

  return (
    <Container>
      <ScrollToTopOnMount />
      <Title size="xxl" styles={titleStylesOverride}>
        Articles
      </Title>
      <SearchContainer>
        <KeywordSearch
          handleUpdate={updateKeyword}
          toggleSearch={(val) => toggleKeywordSearch(val)}
          keywordSearch={keywordSearch}
        />
        <FilterSearch handleUpdate={updateTags} />
      </SearchContainer>
      {!loadingArticleData && !keywordSearch && !tagSearch && (
        <ContentContainer>
          {articleData.map((article) => {
            return <PreviewCard key={article._id} data={article} />;
          })}
        </ContentContainer>
      )}
      {!loadingArticleData &&
        keywordSearch &&
        genKeywordResults(keyword, articleData)}
      {!loadingArticleData && !keywordSearch && tagSearch && (
        <FilterResults
          tags={tags}
          articleData={articleData}
          clearSearch={clearSearch}
        />
      )}
      {loadingArticleData && <LoadingArticles />}
      <Footer slim />
      <Navbar alwaysDisplay />
    </Container>
  );
}

const titleStylesOverride = `
  margin-top: 75px;

  @media (max-width: 900px){
    margin-top: 15px;
  }
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

  margin: 10px 0px 60px 0px;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  margin-top: 25px;
`;

const StatusMessage = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
`;
