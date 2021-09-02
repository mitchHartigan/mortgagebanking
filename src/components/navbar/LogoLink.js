import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = (props) => {
  const { children, route, align } = props;

  return (
    <Container>
      <Link to={route} style={LinkStylesOverride} align={align}>
        {children}
      </Link>
    </Container>
  );
};

const LinkStylesOverride = {
  textDecoration: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.align ? props.align : "center")};
  align-items: center;
`;
