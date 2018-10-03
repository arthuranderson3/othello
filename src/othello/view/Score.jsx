import React from 'react';

import { WHITE_CIRCLE, BLACK_CIRCLE } from './GamePiece';

export function createScore({ white, black }) {
  return { white, black };
}

const Score = ({ white, black }) => (
  <React.Fragment>
    <h4>Score:</h4>
    <h5>
      <span className="circleFont">{WHITE_CIRCLE}</span>&nbsp;{white}&nbsp;
      <span className="circleFont">{BLACK_CIRCLE}</span>&nbsp;{black}
    </h5>
  </React.Fragment>
);

export default Score;
