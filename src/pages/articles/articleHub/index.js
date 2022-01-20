import React from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { Title } from "components/Title";
import PreviewCard from "./PreviewCard";
import { article_data } from "../data/article_data";

export default function ArticlesHub() {
  return (
    <Container>
      <ScrollToTopOnMount />
      <Title size="xxl" styles={titleStylesOverride}>
        Articles
      </Title>
      <ContentContainer>
        {article_data.map((article) => {
          return <PreviewCard data={article} />;
        })}
      </ContentContainer>
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
