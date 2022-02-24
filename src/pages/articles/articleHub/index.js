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
  const [searchEntered, setSearchEntered] = useState(false);
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
      if (article.content.search(keyword) !== -1) {
        filteredResults.push(article);
      }
    }
    console.log(filteredResults);
    return filteredResults;
  }

  function updateTags(tagsArr) {
    setTags(tagsArr);
  }

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
          toggleSearch={setSearchEntered}
        />
        <FilterSearch
          handleUpdate={updateTags}
          toggleSearch={setSearchEntered}
        />
      </SearchContainer>
      <StatusMessage></StatusMessage>
      {!loadingArticleData && (
        <ContentContainer>
          {articleData.map((article) => {
            return <PreviewCard key={article._id} data={article} />;
          })}
        </ContentContainer>
      )}
      {!loadingArticleData && searchEntered && (
        <ContentContainer>
          {searchByKeyword(keyword, articleData).map((article) => {
            return <PreviewCard key={article._id} data={article} />;
          })}
        </ContentContainer>
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
`;

const StatusMessage = styled.p``;
