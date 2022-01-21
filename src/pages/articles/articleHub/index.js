import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { Title } from "components/Title";
import PreviewCard from "./PreviewCard";
import { FETCH_ARTICLE_DATA } from "../API";
import { LoadingArticles } from "./LoadingArticles";

export default function ArticlesHub() {
  const [articleData, setArticleData] = useState([]);
  const [loadingArticleData, setLoadingArticleData] = useState(false);

  // To prevent having to make an API request each time the
  // ArticlesHub loads.
  function _saveArticlesToSessionStorage(articleData) {
    const existingArticleData = JSON.parse(
      sessionStorage.getItem("articleData")
    );

    if (existingArticleData) {
      setArticleData(existingArticleData);
      setLoadingArticleData(false);
    } else {
      sessionStorage.setItem("articleData", JSON.stringify(articleData));
      setArticleData(articleData);
      setLoadingArticleData(false);
    }
  }

  useEffect(() => {
    setLoadingArticleData(true);

    async function loadData() {
      const articleData = await FETCH_ARTICLE_DATA();
      if (articleData) _saveArticlesToSessionStorage(articleData);
    }
    loadData();
  }, []);

  return (
    <Container>
      <ScrollToTopOnMount />
      <Title size="xxl" styles={titleStylesOverride}>
        Articles
      </Title>
      {!loadingArticleData && (
        <ContentContainer>
          {articleData.map((article) => {
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
