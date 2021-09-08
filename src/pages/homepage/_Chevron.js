import React from "react";
import styled from "styled-components";

export function Chevron() {
  return <Image src="chevron.png" alt="Chevron icon." />;
}

const Image = styled.img`
  position: absolute;
  bottom: 30px;
  z-index: 1;
`;
