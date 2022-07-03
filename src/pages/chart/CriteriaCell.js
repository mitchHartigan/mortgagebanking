import React from "react";
import styled from "styled-components";

export function CriteriaCell(props) {
  const { column, row, criteriaData } = props;
  console.log("peen", criteriaData);

  if (criteriaData !== undefined) {
    return (
      <Container column={column} row={row}>
        {criteriaData.map((criteria) => {
          return <p>{criteria.name}</p>;
        })}
      </Container>
    );
  } else {
    return (
      <Container column={column} row={row}>
        {"Empty."}
      </Container>
    );
  }
}

const Container = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  min-height: 50px;
  min-width: 100px;
  background-color: lightblue;
  margin: 5px;
`;
