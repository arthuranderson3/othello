import React from 'react';
import classNames from 'classnames';

const Version = ({ ver }) => {
  let classes = classNames('text-center');
  return (
    <div>
      <p className={classes}>
        Version <span className="font-italic">{ver}</span>
      </p>
    </div>
  );
};

export default Version;
