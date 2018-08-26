import React, { Component } from 'react';

import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export default class Square extends Component {
  render() {
    let classes = 'square';
    let game_piece = '';

    // we have 3 values { undefined, W, B }
    if (this.props.value) {
      if (this.props.value === 'W') {
        game_piece = WHITE_CIRCLE;
      } else {
        game_piece = BLACK_CIRCLE;
      }
    }
    return (
      <div className={classes} onClick={() => this.props.onClick(this.props.idx)}>
        {game_piece}
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    const { value } = this.props;
    return value !== nextProps.value;
  }
}
