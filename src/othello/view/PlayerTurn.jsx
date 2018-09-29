import React from 'react';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export function createPlayerTurn({ currentPlayer, currentTurn }) {
  return { currentPlayer, currentTurn };
}

const PlayerTurn = ({ currentPlayer, currentTurn }) => (
  <h6>
    Turn: {currentTurn} Player: {currentPlayer === 'W' ? WHITE_CIRCLE : BLACK_CIRCLE}
  </h6>
);

export default PlayerTurn;
