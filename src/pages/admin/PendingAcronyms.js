import React from "react";
import styled from "styled-components";
import AcronymPreview from "./AcronymPreview";

export default function PendingAcronyms(props) {
  const { acronyms, scrollToCard } = props;

  return (
    <Container>
      {acronyms.map((acronym) => {
        return <AcronymPreview acronym={acronym} scrollToCard={scrollToCard} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 320px;
  background-color: white;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
