import React from "react";
import { NavLink } from "./NavLink";
import { LogoLink } from "./LogoLink";
import { Logo } from "./_Logo";
import styled from "styled-components";
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

const Navbar_ = styled.div.attrs((props) => ({
  style: {
    backgroundColor: `${
      props.scrollPos > 0 || props.alwaysDisplay
        ? props.theme.colors.darkGray
        : "transparent"
    }`,
  },
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2vw 10px 2vw;
  margin-top: 0px;
  box-sizing: border-box;
  transition: background-color 150ms ease-in;
  width: 100%;

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
`;
