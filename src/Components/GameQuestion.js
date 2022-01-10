import React from 'react';
import '../Styles/GameQuestion.css';

const GameQuestion = () => {
  const question = 'Do you now how to make an app?';
  return (
    <div className="game-question">
      <h3>{question}</h3>
    </div>
  );
};

export default GameQuestion;
