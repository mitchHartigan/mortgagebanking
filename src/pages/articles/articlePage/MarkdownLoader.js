import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

import { Title } from "components/Title";
import { mdHeader, mdParagraph } from "./_mdOverrideComponents";
import { useParams } from "react-router-dom";

const markdownOptions = {
  overrides: {
    h1: {
      component: mdHeader,
    },
    p: {
      component: mdParagraph,
    },
  },
};

const loadArticle = async (articleName) => {
  // article.default is the name of the .md file once it's been built. I think. So,
  // it returns something like /static/media/regulation_by_software.e9adfce9.md.
  if (articleName) {
    const article = await import(`../data/${articleName}.md`);
    return article.default;
  }
};

export default function MarkdownLoader(props) {
  const [markdown, setMarkdown] = useState();
  const { title, date, imgUrl, validArticle, name } = props;

  const { articleName } = useParams();
  console.log("articleName", articleName);

  useEffect(() => {
    async function loadData() {
      const articleToBeLoaded = await loadArticle(articleName);
      const response = await fetch(articleToBeLoaded);
      const text = await response.text();
      setMarkdown(text);
    }
    loadData();
  }, []);

  if (validArticle && markdown) {
    return (
      <Container>
        <Image url={imgUrl} />
        <Title size="xl" styles={"margin: 25px 0px 25px 0px;"}>
          {title}
        </Title>
        <Markdown options={markdownOptions}>{markdown}</Markdown>
        <Date>Published on {date}.</Date>
      </Container>
    );
  } else {
    return <p>Invalid article.</p>;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(/articles/img/${(props) => props.url}_lg.png);
  background-size: cover;
  width: 100%;
  height: 500px;

  @media (max-width: 1200px) {
    height: 350px;
  }
`;

const Date = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.xs};
  font-style: italic;
`;
