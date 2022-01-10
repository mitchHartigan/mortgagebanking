import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

import { Title } from "components/Title";
import regulation_by_software from "../data/regulation_by_software.md";
import { mdHeader, mdParagraph } from "./_mdOverrideComponents";

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

export default function MarkdownLoader(props) {
  const [markdown, setMarkdown] = useState("");

  const { title, date, imgUrl, validArticle } = props;

  useEffect(async () => {
    const response = await fetch(regulation_by_software);
    const text = await response.text();
    setMarkdown(text);
  }, []);

  if (validArticle) {
    return (
      <Container>
        <Image url={imgUrl} />
        <Title size="xl" styles={"margin: 25px 0px 25px 0px;"}>
          {title}
        </Title>
        <p>{date}</p>
        <Markdown options={markdownOptions}>{markdown}</Markdown>
      </Container>
    );
  } else {
    return <p>Invalid article.</p>;
  }
}

const Container = styled.div``;

const Image = styled.div`
  background-image: url(/articles/img/${(props) => props.url}_lg.png);
  background-size: cover;
  width: 100%;
  height: 500px;

  @media (max-width: 1200px) {
    height: 350px;
  }
`;
