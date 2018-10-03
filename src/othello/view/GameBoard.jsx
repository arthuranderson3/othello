import chunk from 'lodash.chunk';
import map from 'lodash.map';
import React from 'react';
import BoardRow from './BoardRow';
import { toSquaresArray } from '../model/gameBoard';

function createBoard(props) {
  const sq = toSquaresArray(props);
  const rowSquares = chunk(sq.squaresArr, 8);
  return map(rowSquares, (squares, row) => {
    return (
      <BoardRow
        key={row}
        squares={squares}
        row={row}
        validSquares={props.validSquares}
        onClick={i => props.onClick(i)}
      />
    );
  });
}
const GameBoard = props => <div className="game-board shadow-lg">{createBoard(props)}</div>;

export default GameBoard;
