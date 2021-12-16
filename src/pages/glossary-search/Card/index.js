import React from "react";
import styled from "styled-components";
import Description from "./Description";

import DefinitionRow from "./DefinitionRow";
import CitationRow from "./CitationRow";
import Title from "./Title";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableHighlights: false,
    };
  }

  componentDidMount() {
    if (window.innerWidth <= 900) {
      this.setState({ disableHighlights: true });
    }
  }

  render() {
    const { cardData, index, activeCardIndex, inactive } = this.props;

    return (
      <Container inactive={inactive}>
        {this.state.disableHighlights && (
          <CloseButton
            src="button_close_white.svg"
            alt="close button."
            onClick={() => this.props.handleClose(this.props.activeCardIndex)}
          />
        )}
        {!this.state.disableHighlights && (
          <CloseButton
            src="button_close.svg"
            alt="close button."
            onClick={() => this.props.handleClose(this.props.activeCardIndex)}
          />
        )}
        <Title
          cardData={cardData}
          index={index}
          activeCardIndex={activeCardIndex}
          inactive={this.props.inactive}
        />
        <DefinitionRow cardData={cardData} />
        <Description cardData={cardData} />
        <CitationRow cardData={cardData} />
      </Container>
    );
  }
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
