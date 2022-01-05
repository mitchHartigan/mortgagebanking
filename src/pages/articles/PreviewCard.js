import React from "react";
import styled from "styled-components";

import ContentPreview from "./ContentPreview";

export default function PreviewCard() {
  return (
    <Container>
      <ContentContainer>
        <ImgPreview />
        <ContentPreview />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 750px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
`;

const ImgPreview = styled.div`
  grid-column: 1/2;
  height: 225px;
  width: 320px;
  background-color: tomato;
`;
