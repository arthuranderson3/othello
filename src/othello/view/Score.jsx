import React from 'react';

import { WHITE_CIRCLE, BLACK_CIRCLE } from './GamePiece';

export function createScore({ white, black }) {
  return { white, black };
}

const Score = ({ white, black }) => (
  <h6>
    Score:&nbsp;
    <span>{WHITE_CIRCLE}</span>&nbsp;{white}&nbsp;
    <span>{BLACK_CIRCLE}</span>&nbsp;{black}
  </h6>
);

export default Score;
