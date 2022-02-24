import React, { useState } from "react";
import styled from "styled-components";

export default function KeywordSearch(props) {
  const [keyword, setKeyword] = useState("");

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      console.log("Enter...entered!");
      props.handleUpdate(keyword);
      props.toggleSearch();
    }
  }

  return (
    <Container>
      <Input onChange={handleChange} onKeyDown={handleKeyDown} />
    </Container>
  );
}

const Container = styled.div``;

const Input = styled.input``;
