import React from "react";
import styled from "styled-components";

export const CenterBlock = (props) => {
  return <_CenterBlock>{props.children}</_CenterBlock>;
};

const _CenterBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
