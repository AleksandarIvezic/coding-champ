import React from 'react';
import Countdown from 'react-countdown';
import GameMenu from './GameMenu';
import GameQuestion from './GameQuestion';
import '../Styles/Game.css';
import GameAnswer from './GameAnswer';

const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <span>Time is up! Go on next question!</span>;
  }
  // Render a countdown
  return (
    <span>
      {minutes}
      :
      {seconds}
    </span>
  );
};
const Game = () => (
  <div className="game">
    <header>
      <h1>Chosen category - logo</h1>
      <GameMenu />
    </header>
    <GameQuestion />
    <section className="answers">
      <div className="left-side">
        <GameAnswer answer="Yes" />
        <GameAnswer answer="No" />
      </div>
      <div className="timer">
        <Countdown date={Date.now() + 90000} renderer={renderer} />
      </div>
      <div className="right-side">
        <GameAnswer answer="Maybe" />
        <GameAnswer answer="Probably" />
      </div>
    </section>
  </div>
);

export default Game;
