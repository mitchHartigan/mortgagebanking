import React from "react";
import styled from "styled-components";

export function ResourcesImage() {
  return (
    <Image
      src="resources_graphic.png"
      alt="Computer with a screwdriver and wrench on the screen."
    />
  );
}

const Image = styled.img`
  width: 280px;
  height: auto;

  @media (max-width: 900px) {
    width: 200px;
    height: auto;
  }
`;
