import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { BackButton } from "components/resources/BackButton";
import { article_preview_data } from "../data/article_preview_data.js";
import MarkdownLoader from "./MarkdownLoader";

const _articleLookup = (articleName, articlesData) => {
  let match;
  articlesData.forEach((article) => {
    if (article.name === articleName) match = article;
  });
  if (match) return match;
};

export default function ArticlePage(props) {
  const { articleName } = useParams();

  console.log("articleName", articleName);

  const { title, date, previewContent, name, imgUrl } = _articleLookup(
    articleName,
    article_preview_data
  );

  return (
    <Container>
      <ScrollToTopOnMount />
      <BackButton text={`< Articles`} location="/articles" />
      <ContentContainer>
        <MarkdownLoader
          title={title}
          date={date}
          imgUrl={imgUrl}
          validArticle
        />
      </ContentContainer>
      <Footer slim />
      <Navbar alwaysDisplay />
    </Container>
  );
}

const Image = styled.div`
  background-image: url(/articles/img/${(props) => props.url}_lg.png);
  background-size: cover;
  width: 100%;
  height: 500px;

  @media (max-width: 1200px) {
    height: 350px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  box-sizing: border-box;
  padding: 0px 0px 100px 0px;
`;
