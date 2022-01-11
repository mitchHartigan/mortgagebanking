import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import PreviewContent from "./PreviewContent";

export default function PreviewCard(props) {
  const { data } = props;
  const [loadArticle, setLoadArticle] = useState(false);

  if (!loadArticle) {
    return (
      <Card onClick={() => setLoadArticle(true)}>
        <ContentContainer>
          <ImgPreview url={`${data.name}_sm.png`} />
          <PreviewContent data={data} />
        </ContentContainer>
      </Card>
    );
  } else {
    return <Redirect to={`/articles/${data.name}`} />;
  }
}

const Card = styled.div`
  width: 750px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 40px 30px 40px;
  box-sizing: border-box;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.3);
  margin: 20px 0px 20px 0px;
  transition: box-shadow 50ms linear;

  &: hover {
    cursor: pointer;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
    transition: box-shadow 50ms linear;
  }

  @media (max-width: 900px) {
    width: auto;
    height: auto;
    padding: 20px 30px 20px 30px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ImgPreview = styled.div`
  grid-column: 1/2;
  height: 225px;
  justify-self: start;
  width: 300px;
  background-image: url("/articles/img/${(props) => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    margin: 10px 0px 30px 0px;
  }
`;
