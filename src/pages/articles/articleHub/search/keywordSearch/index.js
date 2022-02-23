import React from "react";
import styled from "styled-components";

export default function KeywordSearch() {
  function handleChange(evt) {
    console.log(evt.target.value);
  }

  return (
    <Container>
      <Input onChange={handleChange} />
    </Container>
  );
}

const Container = styled.div``;

const Input = styled.input``;
