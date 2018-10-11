import React from 'react';
import Score, { createScore } from './Score';
import PlayerTurn, { createPlayerTurn } from './PlayerTurn';

export function createGameStats({ view }) {
  return { view };
}

const GameStats = ({ view }) => {
  return (
    <div className="bg-white p-3 rounded">
      <Score {...createScore(view.score)} />
      <PlayerTurn {...createPlayerTurn({ ...view })} />
    </div>
  );
};

export default GameStats;
