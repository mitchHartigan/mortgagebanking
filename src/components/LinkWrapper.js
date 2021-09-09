import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

export function LinkWrapper(props) {
  const history = useHistory();

  const _redirect = () => {
    history.push(props.to);
  };

  return <Container onClick={_redirect}>{props.children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;
