import React, { Component } from "react";
import styled from "styled-components";
import "magnifying_glass.svg";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  _handleViewAllResults = (completedQuery, loadingResults) => {
    if (!completedQuery || loadingResults) {
      return;
    } else {
      this.props.toggleViewAllResults();
    }
  };

  _handleInput = (evt) => {
    this.props.updateQuery(evt.target.value);
  };

  _updateCursorPos = (evt) => {
    const { key } = evt;
    // maybe refactor this with a switch case statement?

    if (key === "ArrowUp") {
      evt.preventDefault();
      let cursorPos = this.props.cursorPos;
      if (cursorPos <= 0) return;
      else {
        this.props.updateCursor(cursorPos - 1);
      }
    } else if (key === "ArrowDown") {
      let cursorPos = this.props.cursorPos;
      if (cursorPos === 7 || cursorPos >= this.props.results.length + 1) return;
      // including the search bar (cursor 0) and 'See all results' (cursor 1), and a maximum of 6 results, the max index will be 7.
      else {
        this.props.updateCursor(cursorPos + 1);
      }
    } else if (key === "Enter") {
      if (this.props.cursorPos === 0) return;
      if (this.props.cursorPos === 1) {
        this._handleViewAllResults(
          this.props.completedQuery,
          this.props.loadingResults
        );
      } else {
        this.props.loadCard(this.props.cursorPos - 2); // since the first two cursor indexes identify the search bar and view all results elements.
      }
    }
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Container ref={this.containerRef} tabIndex="0">
        <MagnifyingGlass src="magnifying_glass.svg" alt="magnifying glass" />
        <Input
          ref={this.inputRef}
          onChange={this._handleInput}
          value={this.props.query}
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
  outline: none;
  box-sizing: border-box;
  padding-left: 30px;
  z-index: 1;

  @media (max-width: 1330px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 90vw;
  }
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

  display: ${(props) => (props.viewAllResults ? "none" : "inline")};

  transition: padding 10ms ease;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const MagnifyingGlass = styled.img`
  display: ${(props) => (props.viewAllResults ? "none" : "inline")};

  @media (max-width: 600px) {
    display: none;
  }
`;
