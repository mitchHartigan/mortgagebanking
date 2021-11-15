import React from "react";
import styled from "styled-components";
import Description from "./Description";

import DefinitionRow from "./DefinitionRow";
import CitationRow from "./CitationRow";
import Title from "./Title";

export default class Card extends React.Component {
  render() {
    const { cardData, index, activeCardIndex, inactive } = this.props;

    return (
      <Container inactive={inactive}>
        <CloseButton
          src="button_close.svg"
          alt="close button."
          onClick={() => this.props.handleClose(this.props.activeCardIndex)}
        />
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
`;

const CloseButton = styled.img`
  position: absolute;
  top: 31px;
  left: 21px;
  cursor: pointer;
`;
