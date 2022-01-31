import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

import { Title } from "components/Title";
import { mdHeader, mdParagraph, mdListItem } from "./_mdOverrideComponents";
import { useParams } from "react-router-dom";

const markdownOptions = {
  overrides: {
    h1: {
      component: mdHeader,
    },
    p: {
      component: mdParagraph,
    },
    li: {
      component: mdListItem,
    },
  },
};

export default function MarkdownLoader(props) {
  const { title, date, validArticle, articleText, loadError } = props;
  const { articleName } = useParams();

  // this is messy. Please refactor future mitchell.
  if (validArticle && articleText) {
    return (
      <Container>
        <Image url={articleName} />
        <Title
          size="xl"
          styles={titleStylesOverride}
          alignTitle="center"
          align="center"
        >
          {title}
        </Title>
        <Markdown options={markdownOptions}>{articleText}</Markdown>
        <Date>Published on {date}.</Date>
      </Container>
    );
  }
  if (validArticle && !articleText) {
    return null;
  }
  if (loadError) {
    return (
      <ErrorMessage>Hmm. There doesn't seem to be anything here.</ErrorMessage>
    );
  } else {
    return null;
  }
}

const titleStylesOverride = `
  margin: 25px 0px 25px 0px;

  @media (max-width: 900px) {
    margin: 10px 0px 10px 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(/articles/img/${(props) => props.url}_lg.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;

  @media (max-width: 1200px) {
    height: 350px;
  }

  @media (max-width: 900px) {
    max-height: 35vh;
    margin: 10px 0px 0px 0px;
  }
`;

const Date = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.xs};
  font-style: italic;
`;

const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.sm};
`;
