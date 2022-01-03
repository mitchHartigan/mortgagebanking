import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Description from "./Description";

import DefinitionRow from "./DefinitionRow";
import CitationRow from "./CitationRow";
import Title from "./Title";

export default function Card(props) {
  const [disableHighlights, setHighlightsDisabled] = useState(false);

  // empty array [] argument passed into useEffect causes it to only
  // render once on component load, and not subsequently.
  useEffect(() => {
    if (window.innerHeight <= 900) {
      setHighlightsDisabled(true);
    }
  }, []);

  const { cardData, index, activeCardIndex, inactive } = props;

  return (
    <Container inactive={inactive}>
      {disableHighlights && (
        <CloseButton
          src="button_close_white.svg"
          alt="close button."
          onClick={() => props.handleClose(props.activeCardIndex)}
        />
      )}
      {!disableHighlights && (
        <CloseButton
          src="button_close.svg"
          alt="close button."
          onClick={() => props.handleClose(props.activeCardIndex)}
        />
      )}
      <Title
        cardData={cardData}
        index={index}
        activeCardIndex={activeCardIndex}
        inactive={props.inactive}
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
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 30px 0px 30px 0px;
  opacity: ${(props) => (props.inactive ? "0.4" : "1")};

  @media (max-width: 1330px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 90vw;
    padding: 20px 20px 5px 20px;
  }
`;

const CloseButton = styled.img`
  position: absolute;
  top: 31px;
  left: 21px;
  cursor: pointer;

  @media (max-width: 500px) {
    top: 30px;
    left: 30px;
  }
`;
