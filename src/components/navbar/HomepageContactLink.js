import React from "react";
import styled from "styled-components";

export function HomepageContactLink(props) {
  const { toggleMenu } = props;

  const handleClick = () => {
    toggleMenu();
    const contactForm = document.getElementById("scrollTarget");
    contactForm.scrollIntoView(contactForm);
  };

  return (
    <Container onClick={handleClick}>
      <Text>Contact</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 10px 5px 10px;
`;

const Text = styled.p`
  margin: 0px;
  font-family: ${(props) => props.theme.titlefont};
  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.colors.darkgray};
  cursor: pointer;
`;
