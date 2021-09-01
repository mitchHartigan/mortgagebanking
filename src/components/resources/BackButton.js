import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export class BackButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  _handleRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { text, location } = this.props;

    if (this.state.redirect) {
      return <Redirect to={location} />;
    }

    return (
      <Container>
        <Text onClick={this._handleRedirect}>{text}</Text>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10%;
`;

const Text = styled.div`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  cursor: pointer;
`;
