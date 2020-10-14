import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
// import Button from "../Button";

import {
  Nav,
  NavbarContainer,
  Logo,
  NavItemContainer,
  HamburgerMenu,
  NavMenu,
  NavLinks,
  NavItem,
} from "./index.style";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const menuToggle = () => {
    setClick(!click);
  };

  return (
    <Nav>
      <NavbarContainer>
        <Logo to="/">amber</Logo>

        <HamburgerMenu onClick={menuToggle}>
          {click ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
        <NavMenu onClick={menuToggle} click={click}>
          <NavItemContainer>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/blog">Features</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/signin">How it works</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/premium">Help</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/register">Login</NavLinks>
            </NavItem>
          </NavItemContainer>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
