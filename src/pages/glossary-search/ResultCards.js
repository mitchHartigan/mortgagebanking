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
      visibilityOffset: 240,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1100) {
        this.setState({ visibilityOffset: 225 });
      }
      if (window.innerWidth <= 900) {
        this.setState({ visibilityOffset: 100 });
      }
    });
  }

  _handleVisibilityChange = (isVisible, i) => {
    if (isVisible) {
      this.props.setHighlightedCardIndex(i);
      this.setState({ activeCardIndex: i });
    }
  };

  _scrollCardIntoView = (id) => {
    this[id].scrollIntoView();
    this.props.clearScrollToCardId();
  };

  render() {
    const reversedCards = reverseArray(this.props.cards);

    const visibilityOffset = this.state.visibilityOffset;

    if (this.props.scrollToCardId) {
      this._scrollCardIntoView(this.props.scrollToCardId);
    }

    return (
      <CardContainer
        stopScroll={
          this.props.searchBarFocused || this.props.viewAllResultsFocused
        }
      >
        {reversedCards.map((card, i) => {
          return (
            <VisibilitySensor
              onChange={(isVisible) =>
                this._handleVisibilityChange(isVisible, i)
              }
              offset={{ top: visibilityOffset }}
              key={card._id}
              scrollCheck={false}
            >
              <ScrollContainer ref={(element) => (this[card._id] = element)}>
                <Card
                  inactive={
                    this.props.searchBarFocused ||
                    this.props.viewAllResultsFocused ||
                    this.state.disableHighlights
                  }
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
  top: 140px;
  overflow: ${(props) => (props.stopScroll ? "hidden" : "scroll")};
  pointer-events: ${(props) => (props.stopScroll ? "none" : "auto")};
  max-height: ${window.innerHeight - 300}px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1200px) {
    max-height: ${window.innerHeight - 260}px;
  }

  @media (max-width: 1150px) {
    top: 125px;
    max-height: ${window.innerHeight - 260}px;
  }

  @media (max-width: 900px) {
    top: 140px;
    max-height: ${window.innerHeight - 220}px;
  }

  @media (max-width: 500px) {
    top: 140px;
    max-height: ${window.innerHeight - 180}px;
  }
`;
