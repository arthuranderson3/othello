import React, { Component } from 'react';
import Score, { createScore } from './Score';
import Turn, { createTurn } from './Turn';
import Player, { createPlayer } from './Player';

const GameStats = ({ score, currentTurn, currentPlayer }) => {
  if (score) {
    return (
      <div>
        <Score {...createScore({ score })} />
        <Turn {...createTurn({ currentTurn })} />
        <Player {...createPlayer({ currentPlayer })} />
      </div>
    );
  }
  return <div> waiting to start game ... </div>;
};

export default GameStats;
