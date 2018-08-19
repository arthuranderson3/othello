import React, { Component } from 'react';

import toIdx from '../controller/boardTransform/toIdx';
import createRowCol from '../controller/boardTransform/createRowCol';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export default class Square extends Component {
  render() {
    let classes = 'square';
    let game_piece = '';

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
        onClick={() => this.props.onClick(this.props.idx)}
      >
        {game_piece}
      </div>
    );
  }
}
