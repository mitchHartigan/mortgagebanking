import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { nanoid } from "nanoid";
import { reverseArray } from "./_utils";
import VisibilitySensor from "react-visibility-sensor";
import Sidebar from "./Sidebar";

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
      this.setState({ activeCardIndex: i });
    }
  };

  _scrollCardIntoView = (id) => {
    this[id].scrollIntoView();
  };

  render() {
    const reversedCards = reverseArray(this.props.cards);

    if (this.props.scrollToCardId) {
      this._scrollCardIntoView(this.props.scrollToCardId);
    }

    return (
      <CardContainer ref={this.containerRef}>
        <button
          onClick={() => {
            this["614cd65f33c9ad4ea838e87e"].scrollIntoView();
            console.log(this["614cd65f33c9ad4ea838e87e"]);
          }}
        >
          scroll to impediment ref
        </button>
        {reversedCards.map((card, i) => {
          return (
            <VisibilitySensor
              onChange={(isVisible) =>
                this._handleVisibilityChange(isVisible, i)
              }
              offset={{ top: 200 }}
              scrollCheck={false}
            >
              <ScrollContainer ref={(element) => (this[card._id] = element)}>
                <Card
                  tabIndex={i}
                  cardData={card}
                  key={card._id}
                  cardID={card._id}
                  index={i}
                  activeCardIndex={this.state.activeCardIndex}
                  handleClose={this.props.deleteCard}
                />
              </ScrollContainer>
            </VisibilitySensor>
          );
        })}
      </CardContainer>
    );
  }
}

const ScrollContainer = styled.div`
  margin: 0px;
  padding: 0px;
`;

const CardContainer = styled.div`
  position: absolute;
  top: 130px;
  overflow: scroll;
  max-height: ${window.innerHeight - 250}px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
