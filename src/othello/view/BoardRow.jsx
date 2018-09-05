import some from 'lodash.some';
import map from 'lodash.map';
import React, { Component } from 'react';
import Square from './Square';
import toIdx from '../controller/boardTransform/toIdx';

export default class BoardRow extends Component {
  render() {
    //console.log( this.props.validSquares );
    return (
      <div className="board-row">
        { map( this.props.squares, (piece, col) => {
          const idx = toIdx({ row: this.props.row, col });

          if( some( this.props.validSquares, i => i === idx ) ) {
            return <Square
              key={idx}
              value={piece}
              idx={idx}
              validSquare={true}
              onClick={i => this.props.onClick(i)} />
          }

          return <Square
            key={idx}
            value={piece}
            idx={idx} />
        })
        }
      </div>
    );
  }
}
