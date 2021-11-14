import React from "react";
import styled from "styled-components";

export default class ViewAllResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cursor: 0,
      scrollTop: 0,
    };

    this.containerRef = React.createRef();
  }

  _focusDropdownContainer = () => {
    this.containerRef.current.focus();
  };

  _updateCursorPos = (pos) => {
    if (pos >= 11) {
    }
    this.setState({ cursor: pos });
  };

  _handleKeyDown = (evt) => {
    const { key } = evt;
    // maybe refactor this with a switch case statement?

    if (key === "ArrowUp") {
      let cursorPos = this.state.cursor;
      if (cursorPos === 0) return;
      else {
        this.setState({ cursor: cursorPos - 1 });
      }
    } else if (key === "ArrowDown") {
      let cursorPos = this.state.cursor;
      if (cursorPos >= this.props.results.length - 1) return;
      // including the search bar (cursor 0) and 'See all results' (cursor 1), and a maximum of 6 results, the max index will be 7.
      else {
        this.setState({ cursor: cursorPos + 1 });
      }
    } else if (key === "Enter") {
      this.props.loadCard(this.state.cursor); // since the first two cursor indexes identify the search bar and view all results elements.
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.containerRef.current.focus();
    }, 10);
  }

  render() {
    const { query, results, cursorPos, updateCursor, loadCard } = this.props;

    const mapResults = () => {
      return results.map((result, i) => {
        return (
          <Result
            tabIndex={i + 1}
            key={result._id}
            listPos={i}
            cursorPos={this.state.cursor}
            onMouseEnter={() => this._updateCursorPos(i)}
            name={result._id}
            currentIndex={i}
            // onMouseDown={() => loadCard(i)} // this is i, not i+2, because it's the position in the results[] array.
          >
            <Acronym>{result.Acronym}</Acronym>
            <Definition>{result.Text}</Definition>
          </Result>
        );
      });
    };

    return (
      <Container show>
        <BackButton
          onClick={this.props.toggleSearch}
        >{`<     Back to Search`}</BackButton>
        <TitleContainer>
          <Title>{`Viewing all search results for '${query}'.`}</Title>
          <Underline />
          <ResultsContainer
            tabIndex="0"
            autoFocus
            ref={this.containerRef}
            onKeyDown={this._handleKeyDown}
            onMouseOver={this._focusDropdownContainer}
          >
            {mapResults()}
          </ResultsContainer>
        </TitleContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  width: 800px;
  height: 700px;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  padding: 30px;
`;

const BackButton = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 600;
  cursor: pointer;
  margin: 0px;
  white-space: pre;
`;

const Title = styled.h4`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 400;
  margin: 20px 0px 10px 0px;
`;

const Underline = styled.span`
  display: block;
  height: 2px;
  background: ${(props) => props.theme.colors.darkGray};
  margin: 0px;
`;

const TitleContainer = styled.div`
  padding: 0px 25px 0px 25px;
`;

const ResultsContainer = styled.div`
  overflow-y: scroll;
  height: 550px;
  outline: none;
`;

// Copied over from Results.js. We'll make a uniform component later that we can use for both.

const Result = styled.div`
  display: grid;
  grid-template-columns: 0px 10% 10% 50% 1fr;
  width: 100%;

  background-color: ${(props) =>
    props.listPos === props.cursorPos
      ? props.theme.colors.darkBlue
      : "transparent"};
  color: ${(props) => (props.listPos === props.cursorPos ? "white" : "black")};
  cursor: pointer;
`;

const Acronym = styled.p`
  grid-column: 2 / 3;
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Definition = styled.p`
  grid-column: 4 / 5;
  font-size: ${(props) => props.theme.text.xs};
  font-family: ${(props) => props.theme.textFont};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
