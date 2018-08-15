import React, { Component } from 'react';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export default class GameStats extends Component {
  render() {
    const player_turn = this.props.player === 'W' ? WHITE_CIRCLE : BLACK_CIRCLE;
    return (
      <div>
        <h6>
          Score&nbsp;
          <span>{WHITE_CIRCLE}</span>:&nbsp;{this.props.whiteScore}&nbsp;
          <span>{BLACK_CIRCLE}</span>:&nbsp;{this.props.blackScore}
        </h6>
        <p>
          <span>Turn {this.props.turn}</span>&nbsp;{player_turn}&nbsp;
        </p>
      </div>
    );
  }
}
