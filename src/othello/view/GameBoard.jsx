import chunk from 'lodash.chunk';
import map from 'lodash.map';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import GameStats from './GameStats';
import { toSquaresArray } from '../model/gameBoardPieces';

export default class GameBoard extends Component {
  render() {
    const sq = toSquaresArray(this.props);
    const rowSquares = chunk(sq.squaresArr, 8);
    const board = _.map(rowSquares, (squares, row) => {
      return (
        <BoardRow
          key={row}
          squares={squares}
          row={row}
          validSquares={this.props.validSquares}
          onClick={i => this.props.onClick(i)} />
      );
    });
    return (
      <div>
        <div>
          <h5>Othello</h5>
          <button type="button" onClick={() => this.props.onReset()}>
            Reset
          </button>&nbsp;
          <button type="button" onClick={() => this.props.onUndo()}>
            Undo
          </button>
          <button type="button" onClick={() => this.props.onDebug()}>
            Debug Log
          </button>
        </div>
        <div className="game-board">{board}</div>
        <div>
          <GameStats {...this.props} />
        </div>
      </div>
    );
  }
}
