import React, { Component } from 'react';
import _ from 'lodash';

export default class GameStats extends Component {
  render() {
    const whiteCircle = String.fromCodePoint(9898);
    const blackCircle = String.fromCodePoint(9899);
    const player = this.props.player === 'W' ? whiteCircle : blackCircle;
    const wCount = _.filter(this.props.squares, square => square === 'W')
      .length;
    const bCount = _.filter(this.props.squares, square => square === 'B')
      .length;
    return (
      <div>
        <h6>
          Score&nbsp;
          <span>{whiteCircle}</span>:&nbsp;{wCount}&nbsp;
          <span>{blackCircle}</span>:&nbsp;{bCount}
        </h6>
        <p>
          <span>Turn {this.props.turn}</span>&nbsp;{player}&nbsp;
        </p>
      </div>
    );
  }
}
