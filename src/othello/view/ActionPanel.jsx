import React from 'react';
import ActionButton from './controls/ActionButton';

const ActionPanel = ({
  title,
  subtitle,
  onReset,
  onUndo,
  onDebugState,
  onOptions,
  onReportIssue,
}) => {
  const devMode = process.env.NODE_ENV !== 'production';
  if (devMode) {
    return (
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
        &nbsp;
        <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
        &nbsp;
        <ActionButton btnStyle="secondary" onClick={onReportIssue} text="Report Issue" />
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
      <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
      &nbsp;
      {/* <ActionButton btnStyle="secondary" onClick={onOptions} text="Options" />
      &nbsp; */}
      <ActionButton btnStyle="secondary" onClick={onReportIssue} text="Report Issue" />
      &nbsp;
    </div>
  );
};
export default ActionPanel;
