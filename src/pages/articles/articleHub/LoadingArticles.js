import React from "react";
import styled, { keyframes } from "styled-components";

export const LoadingArticles = () => {
  return (
    <Container>
      <Spinner />
      <Text>Loading Articles...</Text>
    </Container>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.md};
  margin-left: 20px;
`;

const Spinner = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.mainGold};
  animation: ${rotate} 1.5s linear infinite;
`;
