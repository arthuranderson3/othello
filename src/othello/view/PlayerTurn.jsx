import React from 'react';
import GamePiece from './GamePiece';

export function createPlayerTurn({ currentPlayer, currentTurn }) {
  return { currentPlayer, currentTurn };
}

const PlayerTurn = ({ currentPlayer, currentTurn }) => (
  <div>
    <h6>
      Turn: {currentTurn} Player: {GamePiece(currentPlayer)}
    </h6>
    <svg
      viewBox="0 0 100 100"
      height="40px"
      width="40px"
      background="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="40" fill="white" stroke="#888888" strokeWidth="2%" />
    </svg>
  </div>
);

export default PlayerTurn;
