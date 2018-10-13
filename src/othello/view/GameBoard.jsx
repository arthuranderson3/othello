import chunk from 'lodash.chunk';
import React from 'react';
import BoardRow from './BoardRow';
import { toSquaresArray } from '../model/gameBoard';

function createBoard({ snapshot, view, onClick }) {
  // console.log({snapshot, view});
  const sq = toSquaresArray(snapshot);
  const rowSquares = chunk(sq.squaresArr, 8);
  return rowSquares.map((squares, row) => {
    return (
      <BoardRow
        key={row}
        squares={squares}
        row={row}
        playerType={view.currentPlayer.type}
        validSquares={snapshot.validSquares}
        onClick={i => onClick(i)}
      />
    );
  });
}
const GameBoard = ({ snapshot, view, onClick }) => (
  <div className="game-board shadow-lg">{createBoard({ snapshot, view, onClick })}</div>
);

export default GameBoard;
