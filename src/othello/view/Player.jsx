import React from 'react';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export function createPlayer({ currentPlayer }) {
  return { currentPlayer };
}

const Player = ({ currentPlayer }) => (
  <h3>Player: {currentPlayer === 'W' ? WHITE_CIRCLE : BLACK_CIRCLE}</h3>
);

export default Player;
