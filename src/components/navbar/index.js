import React from "react";
import styled, { keyframes, css } from "styled-components";

import { NavLink } from "./NavLink";
import { LogoLink } from "./LogoLink";
import { Logo } from "./_Logo";
import { Hamburger } from "./_Hamburger";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this._captureScrollPos);
  }

  _captureScrollPos = () => {
    this.setState({ scrollPos: window.pageYOffset });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this._captureScrollPos);
  }

  render() {
    return (
      <Container>
        <Hamburger />
        <Navbar_
          scrollPos={this.state.scrollPos}
          alwaysDisplay={this.props.alwaysDisplay}
          fadeIn={this.props.fadeIn}
        >
          {""}
          <LogoLink route="/" exact>
            <Logo />
          </LogoLink>
          {""}
          <NavLinkContainer>
            <NavLink route="/" exact width="20%">
              Contact
            </NavLink>
            <NavLink route="/practice-areas" width="20%">
              Practice Areas
            </NavLink>
            <NavLink route="/resources" width="20%">
              Resources
            </NavLink>
            <NavLink route="/initiatives" width="20%">
              Initiatives
            </NavLink>
          </NavLinkContainer>
          {""}
        </Navbar_>
      </Container>
    );
  }
}

const fadeInAnimation = keyframes`
  from { 
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Navbar_ = styled.div.attrs((props) => ({
  style: {
    backgroundColor: `${
      props.scrollPos > 0 || props.alwaysDisplay
        ? props.theme.colors.darkBlue
        : "transparent"
    }`,
  },
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 15px;
  margin-top: 0px;
  opacity: ${(props) => (props.fadeIn ? "0" : "1")};
  box-sizing: border-box;
  transition: background-color 150ms ease-in;
  width: 100%;
  animation: ${(props) =>
    props.fadeIn
      ? css`
          ${fadeInAnimation} 300ms ease-in
        `
      : ""};

  animation-delay: 1s;
  animation-fill-mode: forwards;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  z-index: 999;

  @media (max-width: 1230px) {
    justify-content: flex-start;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  margin-top: -3px;
`;
