import React from "react";
import styled from "styled-components";
import AcronymPreview from "./AcronymPreview";

export default function PendingAcronyms(props) {
  const { acronyms, scrollToCard } = props;

  return (
    <Container>
      <Title>{`Pending Acronyms (${acronyms.length})`}</Title>
      <Span />
      {acronyms.map((acronym) => {
        return <AcronymPreview acronym={acronym} scrollToCard={scrollToCard} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px 10px 30px;
  width: 320px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  margin: 10px 0px 10px 0px;
`;

const Span = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainGold};
  margin-bottom: 7px;
`;
