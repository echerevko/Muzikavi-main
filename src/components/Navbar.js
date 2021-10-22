import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../images/img_Logo_160.png";
import AppIcon from "../images/Global_Normal.png";
import Menu from "../images/icn_Menu.png";
import { makeStyles } from "@material-ui/core/styles";
//import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import { FiMenu } from "react-icons/fi";
import "../style/navbarStyle.css";

const Container = styled.div`
  height: 96px;
  left: 0px;
  top: 0px;
  background-color: #ee2624;
  position: absolute;
  z-index: 99;
  width: 100%;
`;
const BigNav = styled.div`
  display: grid;
  grid-template-columns: 10% 5% 55% 10%;
  //column-gap: 0px ;

  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;
const Links = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  max-width: 728px;
  flex-wrap: nowrap;
  margin-right: -50px;

  align-self: center;
  justify-self: self-end;
  align-content: center;

  right: 0em;
  position: relative;
  grid-column-start: 3;
  grid-column-end: 4;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 160px;
  height: 56px;
  margin-left: 40px;
  grid-column-start: 1;

  @media (max-width: 1000px) {
    border-style: dashed;
    border-width: 2px;
    border-color: white;
    padding: 5px;
  }
  @media (max-width: 600px) {
    margin-left: 20px;
    padding: 5px;
  }
`;
const HeaderImg = styled.img`
  width: 40px;
  height: 40px;
  grid-column-start: 4;
  grid-column-end: 4;
  justify-self: left;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  margin-left: 40px;
  @media (max-width: 1100px) {
    margin-left: 20px;
  }
`;

const MenuButton = styled.img`
  position: absolute;
  width: 65px;
  display: none;
  right: 1.5em;
  top: 0.6em;
  @media (max-width: 1000px) {
    display: block;
  }
`;

function Navbar() {
  const preventDefault = (event) => event.preventDefault();
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuClick = () => {
    // condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <Container>
      <SideMenu className="sideMenu" menuCollapse={menuCollapse} />
      <BigNav>
        <Link to="/" variant="body2">
          <Logo src={AppLogo} alt="Muzikawi" />
        </Link>

        <Links>
          <StyledLink href="#" onClick={preventDefault}>
            LABEL
          </StyledLink>
          <StyledLink
            variant="body2"
            href="#"
            onClick={preventDefault}
            color="inherit"
          >
            PUBLISHING
          </StyledLink>
          <StyledLink variant="body2" to="/studio" href="/studio">
            STUDIO
          </StyledLink>
          <StyledLink variant="body2" href="#" onClick={preventDefault}>
            LIVE & CLOSEUP
          </StyledLink>
          <StyledLink variant="body2" href="#" onClick={preventDefault}>
            PODCAST
          </StyledLink>
          <StyledLink variant="body2" href="#" onClick={preventDefault}>
            ABOUT
          </StyledLink>
        </Links>
        <HeaderImg src={AppIcon} alt="Global Normal" />

        <MenuButton onClick={menuClick} src={Menu} alt="Close"></MenuButton>
      </BigNav>
    </Container>
  );
}

export default Navbar;
