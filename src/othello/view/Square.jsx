import React from 'react';
import classNames from 'classnames';
import GamePiece from './GamePiece';

const Square = ({ value, validSquare, onClick, idx }) => {
  let classes = classNames('square', 'rounded');
  if (validSquare) {
    classes += ' valid-square';
    return (
      <div className={classes} onClick={() => onClick(idx)}>
        {GamePiece(value)}
      </div>
    );
  }
  return <div className={classes}>{GamePiece(value)} </div>;
};

export default Square;
