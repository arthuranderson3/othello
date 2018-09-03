import _ from 'lodash';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import GameStats from './GameStats';
import { toSquaresArray } from '../model/gameBoardPieces';

export default class GameBoard extends Component {
  render() {
    const squaresArr = toSquaresArray(this.props);
    const rowSquares = _.chunk(squaresArr, 8);
    const board = _.map(rowSquares, (squares, row) => {
      return (
        <BoardRow key={row} squares={squares} row={row} onClick={i => this.props.onClick(i)} />
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
        </div>
        <div className="game-board">{board}</div>
        <div>
          <GameStats {...this.props} />
        </div>
      </div>
    );
  }
}
