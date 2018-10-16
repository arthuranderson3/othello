import React from 'react';
import Score, { createScore } from './Score';
import PlayerTurn, { createPlayerTurn } from './PlayerTurn';
import Victory, { createVictory } from './Victory';
import gameStati from '../model/gameBoard/gameStati';
import copyPlayerArray from '../model/player/copyPlayerArray';

export function createGameStats({ players, view }) {
  return {
    players: copyPlayerArray(players),
    view,
  };
}

const GameStats = stats => {
  const { view } = stats;
  if (view.gameStatus === gameStati.GAME_OVER) {
    return (
      <div className="bg-success p-3 rounded">
        <Victory {...createVictory(stats)} />
      </div>
    );
  }
  return (
    <div className="bg-white p-3 rounded">
      <Score {...createScore(view.score)} />
      <PlayerTurn {...createPlayerTurn({ ...view })} />
    </div>
  );
};

export default GameStats;
