import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdHelpBuoy, IoMdLogIn } from "react-icons/io";

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
        <Logo to="/">
          <img
            src="https://static-assets-amberstudent.imgix.net/images/logo/amber_logo_full.png"
            alt=""
          />
        </Logo>

        <HamburgerMenu onClick={menuToggle}>
          {click ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
        <NavMenu onClick={menuToggle} click={click}>
          <NavItemContainer>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks>Features</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks>
                {" "}
                <AiOutlineQuestionCircle />{" "}
                <span style={{ marginLeft: ".5rem" }}>How it works</span>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks>
                <IoMdHelpBuoy />
                <span style={{ marginLeft: ".5rem" }}>Help</span>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks>
                <IoMdLogIn />
                <span style={{ marginLeft: ".5rem" }}>Login</span>
              </NavLinks>
            </NavItem>
          </NavItemContainer>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
