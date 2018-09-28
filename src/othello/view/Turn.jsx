import React from 'react';
import PropTypes from 'prop-types';

export function createTurn({ currentTurn }) {
  return { currentTurn };
}

const Turn = ({ currentTurn }) => <h3>Turn: {currentTurn}</h3>;

export default Turn;
