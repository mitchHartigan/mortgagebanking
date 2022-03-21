import React from "react";
import styled from "styled-components";

export default function HomepageHomeLink(props) {
  const { toggleMenu } = props;

  const handleClick = () => {
    toggleMenu();
    window.scroll(0, 0);
  };

  return (
    <Container onClick={handleClick}>
      <Text>Home</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 0px 15px 0px;
`;

const Text = styled.p`
  padding: 5px 10px 5px 10px;
  margin: 0px;
  font-family: ${(props) => props.theme.titlefont};
  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.colors.darkgray};
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;
