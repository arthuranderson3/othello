import React, { Component } from 'react';
import Square from './Square';

export default class BoardRow extends Component {
  render() {
    return (
      <div className="board-row" row={this.props.row}>
        {this.props.squares.map((square, col) => {
          return (
            <Square
              key={this.props.row * 8 + col}
              value={square}
              row={this.props.row}
              col={col}
              onClick={i => this.props.onClick(i)}
            />
          );
        })}
      </div>
    );
  }
}
