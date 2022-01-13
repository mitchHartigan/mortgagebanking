import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { BackButton } from "components/resources/BackButton";
import { article_preview_data } from "../data/article_preview_data.js";
import { _articleLookup } from "./_articleLookup.util";
import MarkdownLoader from "./MarkdownLoader";

export default function ArticlePage() {
  const { articleName } = useParams();

  const [validArticle, setValidArticle] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    const article = _articleLookup(articleName, article_preview_data);

    if (article) {
      setArticle({ ...article });
      setValidArticle(true);
    }
  }, []);

  return (
    <Container>
      <ScrollToTopOnMount />
      <BackButton
        text={`< Back to Articles`}
        location="/articles"
        articleButton
      />
      <ContentContainer>
        <MarkdownLoader
          title={article.title}
          date={article.date}
          name={article.name}
          validArticle={validArticle}
        />
      </ContentContainer>
      <Footer slim />
      <Navbar alwaysDisplay />
    </Container>
  );
}

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

  @media (max-width: 900px) {
    width: 90%;
    padding: 0px 0px 50px 0px;
  }
`;
