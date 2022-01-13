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
    const { text, location, articleButton } = this.props;

    if (this.state.redirect) {
      return <Redirect to={location} />;
    }

    return (
      <Container articleButton={articleButton}>
        <Text onClick={this._handleRedirect}>{text}</Text>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 4vw;
  box-sizing: border-box;
  margin-top: 9vh;

  @media (max-width: 900px) {
    ${(props) => {
      if (props.articleButton) {
        return `
          display: flex;
          margin-left: -20px;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 10px;
        `;
      }
    }}
  }
`;

const Text = styled.div`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  cursor: pointer;
`;
