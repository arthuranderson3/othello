import React, { Component } from 'react';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';
import countSquareColor from '../model/stats/countSquareColor';

export default class GameStats extends Component {
  render() {
    const whiteScore = countSquareColor('W', this.props);
    const blackScore = countSquareColor('B', this.props);
    const player_turn = this.props.player === 'W' ? WHITE_CIRCLE : BLACK_CIRCLE;
    return (
      <div>
        <p>
          Score&nbsp;
          <span>{WHITE_CIRCLE}</span>:&nbsp;{whiteScore}&nbsp;
          <span>{BLACK_CIRCLE}</span>:&nbsp;{blackScore}
        </p>
        <p>
          <span>Turn {this.props.turn}</span>&nbsp;{player_turn}&nbsp;
        </p>
      </div>
    );
  }
}
