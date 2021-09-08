import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Subtext } from "components/Subtext";

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
    const { expanded, showAnimation } = this.state;

    console.log("expanded", expanded);

    return (
      <Container onClick={this._toggle}>
        <ContentContainer>
          <TitleContainer>
            <Plus
              src="plus_button.svg"
              alt="Plus Button."
              expanded={expanded}
            />
            <Subtext size="xs">{title}</Subtext>
          </TitleContainer>
          <ExpandedCard expanded={expanded}>{children}</ExpandedCard>
        </ContentContainer>
      </Container>
    );
  }
}

const ContentContainer = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;

  &:hover {
    background-color: lightblue;
  }
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
  background-color: ${(props) => props.theme.colors.offWhite};
  display: ${(props) => (props.expanded ? "block" : "none")};
`;

const Plus = styled.img`
  width: 14px;
  height: 14px;
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
    0.2s linear;

  animation-fill-mode: forwards;
`;
