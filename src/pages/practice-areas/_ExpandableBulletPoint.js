import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { ExpandableTitleText } from "./ExpandableTitleText";

export class ExpandableBulletPoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: undefined,
    };
  }

  _toggle = () => {
    const { expanded } = this.state;

    if (expanded === undefined) {
      this.setState({ expanded: true });
    } else {
      this.setState({ expanded: !expanded });
    }
  };

  render() {
    const { title, children } = this.props;
    const { expanded } = this.state;

    return (
      <Container>
        <ContentContainer expanded={expanded}>
          <TitleContainer onClick={this._toggle}>
            <Plus
              src="plus_button.svg"
              alt="Plus Button."
              expanded={expanded}
            />
            <ExpandableTitleText expanded={expanded}>
              {title}
            </ExpandableTitleText>
          </TitleContainer>
          <ExpandedCard expanded={expanded}>{children}</ExpandedCard>
        </ContentContainer>
      </Container>
    );
  }
}

const SubtextStyleOverride = `
  padding-top: 3px;
  font-weight: bold;
  margin: 0px;
  width: auto;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #202020;
  }

  transition: border-color 120ms linear;
`;

const ContentContainer = styled.div`
  width: 90%;
  background-color: ${(props) =>
    props.expanded ? props.theme.colors.offWhite : "white"};
  box-shadow: ${(props) =>
    props.expanded ? "0px 3px 3px rgba(0, 0, 0, 0.25)" : ""};
  padding: 0px 0px 0px 10px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 0px;
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

const RotateForwards = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
`;

const RotateBackwards = keyframes`
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const ExpandedCard = styled.div`
  display: ${(props) => (props.expanded ? "block" : "none")};
`;

const Plus = styled.img`
  margin: 0px 15px 0px 10px;
  width: 16px;
  height: 16px;
  animation-delay: 0.2s;
  animation: ${(props) => {
      if (props.expanded === undefined) {
        return "";
      } else if (props.expanded) {
        return RotateForwards;
      } else {
        return RotateBackwards;
      }
    }}
    150ms linear;

  animation-fill-mode: forwards;
`;
