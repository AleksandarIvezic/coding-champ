import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../Styles/GameMenu.css';

const GameMenu = () => {
  const [collapse, setCollapse] = useState(true);
  const handleClick = () => (collapse ? setCollapse(false) : setCollapse(true));

  return (
    <div className="gameMenu">
      {collapse
        ? (<FontAwesomeIcon className="game-menu-icon" icon={faCog} onClick={handleClick} />)
        : (
          <ul>
            <li>
              <Link className="game-menu-item" to="/play">
                Quit
              </Link>
            </li>
            <li>
              <button className="game-menu-item" type="button" onClick={handleClick}>
                Resume
              </button>
            </li>
          </ul>
        )}

    </div>
  );
};

export default GameMenu;
