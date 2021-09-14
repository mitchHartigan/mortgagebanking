import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = (props) => {
  const {
    children,
    route,
    dark,
    size,
    width,
    align,
    styles,
    logo,
    contactLink,
  } = props;

  const path = {
    pathname: route,
    state: {
      scrollToForm: contactLink,
    },
  };

  return (
    <Container width={width} align={align} styles={styles} logo={logo}>
      <Link to={path} style={{ textDecoration: "none" }}>
        <Text dark={dark} size={size}>
          {children}
        </Text>
      </Link>
    </Container>
  );
};

const Text = styled.button`
  padding: ${(props) => (props.logo ? "0px" : "5px 10px 5px 10px")};
  font-family: ${(props) => props.theme.titleFont};
  font-size: ${(props) =>
    props.size ? props.theme.text[props.size] : props.theme.text.sm} !important;
  color: ${(props) => (props.dark ? props.theme.colors.darkGray : "white")};
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;

  @media (max-width: 1400px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
  white-space: nowrap;
`;

const Container = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.align ? props.align : "center")};
  ${(props) => props.styles}
`;
