import React, { useState } from "react";
import styled from "styled-components";

export default function Status(props) {
  const [status, setStatus] = useState("");

  // if (props.keyword) {
  //   setStatus(`Showing articles containing ${props.keyword}`);
  // }

  // if (props.tags) {
  //   setStatus(`${props.tags.length} filter(s) applied to results.`);
  // }

  return <Container>{status}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
