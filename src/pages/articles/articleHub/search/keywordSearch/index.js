import React, { useState } from "react";
import styled from "styled-components";

export default function KeywordSearch(props) {
  const [keyword, setKeyword] = useState("");

  function handleChange(evt) {
    const { value } = evt.target;

    if (value === "") {
      setKeyword(value);
      props.toggleSearch(false);
    }
    setKeyword(value);
  }

  function handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      props.handleUpdate(keyword);
      props.toggleSearch(true);
    }
  }

  return (
    <Container>
      <Input
        onChange={handleChange}
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
  padding: 0px 5px 0px 5px;
  box-sizing: border-box;
  width: 325px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-right: 20px;
  height: 33px;
  max-height: 33px;
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
