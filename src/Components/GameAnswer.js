import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/GameAnswer.css';

const GameAnswer = ({ answer }) => {
  const gameAnswer = answer;
  return (

    <button className="game-answer" type="button">
      {gameAnswer}
    </button>

  );
};

export default GameAnswer;

GameAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
};
