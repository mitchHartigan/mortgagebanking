import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "./CardContainer.styles.js";

import Description from "../../glossary-search/Card/Description";
import DefinitionRow from "../../glossary-search/Card/DefinitionRow";
import CitationRow from "../../glossary-search/Card/CitationRow";
import Title from "../../glossary-search/Card/Title";

export const EditCard = (props) => {
  const {
    cardData,
    index,
    activeCardIndex,
    displayOverlay,
    buttonState,
    background,
    setData,
  } = props;

  return (
    <Container
      display={displayOverlay}
      state={buttonState}
      background={background}
      index={cardData._id}
    >
      <Title
        cardData={cardData}
        index={cardData._id}
        activeCardIndex={activeCardIndex}
        editMode={true}
        setData={setData}
      />
      <DefinitionRow cardData={cardData} editMode={true} setData={setData} />
      <Description cardData={cardData} editMode={true} setData={setData} />
      <CitationRow cardData={cardData} editMode={true} setData={setData} />
    </Container>
  );
};
