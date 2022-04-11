import React from "react";
import styled from "styled-components";

import Card from "./Card";

export default function Editor(props) {
  const { acronyms } = props;

  return (
    <Container>
      {acronyms.map((acronym, i) => {
        return <Card cardData={acronym} index={i} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 390px;
`;
