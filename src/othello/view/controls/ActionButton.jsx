import React from 'react';
import classNames from 'classnames';

const ActionButton = ({ btnStyle, onClick, text, disabled }) => {
  if (disabled) {
    return (
      <button type="button" className={classNames('btn', `btn-${btnStyle}`)} disabled>
        {text}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={classNames('btn', `btn-${btnStyle}`)}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
export default ActionButton;
