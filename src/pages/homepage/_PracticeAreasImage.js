import React from "react";
import styled from "styled-components";

export function PracticeAreasImage() {
  return <Image src="practiceAreas_graphic.png" alt="A stack of books." />;
}

const Image = styled.img`
  width: 260px;
  height: auto;
  margin-bottom: -9px;

  @media (max-width: 1400px) {
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    width: 200px;
    height: auto;
  }
`;
