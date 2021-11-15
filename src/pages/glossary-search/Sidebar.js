import React from "react";
import styled from "styled-components";

import { reverseArray } from "./_utils";

export default class Sidebar extends React.Component {
  render() {
    const newArr = reverseArray(this.props.cards);

    return (
      <Container
        cards={this.props.cards}
        inactive={this.props.searchBarFocused}
      >
        {newArr.map((card, i) => {
          return (
            <Acronym
              key={card._id}
              cardID={card._id}
              index={i}
              inactive={this.props.searchBarFocused}
              highlightedCardIndex={this.props.highlightedCardIndex}
              onClick={() => this.props.setScrollToCardId(card._id)}
            >
              {card.Acronym}
            </Acronym>
          );
        })}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 200px;
  position: absolute;
  display: ${(props) =>
    props.cards && props.cards.length > 0 ? "flex" : "none"};
  flex-direction: column;
  align-items: flex-end;
  top: 187px;
  left: -175px;
`;

const Acronym = styled.p`
  background: ${(props) =>
    props.index !== props.highlightedCardIndex || props.inactive
      ? props.theme.colors.darkBlue
      : props.theme.colors.mainGold};
  color: ${(props) =>
    props.index !== props.highlightedCardIndex || props.inactive
      ? props.theme.colors.offWhite
      : props.theme.colors.darkGray};
  min-width: 75px;
  max-width: 200px;
  margin: 7px 0px 7px 0px;
  box-sizing: border-box;
  padding: 3px 5px 4px 5px;

  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
