import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { useParams } from "react-router-dom";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { BackButton } from "components/resources/BackButton";
import { article_preview_data } from "./article_preview_data.js";
import testMD from "./test.md";
import "./markdown.css";

const mdHeader = styled.h1`
  color: blue;
`;

const _articleLookup = (articleName, articlesData) => {
  let match;
  articlesData.forEach((article) => {
    if (article.name === articleName) match = article;
  });
  if (match) return match;
};

const fetchMarkdown = async () => {
  const response = await fetch(testMD);
  const text = await response.text();
  console.log(text);
  return text;
};

export default function ArticlePage(props) {
  const [markdown, setMarkdown] = useState("");
  const { articleName } = useParams();

  const { title, date, previewContent, name } = _articleLookup(
    articleName,
    article_preview_data
  );

  useEffect(() => {
    fetch(testMD)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        setMarkdown(text);
      });
  }, []);

  console.log(markdown);

  return (
    <Container>
      <ScrollToTopOnMount />
      <BackButton text={`< Articles`} location="/articles" />
      <ContentContainer>
        <Markdown
          options={{
            overrides: {
              h1: {
                component: mdHeader,
              },
            },
          }}
        >
          {markdown}
        </Markdown>
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
