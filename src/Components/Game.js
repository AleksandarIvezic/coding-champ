import React from 'react';
import GameMenu from './GameMenu';
import GameQuestion from './GameQuestion';
import '../Styles/Game.css';
import GameAnswer from './GameAnswer';

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
      <div className="right-side">
        <GameAnswer answer="Maybe" />
        <GameAnswer answer="Probably" />
      </div>
    </section>
  </div>
);

export default Game;
