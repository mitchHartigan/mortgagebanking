import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { BackButton } from "components/resources/BackButton";
import { article_data } from "../data/article_data.js";
import { _articleLookup } from "./_articleLookup.util";
import { FETCH_ARTICLE, FETCH_ARTICLE_DATA } from "../API.js";
import MarkdownLoader from "./MarkdownLoader";

export default function ArticlePage() {
  const { articleName } = useParams();

  const [loadError, setLoadError] = useState(false);
  const [article, setArticle] = useState({});
  const [articleText, setArticleText] = useState("");

  async function setupState() {
    const article = _articleLookup(articleName, article_data);
    const text = await FETCH_ARTICLE(articleName);

    if (text) {
      setArticleText(text);
      setArticle({ ...article });
    } else {
      setLoadError(true);
    }
  }

  useEffect(() => {
    setupState();
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
          articleText={articleText}
          loadError={loadError}
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
