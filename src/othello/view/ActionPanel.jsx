import React from 'react';

const ActionPanel = ({ title, onReset, onUndo, onDebugState }) => (
  <div>
    <h1>{title}</h1>
    <button type="button" className="btn btn-dark" onClick={() => onReset()}>
      Reset
    </button>&nbsp;
    <button type="button" className="btn btn-secondary" onClick={() => onUndo()}>
      Undo
    </button>&nbsp;
    <button type="button" className="btn btn-outline-danger" onClick={() => onDebugState()}>
      Debug Log
    </button>
  </div>
);

export default ActionPanel;
