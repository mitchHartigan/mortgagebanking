import React from "react";
import styled from "styled-components";

export default function KeywordSearch(props) {
  const { handleUpdate, toggleSearch, keyword } = props;

  function handleKeyDown(evt) {
    if (keyword === "" && evt.keyCode === 13) {
      toggleSearch(false);
    } else if (evt.keyCode === 13) {
      toggleSearch(true);
    }
  }

  return (
    <Container>
      <Input
        onChange={(evt) => handleUpdate(evt.target.value)}
        value={keyword}
        onKeyDown={handleKeyDown}
        placeholder="Search by keyword..."
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 0px 5px 0px 10px;
  box-sizing: border-box;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-right: 20px;
  height: 35px;
  max-height: 35px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Input = styled.input`
  font-family: ${(props) => props.theme.textFont};
  font-size: 16px;
  border: none;
  background-color: transparent;
  width: 100%;
  outline: none;
  &::placeholder {
    color: black;
  }
`;
