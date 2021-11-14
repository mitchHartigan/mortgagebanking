import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { nanoid } from "nanoid";
import { reverseArray } from "./_utils";

export default function ResultCards(props) {
  const reversedCards = reverseArray(props.cards);

  return (
    <CardContainer>
      {reversedCards.map((card, i) => {
        return (
          <Card
            cardData={card}
            key={nanoid()}
            index={i}
            handleClose={props.deleteCard}
          />
        );
      })}
    </CardContainer>
  );
}

const Container = styled.div``;

const CardContainer = styled.div`
  position: absolute;
  top: 130px;
  overflow: scroll;
  max-height: ${window.innerHeight - 250}px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
