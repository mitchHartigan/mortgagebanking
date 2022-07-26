import React from "react";
import styled from "styled-components";

export default function Cell(props) {
  const { coords, name, type, body, citations, column, isTitle } = props;

  const parseCitation = (citations, name, body) => {
    let updatedString = "";

    if (name) {
      const splitName = name.split("[");

      if (splitName.length > 1) {
        const potentialId = splitName[1].split("]");

        if (potentialId[0].length >= 20) {
          // valid id.
          const id = potentialId[0];
          const citationIds = Object.keys(citations);
          const index = citationIds.indexOf(id);
          updatedString = name.replace(potentialId[0], `${index + 1}`);
          console.log("updatedString", updatedString);
          return updatedString;
        }
      }
    }

    if (body) {
      const splitBody = body.split("[");

      if (splitBody.length > 1) {
        const potentialId = splitBody[1].split("]");

        if (potentialId[0].length >= 20) {
          // valid id.
          const id = potentialId[0];
          const citationIds = Object.keys(citations);
          const index = citationIds.indexOf(id);
          updatedString = body.replace(potentialId[0], `${index + 1}`);
          console.log("updatedString", updatedString);
          return updatedString;
        }
      }
    } else {
      return name || body;
    }
  };

  return (
    <Container {...props}>
      <Text {...props}>{parseCitation(citations, name, body)}</Text>
    </Container>
  );
}

const Text = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.textFont};
  font-size: ${({ name }) => (name ? "16px" : "14px")};
  line-height: 23px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  grid-row: ${({ coords, isTitle }) =>
    isTitle ? `1 /2 ` : `${coords[0]}/${coords[1]}`};
  flex-direction: row;
  outline: ${({ isTitle }) => (isTitle ? `` : ` 1px solid black`)};
  align-items: center;
  min-width: 100px;
  min-height: 75px;
  max-width: 400px;
  padding: 25px;
`;
