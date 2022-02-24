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

const Container = styled.div``;

const Input = styled.input``;
