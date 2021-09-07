import React from "react";
import styled, { keyframes } from "styled-components";

export const Spinner = () => {
  return <Block />;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Block = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.mainGold};
  animation: ${rotate} 2s linear infinite;
`;
