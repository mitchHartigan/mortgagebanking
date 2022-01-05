import React from "react";
import styled from "styled-components";

import ContentPreview from "./ContentPreview";

export default function PreviewCard() {
  return (
    <Card>
      <ContentContainer>
        <ImgPreview />
        <ContentPreview />
      </ContentContainer>
    </Card>
  );
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
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImgPreview = styled.div`
  grid-column: 1/2;
  height: 210px;
  width: 300px;
  background-color: tomato;
`;
