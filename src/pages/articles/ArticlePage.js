import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { BackButton } from "components/resources/BackButton";
import { article_preview_data } from "./article_preview_data.js";

const _articleLookup = (articleName, articlesData) => {
  let match;
  articlesData.forEach((article) => {
    if (article.name === articleName) match = article;
  });
  if (match) return match;
};

export default function ArticlePage(props) {
  const { articleName } = useParams();

  const { title, date, previewContent, name } = _articleLookup(
    articleName,
    article_preview_data
  );

  return (
    <Container>
      <ScrollToTopOnMount />
      <BackButton text={`< Articles`} location="/articles" />
      <ContentContainer>
        <p>{title}</p>
        <p>{date}</p>
        <p>{previewContent}</p>
      </ContentContainer>
      <Footer slim />
      <Navbar alwaysDisplay />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
