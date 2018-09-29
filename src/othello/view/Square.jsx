import React from 'react';
import classNames from 'classnames';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

const Square = ({ value, validSquare, onClick, idx }) => {
  let classes = classNames('square', 'rounded');
  let game_piece = '';
  if (value) {
    game_piece = value === 'W' ? WHITE_CIRCLE : BLACK_CIRCLE;
  }
  if (validSquare) classes += ' valid-square';
  if (onClick === undefined) {
    return <div className={classes}>{game_piece} </div>;
  }
  return (
    <div className={classes} onClick={() => onClick(idx)}>
      {game_piece}
    </div>
  );
};

export default Square;
