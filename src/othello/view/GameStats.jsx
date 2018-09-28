import React, { Component } from 'react';
import { WHITE_CIRCLE, BLACK_CIRCLE } from './circles';
import Score, { createScore } from './Score';
import Turn, { createTurn } from './Turn';
import Player, { createPlayer } from './Player';

export default class GameStats extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log( JSON.stringify(this.props) );
    const score = this.props.score;
    const turn = this.props.currentTurn;
    if (score) {
      return (
        <div>
          <Score {...createScore(this.props)} />
          <Turn {...createTurn(this.props)} />
          <Player {...createPlayer(this.props)} />
        </div>
      );
    }
    return <div> waiting to start game ... </div>;
  }
}
