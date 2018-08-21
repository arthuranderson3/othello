import React, { Component } from 'react';

import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export default class Square extends Component {
  render() {
    let classes = 'square';
    let game_piece = '';

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
  componentWillMount() {
    this.style = { backgroundColor: '#CCC' };
  }

  componentWillUpdate() {
    this.style = null;
  }

  shouldComponentUpdate(nextProps) {
    const { value } = this.props;
    return value !== nextProps.value;
  }
}
