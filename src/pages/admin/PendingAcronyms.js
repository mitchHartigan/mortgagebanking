import React from "react";
import styled from "styled-components";
import AcronymPreview from "./AcronymPreview";

export default function PendingAcronyms(props) {
  const { acronyms, scrollToCard } = props;

  return (
    <Container>
      <TitleContainer>
        <Title>{`Pending Acronyms (${acronyms.length})`}</Title>
        <Span />
      </TitleContainer>
      <Message show={acronyms.length === 0}>No pending acronyms.</Message>
      <AcronymContainer>
        {acronyms.map((acronym) => {
          return (
            <AcronymPreview acronym={acronym} scrollToCard={scrollToCard} />
          );
        })}
      </AcronymContainer>
    </Container>
  );
}

const TitleContainer = styled.div`
  height: 60px;
  width: 305px;
  position: fixed;
  background-color: white;
  z-index: 3;
`;

const AcronymContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 30px 20px 30px;
  width: 320px;
  max-height: 840px;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  margin: 10px 0px 10px 0px;
`;

const Message = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  display: ${(props) => (props.show ? "block" : "none")};
  margin-top: 0px;
`;
const Span = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainGold};
  margin-bottom: 15px;
`;
