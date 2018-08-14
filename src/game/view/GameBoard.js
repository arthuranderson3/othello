import _ from 'lodash';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import GameStats from './GameStats';

export default class GameBoard extends Component {
  render() {
    const rowSquares = _.chunk(this.props.squares, 8);
    const board = rowSquares.map((squares, idx) => {
      return (
        <BoardRow
          key={idx}
          rowid={idx}
          squares={squares}
          onClick={i => this.props.onClick(i)}
        />
      );
    });
    return (
      <div>
        <div>
          <h5>Othello</h5>
          <button type="button">Reset</button>&nbsp;
          <button type="button">Undo</button>
        </div>
        <div className="game-board">{board}</div>
        <div>
          <GameStats
            squares={this.props.squares}
            player={this.props.player}
            turn={this.props.turn}
          />
        </div>
      </div>
    );
  }
}
