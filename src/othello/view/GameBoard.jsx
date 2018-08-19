import _ from 'lodash';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import GameStats from './GameStats';

export default class GameBoard extends Component {
  render() {
    const rowSquares = _.chunk(this.props.squares, 8);
    const board = rowSquares.map((squares, row) => {
      return (
        <BoardRow
          key={row}
          row={row}
          squares={squares}
          onClick={i => this.props.onClick(i)} />
      );
    });
    return (
      <React.Fragment>
        <div>
          <h5>Othello</h5>
          <button type="button">Reset</button>&nbsp;
          <button type="button">Undo</button>
        </div>
        <div className="game-board">{board}</div>
        <div>
          <GameStats
            { ...this.props }
          />
        </div>
        <React.Fragment>
    );
  }
}
