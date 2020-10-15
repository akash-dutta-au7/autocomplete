import styled from "styled-components";
import { Container } from "../../index.globalStyle";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  @media screen and (max-width: 760px) {
    margin-bottom: -5rem;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 12rem;
    height: 3rem;
    margin-top: 1rem;
    @media screen and (max-width: 840px) {
      margin-top: 0.1rem;
    }
  }
`;

export const Img = styled.img`
  background: url("https://static-assets-amberstudent.imgix.net/images/logo/amber_logo_full.png");
  z-index: 4;
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 0.5rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    width: 100%;
    height: 100vh;
    left: ${({ click }) => (click ? "-5%" : "-120%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #828387;
    /* margin-left: -8rem; */
    cursor: pointer;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  font-size: 1rem;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%auto;
  }
  &:hover {
    border: none;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: grid;
    margin-left: -4rem;
    opacity: 0.5;
  }
`;
export const NavLinks = styled(Link)`
  color: #d3d3d3;
  display: flex;
  font-family: sans-serif;
  /* justify-content: center; */
  font-size: 1.3rem !important;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: white;
  }
  &:hover {
    color: #ffffff;
  }
`;
