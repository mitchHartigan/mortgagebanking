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

export default function ArticlesHub() {
  const [articleData, setArticleData] = useState([]);
  const [loadingArticleData, setLoadingArticleData] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState(false);
  const [tagSearch, setTagSearch] = useState(false);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState("");

  function updateKeyword(keyword) {
    console.log("updating keyword");
    setKeyword(keyword);
  }

  function searchByKeyword(keyword, articles) {
    let filteredResults = [];

    for (let article of articles) {
      if (article.content) {
        if (article.content.search(keyword) >= 0) {
          filteredResults.push(article);
        }
      }
    }
    console.log(filteredResults);
    return filteredResults;
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
    console.log("update tags called");
    console.log("tagsArr", tagsArr);
    if (tagsArr) setTags(tagsArr);

    if (tagsArr.length > 0) {
      console.log("tag search should be set to true...");
      setTagSearch(true);
    } else {
      setTagSearch(false);
    }
  }

  function togSearch(val) {
    console.log("togSearch: current val", val);
    setKeywordSearch(val);
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
        <p>{genStatusMessage()}</p>
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

    console.log("searchResults", searchResults);

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
          toggleSearch={(val) => togSearch(val)}
        />
        <FilterSearch
          handleUpdate={updateTags}
          toggleSearch={(val) => togSearch(val)}
        />
      </SearchContainer>
      <StatusMessage></StatusMessage>
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
      {!loadingArticleData && tagSearch && genFilterResults(tags, articleData)}
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
`;

const StatusMessage = styled.p``;
