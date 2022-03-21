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
import { KeywordResults } from "./search/keywordSearch/KeywordResults";

export default function ArticlesHub() {
  const [articleData, setArticleData] = useState([]);
  const [loadingArticleData, setLoadingArticleData] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState(false);
  const [tagSearch, setTagSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [keywordQuery, setKeywordQuery] = useState("");
  const [tags, setTags] = useState([]);

  function toggleKeywordSearch(value) {
    if (!value) {
      setKeywordSearch(value);
      return;
    }
    setKeywordSearch(value);
    setKeywordQuery(keyword);
    setTagSearch(false);
    setTags([]);
  }

  function updateKeyword(keyword) {
    setKeyword(keyword);
  }

  function clearSearch() {
    setTagSearch(false);
    setTags([]);
    setKeyword("");
    setKeywordSearch(false);
  }

  function updateTags(tagsArr) {
    const newTagsArr = [...tagsArr];

    if (newTagsArr.length > 0) {
      setKeywordSearch(false);
      setKeyword("");
      setKeywordQuery("");
      setTagSearch(true);
      setTags(newTagsArr);
    } else {
      setTagSearch(false);
    }
  }

  const getElementByIdAsync = (id) =>
    new Promise((resolve) => {
      const getElement = () => {
        const element = document.getElementById(id);
        if (element) {
          resolve(element);
        } else {
          requestAnimationFrame(getElement);
        }
      };
      getElement();
    });

  async function scrollToOpenedArticle() {
    const openedArticleTitle = sessionStorage.getItem("openedArticleTitle");

    if (openedArticleTitle) {
      const domNode = await getElementByIdAsync(openedArticleTitle);
      domNode.scrollIntoView({ block: "center" });
    }
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
    scrollToOpenedArticle();
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
          keyword={keyword}
          keywordQuery={keywordQuery}
        />
        <FilterSearch handleUpdate={updateTags} tags={tags} />
      </SearchContainer>
      {!loadingArticleData && !keywordSearch && !tagSearch && (
        <ContentContainer>
          {articleData.map((article) => {
            return <PreviewCard key={article._id} data={article} />;
          })}
        </ContentContainer>
      )}
      {!loadingArticleData && keywordSearch && (
        <KeywordResults
          keywordQuery={keywordQuery}
          articleData={articleData}
          clearSearch={clearSearch}
        />
      )}
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
  justify-content: center;

  margin-top: 25px;

  @media (max-width: 1200px) {
    width: 750px;
  }

  @media (max-width: 900px) {
    width: 550px;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
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

const CloseButton = styled.img`
  cursor: pointer;
`;
