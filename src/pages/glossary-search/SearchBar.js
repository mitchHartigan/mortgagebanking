import React, { Component } from "react";
import styled from "styled-components";
import "magnifying_glass.svg";

export default class SearchBar extends Component {
  _handleInput = (evt) => {
    this.props.updateQuery(evt.target.value);
  };

  _updateCursorPos = (evt) => {
    const { key } = evt;

    if (key === "ArrowUp") {
      evt.preventDefault();
      let cursorPos = this.props.cursorPos;
      if (cursorPos <= 0) return;
      else {
        this.props.updateCursor(cursorPos - 1);
      }
    } else if (key === "ArrowDown") {
      let cursorPos = this.props.cursorPos;
      if (cursorPos === 7) return;
      // including the search bar (cursor 0) and 'See all results' (cursor 1), and a maximum of 6 results, the max index will be 7.
      else {
        this.props.updateCursor(cursorPos + 1);
      }
    } else if (key === "Enter") {
      console.log("time to load a card!");
    }
  };

  render() {
    return (
      <Container>
        <img src="magnifying_glass.svg" alt="magnifying glass" />
        <Input
          onChange={this._handleInput}
          onKeyDown={this._updateCursorPos}
          placeholder="Enter acronym or term to search..."
          onFocus={this.props.toggleSearchBarFocused}
          onBlur={this.props.toggleSearchBarFocused}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  height: 45px;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-sizing: border-box;
  padding-left: 30px;
  z-index: 1;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;

  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};
  box-sizing: border-box;
  padding: 10px 10px 10px 40px;

  ::placeholder {
    color: black;
  }

  transition: padding 10ms ease;
`;
