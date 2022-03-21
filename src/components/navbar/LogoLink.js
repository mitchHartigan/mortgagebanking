import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = (props) => {
  const { children, route, align, homepage } = props;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!homepage) {
    return (
      <Container>
        <Link to={route} style={LinkStylesOverride} align={align}>
          {children}
        </Link>
      </Container>
    );
  } else {
    return <Container onClick={handleClick}>{children}</Container>;
  }
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
  cursor: pointer;
`;
