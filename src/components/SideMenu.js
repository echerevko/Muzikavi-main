//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Close from "../images/icn_Close.png";
import Down from "../images/icn_Arrow_Down.png";
import EngSwe from "../images/English-Swedish.png";

import styled from "styled-components";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "../style/SideMenu.css";

const MenuButton = styled.img`
  width: 50px;
  margin-right: 30px;
  margin-top: -30px;
`;

const Header = (props) => {
  // create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  useEffect(() => {
    menuIconClick();
  }, [props.menuCollapse]);

  const menuIconClick = () => {
    // condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              <MenuButton onClick={menuIconClick} src={Close} alt="Close" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true}>
                LABEL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp;&nbsp; <img src={Down} alt="Muzikawi" />
              </MenuItem>
              <MenuItem>PUBLISHING</MenuItem>
              <Link variant="body2" to="/studio" href="/studio">
                <MenuItem>STUDIO</MenuItem>
              </Link>
              <MenuItem>LIVE & CLOSEUP</MenuItem>
              <MenuItem>PODCAST</MenuItem>
              <MenuItem>ABOUT</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem>
                <img src={EngSwe} alt="EngSwe" />
              </MenuItem>
              {/* <MenuItem icon={<AppIcon />}>Logout</MenuItem> */}
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
