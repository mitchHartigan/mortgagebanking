import React from "react";
import styled from "styled-components";
import { NavLink } from "./NavLink";
import { HomepageContactLink } from "./HomepageContactLink";
import HomepageHomeLink from "./HomepageHomeLink";

export const Menu = (props) => {
  const { toggleMenu, homepage } = props;

  return (
    <Container>
      <HeaderContainer>
        <Title>MortgageBanking.Law</Title>
        <CancelButton onClick={toggleMenu}>x</CancelButton>
      </HeaderContainer>

      <Span></Span>

      <LinkContainer>
        {homepage && <HomepageHomeLink toggleMenu={toggleMenu} />}
        {homepage && <HomepageContactLink toggleMenu={toggleMenu} />}
        {!homepage && (
          <NavLink
            route="/"
            align="flex-start"
            styles={LinkMarginOverride}
            dark
            size="sm"
          >
            Home
          </NavLink>
        )}
        {!homepage && (
          <NavLink
            route="/"
            align="flex-start"
            styles={LinkMarginOverride}
            dark
            size="sm"
            contactLink
          >
            Contact
          </NavLink>
        )}

        <NavLink
          route="/practice-areas"
          align="flex-start"
          styles={LinkMarginOverride}
          dark
          size="sm"
        >
          Practice Areas
        </NavLink>
        <NavLink
          route="/articles"
          align="flex-start"
          styles={LinkMarginOverride}
          dark
          size="sm"
        >
          Articles
        </NavLink>
        <NavLink
          route="/initiatives"
          align="flex-start"
          styles={LinkMarginOverride}
          dark
          size="sm"
        >
          Initiatives
        </NavLink>
        <NavLink
          route="/resources"
          align="flex-start"
          styles={LinkMarginOverride}
          dark
          size="sm"
        >
          Resources
        </NavLink>
      </LinkContainer>
    </Container>
  );
};

const LinkMarginOverride = {
  margin: "15px 0px 15px 0px;",
};

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
  height: 100%;
  width: 40%;
  box-sizing: border-box;
  background-color: white;
  min-width: 250px;
  box-shadow: 1px 2px 4px gray;

  @media (min-width: 1230px) {
    display: none;
  }
`;

const CancelButton = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: 25pt;
  font-weight: normal;
  margin: 0px;
  margin-top: -5px;
  margin-right: 25px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px 0px 0px;
  width: 100%;
`;

const LinkContainer = styled.div`
  margin-left: 5px;
  margin-top: 5px;
`;

const Span = styled.div`
  height: 3px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.mainGold};
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.titleFont};
  font-size: ${(props) => props.theme.text.md};
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: normal;
  text-align: left;
  margin: 0px 0px 0px 15px;
`;
