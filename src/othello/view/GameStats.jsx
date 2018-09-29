import React from 'react';
import Score, { createScore } from './Score';
import PlayerTurn, { createPlayerTurn } from './PlayerTurn';

const GameStats = ({ score, currentTurn, currentPlayer, lastTurnTime }) => {
  return (
    <div className="bg-white p-3 rounded">
      <Score {...createScore(score)} />
      <PlayerTurn {...createPlayerTurn({ currentPlayer, currentTurn })} />
    </div>
  );
};

export default GameStats;
