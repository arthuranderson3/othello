import React, { Component } from 'react';

import { toIdx, createRowCol } from '../controller/boardTransform';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export default class Square extends Component {
  render() {
    let classes = 'square';
    let game_piece = '';

    const idx = toIdx(createRowCol(this.props));
    if (this.props.value) {
      if (this.props.value === 'W') {
        //classes += ' square-white';
        game_piece = WHITE_CIRCLE;
      } else {
        //classes += ' square-black';
        game_piece = BLACK_CIRCLE;
      }
    }

    return (
      <div
        className={classes}
        rowid={this.props.rowid}
        colid={this.props.colid}
        onClick={() => this.props.onClick(idx)}
      >
        {game_piece}
      </div>
    );
  }
}
