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
  console.info(process.env);
  const devMode = process.env.NODE_ENV !== 'production';
  const reportIssue = process.env.REACT_APP_REPORT_ISSUE_URL;
  if (devMode) {
    return (
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ActionButton btnStyle="dark" onClick={onReset} text="Reset" />
        &nbsp;
        <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
        &nbsp;
        <a href={reportIssue} className="btn btn-secondary">
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
      <ActionButton btnStyle="secondary" onClick={onUndo} text="Undo" />
      &nbsp;
      {/* <ActionButton btnStyle="secondary" onClick={onOptions} text="Options" />
      &nbsp; */}
      <a href={reportIssue} className="btn btn-secondary">
        Report Issue
      </a>
      &nbsp;
    </div>
  );
};
export default ActionPanel;
