import React from "react";
import styled from "styled-components";

export default function Grid(props) {
  const { data } = props;
  console.log("data babyyy", data);
  return (
    <Container>
      <button onClick={() => console.log(data)}>Log me daddy</button>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
`;
