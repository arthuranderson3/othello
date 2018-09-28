import React from 'react';
import PropTypes from 'prop-types';

import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export function createScore({ score }) {
  return { score };
}

const Score = ({ score }) => (
  <div>
    <h3>Score</h3>
    <h4>
      <span>{WHITE_CIRCLE}</span>:&nbsp;{score.white}&nbsp;
      <span>{BLACK_CIRCLE}</span>:&nbsp;{score.black}
    </h4>
  </div>
);

export default Score;
