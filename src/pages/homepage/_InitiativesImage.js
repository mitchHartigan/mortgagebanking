import React from "react";
import styled from "styled-components";

export function InitiativesImage() {
  return (
    <Image
      src="initiatives_graphic.png"
      alt="Two word bubbles representing conversation."
    />
  );
}

const Image = styled.img`
  width: 285px;
  height: auto;
`;
