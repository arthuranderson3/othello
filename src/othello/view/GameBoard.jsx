import chunk from 'lodash.chunk';
import map from 'lodash.map';
import reduce from 'lodash.reduce';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import GameStats from './GameStats';
import { toSquaresArray } from '../model/gameBoard';

export default class GameBoard extends Component {
  render() {
    const sq = toSquaresArray(this.props);
    const rowSquares = chunk(sq.squaresArr, 8);
    const board = map(rowSquares, (squares, row) => {
      return (
        <BoardRow
          key={row}
          squares={squares}
          row={row}
          validSquares={this.props.validSquares}
          onClick={i => this.props.onClick(i)}
        />
      );
    });
    return (
      <div>
        <div className="game-header">
          <h1>Othello</h1>
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
        <div className="game-footer">
          <GameStats {...this.props} />
        </div>
      </div>
    );
  }
}
