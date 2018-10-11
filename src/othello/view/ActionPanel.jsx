import React from 'react';
import ActionButton from './controls/ActionButton';

const ActionPanel = ({ title, onReset, onUndo, onDebugState }) => {
  const devMode = process.env.NODE_ENV !== 'production';
  if (devMode) {
    return (
      <div>
        <h2>{title}</h2>
        <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
        &nbsp;
        <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
        &nbsp;
        <ActionButton btnStyle="outline-danger" onClick={onDebugState} text="Debug Log" />
      </div>
    );
  }
  return (
    <div>
      <h2>{title}</h2>
      <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
      &nbsp;
      <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
    </div>
  );
};
export default ActionPanel;
