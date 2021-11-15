import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { nanoid } from "nanoid";
import { reverseArray } from "./_utils";
import VisibilitySensor from "react-visibility-sensor";

export default class ResultCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCardIndex: 0,
      reversedCards: [],
    };

    this.containerRef = React.createRef();
  }

  _handleVisibilityChange = (isVisible, i) => {
    if (isVisible) {
      this.props.setHighlightedCardIndex(i);

      this.setState({ activeCardIndex: i }, () => {
        console.log("index from ResultsCards", i);
      });
    }
  };

  render() {
    const reversedCards = reverseArray(this.props.cards);

    return (
      <CardContainer ref={this.containerRef}>
        {reversedCards.map((card, i) => {
          return (
            <VisibilitySensor
              onChange={(isVisible) =>
                this._handleVisibilityChange(isVisible, i)
              }
              offset={{ top: 200 }}
              scrollCheck={false}
            >
              <Card
                tabIndex={i}
                cardData={card}
                key={nanoid()}
                index={i}
                activeCardIndex={this.state.activeCardIndex}
                handleClose={this.props.deleteCard}
              />
            </VisibilitySensor>
          );
        })}
      </CardContainer>
    );
  }
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
