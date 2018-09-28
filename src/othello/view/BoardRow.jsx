import some from 'lodash.some';
import map from 'lodash.map';
import React, { Component } from 'react';
import Square from './Square';
import toIdx from '../controller/boardTransform/toIdx';

const BoardRow = ({ squares, row, validSquares, onClick }) => (
  <div className="board-row">
    {map(squares, (piece, col) => {
      const idx = toIdx({ row, col });
      if (some(validSquares, i => i === idx)) {
        return (
          <Square key={idx} value={piece} idx={idx} validSquare={true} onClick={i => onClick(i)} />
        );
      }
      return <Square key={idx} value={piece} idx={idx} />;
    })}
  </div>
);

export default BoardRow;
