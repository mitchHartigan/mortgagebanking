import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { data } from "./altChartData";

const colors = {
  0: "#abcbff",
  1: "#8ab6ff",
  2: "#3b84f",
  3: "#176dff",
};

export default function Row() {
  return <div>{/* <RecursiveContainer data={data[0]} /> */}</div>;
}

const RecursiveContainer = ({ data }) => {
  const hasChildren = data.children && data.children.length > 0;

  return (
    <Container level={data.level}>
      {data.name && <Title>{data.name}</Title>}
      {data.body && <Description>{data.body}</Description>}
      <SubdivisionContainer>
        {hasChildren &&
          data.children.map((childObj) => {
            console.log("childObj", childObj);
            return <RecursiveContainer data={childObj} />;
          })}
      </SubdivisionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  min-height: 100px;
  background-color: ${({ level }) => colors[level]};
  margin: 25px;
  outline: 2px solid black;
`;

const Title = styled.p`
  padding: 10px;
  background-color: white;
`;

const Description = styled.p`
  color: white;
`;

const SubdivisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
