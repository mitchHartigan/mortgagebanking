import React from "react";
import styled from "styled-components";

import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar";
import { Footer } from "components/Footer";
import { Title } from "components/Title";
import PreviewCard from "./PreviewCard";
import { article_preview_data } from "../data/article_preview_data";

/* @param props
 * @param props.toggleResoureces - function that takes the user
 * back to the Resources page when called.
 */

export default function ArticlesHub() {
  return (
    <Container>
      <ScrollToTopOnMount />
      <Title size="xxl" styles={"margin-top: 75px;"}>
        Articles
      </Title>
      <ContentContainer>
        {article_preview_data.map((article) => {
          return <PreviewCard data={article} />;
        })}
      </ContentContainer>
      <Footer slim />
      <Navbar alwaysDisplay />
    </Container>
  );
}

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

  margin-top: 10px;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
