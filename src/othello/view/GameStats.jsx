import React, { Component } from 'react';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';

export default class GameStats extends Component {
  render() {
    return (
      <div>
        <p>
          Score&nbsp;
          <span>{WHITE_CIRCLE}</span>:&nbsp;{9999}&nbsp;
          <span>{BLACK_CIRCLE}</span>:&nbsp;{9999}
        </p>
        <p>
          <span>Turn {this.props.turn}</span>&nbsp;{9999}&nbsp;
        </p>
      </div>
    );
  }
}
