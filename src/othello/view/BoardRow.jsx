import React, { Component } from 'react';
import Square from './Square';
import toIdx from '../controller/boardTransform/toIdx';

export default class BoardRow extends Component {
  render() {
    return (
      <div className="board-row">
        {this.props.squares.map((square, col) => {
          idx = toIdx( { row: this.props.row, col } );
          return (
            <Square
              key={ idx }
              value={square}
              idx={idx}
              onClick={i => this.props.onClick(i)}
            />
          );
        })}
      </div>
    );
  }
}
