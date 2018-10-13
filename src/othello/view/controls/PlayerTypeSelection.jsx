import React from 'react';
import LabeledSelection, { createPairedOptions } from './LabeledSelection';

const PlayerTypeSelection = ({ value, onChange }) => (
  <LabeledSelection
    label="Type"
    value={value}
    onChange={value => onChange(value)}
    options={createPairedOptions([['human', 'Human'], ['computer', 'Computer']])}
  />
);

export default PlayerTypeSelection;
