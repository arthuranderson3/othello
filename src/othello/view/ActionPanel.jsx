import React from 'react';
import ActionButton from './controls/ActionButton';

const ActionPanel = ({ title, onReset, onUndo, onDebugState }) => (
  <div>
    <h1>{title}</h1>
    <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
    &nbsp;
    <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
    &nbsp;
    <ActionButton btnStyle="outline-danger" onClick={onDebugState} text="Debug Log" />
  </div>
);

export default ActionPanel;
