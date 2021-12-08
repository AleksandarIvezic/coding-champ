import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlay,
  faRegistered,
  faTasks,
  faUser,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
import ClickOutside from './ClickOutside';
import links from '../Library/links';
import updateArr from '../helpers/updateArr';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Navbar = () => {
  const [state, setState] = useState({});
  const fontAwsIcons = [faHome, faTasks, faCubes, faUser, faPlay, faRegistered];
  const location = useLocation();
  const history = useNavigate();
  const updatedLinks = updateArr(links, fontAwsIcons);
  return (
    <div>
      <ClickOutside
        onClickOutside={() => {
          setState({ expanded: false });
        }}
      >
        <SideNav
          onSelect={(selected) => {
            const to = `/${selected}`;
            if (location.pathname !== to) {
              history(to);
            }
          }}
          expanded={state.expanded}
          onToggle={(expanded) => {
            setState({ expanded });
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            {updatedLinks.map((link) => (
              <NavItem key={link.path} eventKey={link.path}>
                <NavIcon>
                  <FontAwesomeIcon icon={link.icon} />
                </NavIcon>
                <NavText>{link.text}</NavText>
              </NavItem>
            ))}
          </SideNav.Nav>
        </SideNav>
      </ClickOutside>
    </div>

  );
};

export default Navbar;
