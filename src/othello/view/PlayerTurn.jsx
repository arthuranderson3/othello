import React from 'react';
import GamePiece from './GamePiece';

export function createPlayerTurn({ currentPlayer, currentTurn }) {
  return { currentPlayer, currentTurn };
}

const PlayerTurn = ({ currentPlayer, currentTurn }) => (
  <h6>
    Turn: {currentTurn} Player: {GamePiece(currentPlayer)}
  </h6>
);

export default PlayerTurn;
