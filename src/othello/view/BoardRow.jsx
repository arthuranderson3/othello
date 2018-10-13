import some from 'lodash.some';
import map from 'lodash.map';
import React from 'react';
import Square from './Square';
import toIdx from '../controller/boardTransform/toIdx';

const BoardRow = ({ playerType, squares, row, validSquares, onClick }) => (
  <div className="board-row">
    {map(squares, (piece, col) => {
      const idx = toIdx({ row, col });
      if (playerType === 'human' && some(validSquares, i => i === idx)) {
        return (
          <Square key={idx} value={piece} idx={idx} validSquare={true} onClick={i => onClick(i)} />
        );
      }
      return <Square key={idx} value={piece} idx={idx} />;
    })}
  </div>
);

export default BoardRow;
