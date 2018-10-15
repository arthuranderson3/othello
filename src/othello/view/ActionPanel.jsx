import React from 'react';
import ActionButton from './controls/ActionButton';

const ActionPanel = ({ title, subtitle, onReset, onUndo, onDebugState, onOptions, disabled }) => {
  // const classes = disabled ? 'btn btn-secondary disabled' : 'btn btn-secondary';
  const classes = 'btn btn-secondary';
  const devMode = process.env.NODE_ENV !== 'production';
  const reportIssue = process.env.REACT_APP_REPORT_ISSUE_URL;
  if (devMode) {
    return (
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
        &nbsp;
        <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" disabled={disabled} />
        &nbsp;
        <a href={reportIssue} className={classes}>
          Report Issue
        </a>
        &nbsp;
        <ActionButton btnStyle="outline-danger" onClick={onDebugState} text="Debug Log" />
      </div>
    );
  }
  return (
    <div>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
      &nbsp;
      <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" disabled={disabled} />
      &nbsp;
      {/* <ActionButton btnStyle="secondary" onClick={onOptions} text="Options" />
      &nbsp; */}
      <a href={reportIssue} className={classes}>
        Report Issue
      </a>
      &nbsp;
    </div>
  );
};
export default ActionPanel;
