import React from 'react';
import GamePiece from './GamePiece';

export function createPlayerTurn({ currentPlayer, currentTurn }) {
  return { currentPlayer, currentTurn };
}

const PlayerTurn = ({ currentPlayer, currentTurn }) => (
  <h6>
    <span>Turn:</span> {currentTurn}
    &nbsp;
    <span>{currentPlayer.name}:</span> {GamePiece(currentPlayer.color)}
  </h6>
);

export default PlayerTurn;
