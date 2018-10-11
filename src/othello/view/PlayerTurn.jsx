import React from 'react';
import GamePiece from './GamePiece';

export function createPlayerTurn({ currentPlayer, currentTurn }) {
  return { currentPlayer, currentTurn };
}

const PlayerTurn = ({ currentPlayer, currentTurn }) => (
  <h5>
    <span>Turn:</span> {currentTurn}
    &nbsp;
    <span>Player:</span> {GamePiece(currentPlayer)}
    <br />
  </h5>
);

export default PlayerTurn;
