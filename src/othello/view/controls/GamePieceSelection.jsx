import React from 'react';
import LabeledSelection, { createPairedOptions } from './LabeledSelection';

const GamePieceSelection = ({ value, onChange }) => (
  <LabeledSelection
    label="Game piece"
    value={value}
    onChange={e => onChange(e.target.value)}
    options={createPairedOptions([['W', 'White'], ['B', 'Black']])}
  />
);

export default GamePieceSelection;
