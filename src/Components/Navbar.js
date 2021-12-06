import React, { useState } from 'react';
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
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Navbar = () => {
  const [state, setState] = useState({});
  return (
    <div>
      <ClickOutside
        onClickOutside={() => {
          setState({ expanded: false });
        }}
      >
        <SideNav
          expanded={state.expanded}
          onToggle={(expanded) => {
            setState({ expanded });
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="categories">
              <NavIcon>
                <FontAwesomeIcon icon={faTasks} />
              </NavIcon>
              <NavText>Categories</NavText>
            </NavItem>
            <NavItem eventKey="leaderboard">
              <NavIcon>
                <FontAwesomeIcon icon={faCubes} />
              </NavIcon>
              <NavText>Leaderboard</NavText>
            </NavItem>
            <NavItem eventKey="profile">
              <NavIcon>
                <FontAwesomeIcon icon={faUser} />
              </NavIcon>
              <NavText>Profile</NavText>
            </NavItem>
            <NavItem eventKey="play">
              <NavIcon>
                <FontAwesomeIcon icon={faPlay} />
              </NavIcon>
              <NavText>Play</NavText>
            </NavItem>
            <NavItem eventKey="login">
              <NavIcon>
                <FontAwesomeIcon icon={faRegistered} />
              </NavIcon>
              <NavText>Register</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </ClickOutside>
    </div>
  );
};

export default Navbar;
