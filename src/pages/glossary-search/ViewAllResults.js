import React from "react";
import styled from "styled-components";

export default function ViewAllResults(props) {
  const { query } = props;

  return (
    <Container show>
      <BackButton
        onClick={props.toggleViewAllResults}
      >{`<     Back to Search`}</BackButton>
      <ResultsContainer>
        <Title>{`Viewing all search results for '${query}'.`}</Title>
        <Underline />
      </ResultsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  width: 800px;
  height: 700px;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  padding: 30px;
`;

const BackButton = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 600;
  cursor: pointer;
  margin: 0px;
  white-space: pre;
`;

const Title = styled.h4`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 400;
  margin: 20px 0px 10px 0px;
`;

const Underline = styled.span`
  display: block;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
`;

const ResultsContainer = styled.div`
  padding: 0px 25px 0px 25px;
`;
