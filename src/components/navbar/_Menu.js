import React from "react";
import styled from "styled-components";
import { NavLink } from "./NavLink";

export const Menu = (props) => {
  const { toggleMenu } = props;

  return (
    <Container>
      <HeaderContainer>
        <Title>Big Wave Water</Title>
        <CancelButton onClick={toggleMenu}>x</CancelButton>
      </HeaderContainer>

      <Span></Span>

      <LinkContainer>
        <NavLink route="/" align="flex-start" styles={LinkMarginOverride}>
          Contact Us
        </NavLink>
        <NavLink
          route="/casestudies"
          align="flex-start"
          styles={LinkMarginOverride}
        >
          Case Studies
        </NavLink>
        <NavLink
          route="/tidalwavemixer"
          align="flex-start"
          styles={LinkMarginOverride}
        >
          Tidal Wave Mixer
        </NavLink>
        <NavLink
          route="/chloramineboostingsystem"
          align="flex-start"
          styles={LinkMarginOverride}
        >
          Chloramine Boosting System
        </NavLink>
      </LinkContainer>
    </Container>
  );
};

const LinkMarginOverride = {
  margin: "10px 0px 10px 0px;",
};

const BlurContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: fixed;
  display: flex
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
  height: 100%;
  width: 35%;
  box-sizing: border-box;
  background-color: white;
  min-width: 250px;
  box-shadow: 1px 2px 4px gray;

  @media (min-width: 1230px) {
    display: none;
  }

`;

const CancelButton = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: 25pt;
  font-weight: normal;
  margin: 0px;
  margin-top: -5px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px 0px 0px;
`;

const LinkContainer = styled.div`
  margin-left: 5px;
  margin-top: 5px;
`;

const Span = styled.div`
  height: 3px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.md};
  color: ${(props) => props.theme.colors.darkBlue};
  font-weight: normal;
  text-align: left;
  margin: 0px 0px 0px 15px;
`;
