import React from "react";
import styled from "styled-components";

import Description from "../glossary-search/Card/Description";
import DefinitionRow from "../glossary-search/Card/DefinitionRow";
import CitationRow from "../glossary-search/Card/CitationRow";
import Title from "../glossary-search/Card/Title";

export default function Card(props) {
  const { cardData, index, activeCardIndex } = props;
  console.log("index", index);
  console.log("activeCardIndex", activeCardIndex);

  return (
    <Container highlight={index === activeCardIndex}>
      <Title
        cardData={cardData}
        index={index}
        activeCardIndex={activeCardIndex}
      />
      <DefinitionRow cardData={cardData} />
      <Description cardData={cardData} />
      <CitationRow cardData={cardData} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 670px;
  background: white;
  box-sizing: border-box;
  padding: 20px 60px 10px 60px;
  box-shadow: 0px 4px 3px
    ${({ highlight }) =>
      highlight ? "rgba(225, 169, 21, 0.4)" : "rgba(0, 0, 0, 0.3)"};
  border-radius: 10px;
  margin: 0px 0px 30px 0px;
  opacity: ${(props) => (props.inactive ? "0.4" : "1")};

  @media (max-width: 1330px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 90vw;
    padding: 20px 20px 5px 20px;
  }
`;
