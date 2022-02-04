import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import PreviewContent from "./PreviewContent";
import { FETCH_IMG_BASE64 } from "../API";

const loadImageFromDB = async (name, setImage) => {
  const imgObj = await FETCH_IMG_BASE64(`${name}_sm.png`);

  if (!imgObj.validImg) setImage("/articles/img/default.png");
  else setImage(`data:image/png;base64,${imgObj.url}`);
};

export default function PreviewCard(props) {
  const { data } = props;
  const [loadArticle, setLoadArticle] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    loadImageFromDB(data.name, setImage);
  }, []);

  if (!loadArticle) {
    return (
      <Card onClick={() => setLoadArticle(true)}>
        <ContentContainer>
          <ImgPreview url={image} />
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
    width: 550px;
    height: 500px;
    padding: 30px;
  }

  @media (max-width: 700px) {
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
    align-items: center;
  }
`;

const ImgPreview = styled.div`
  grid-column: 1/2;
  height: 225px;
  justify-self: start;
  width: 300px;
  background-color: ${(props) => props.theme.colors.offWhite};
  background-image: url("${(props) => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    height: 450px;
    margin: 10px 0px 30px 0px;
  }

  @media (max-width: 700px) {
    height: 225px;
  }
`;
