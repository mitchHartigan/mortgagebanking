import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "./CardContainer.styles.js";

import Description from "../../glossary-search/Card/Description";
import DefinitionRow from "../../glossary-search/Card/DefinitionRow";
import CitationRow from "../../glossary-search/Card/CitationRow";
import Title from "../../glossary-search/Card/Title";

export const DisplayCard = (props) => {
  const {
    cardData,
    index,
    activeCardIndex,
    displayOverlay,
    buttonState,
    background,
  } = props;

  return (
    <Container
      display={displayOverlay}
      state={buttonState}
      background={background}
      index={cardData._id}
      id={cardData._id}
    >
      <Title
        cardData={cardData}
        index={cardData._id}
        activeCardIndex={activeCardIndex}
        editMode={false}
        disableHighlights
      />
      <DefinitionRow cardData={cardData} />
      <Description cardData={cardData} />
      <CitationRow cardData={cardData} />
    </Container>
  );
};
