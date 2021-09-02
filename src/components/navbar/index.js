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
          <NavLink route="/" exact width="20%">
            Contact Us
          </NavLink>
          <NavLink route="/casestudies" width="20%">
            Case Studies
          </NavLink>
          <LogoLink route="/" exact>
            <Logo />
          </LogoLink>
          <NavLink route="/chloramineboostingsystem" width="20%">
            Chloramine Boosting System
          </NavLink>
          <NavLink route="/tidalwavemixer" width="20%">
            Tidal Wave Mixer
          </NavLink>
        </Navbar_>
      </Container>
    );
  }
}

const Navbar_ = styled.div.attrs((props) => ({
  style: {
    opacity: `${props.scrollPos > 0 || props.alwaysDisplay ? "1" : "0"}`,
    pointerEvents: `${
      props.scrollPos || props.alwaysDisplay > 0 ? "initial" : "none"
    }`,
    userSelect: `${
      props.scrollPos > 0 || props.alwaysDisplay ? "initial" : "none"
    }`,
  },
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vh 2vw 0.5vh 2vw;
  margin-top: 1.5vh;
  transition: opacity 150ms ease-in;
  border-radius: 3px;
  background-color: white;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.25);
  z-index: 10;

  @media (max-width: 1700px) {
    padding: 0.5vh 4vw 0.5vh 5vw;
  }

  @media (max-width: 1600px) {
    width: 90%;
  }

  @media (max-width: 1230px) {
    display: none;
  }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: 1230px) {
    justify-content: flex-start;
  }
`;
