import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import GameBoard from './view/GameBoard';
import makeMove from './controller/moveLogic/makeMove';
import undoMove from './model/game/undoMove';
import reset from './model/game/reset';
import GameStartForm from './view/GameStartForm';
import constructGame from './model/game/constructGame';
import currentSnapshot from './model/game/currentSnapshot';

import './othelloApp.css';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    bindAll(this, ['onSquare', 'onReset', 'onUndo', 'onStartGame', 'onDebugState']);
  }

  /////////////////////////////////////////////////
  // Method click_Square
  // delegates to checkMove function
  /////////////////////////////////////////////////
  onSquare(idx) {
    try {
      const state = makeMove(this.state, idx);
      this.setState(state);
    } catch (err) {
      console.error(err);
    }
  }

  onReset() {
    this.setState(reset(this.state));
  }

  onUndo() {
    this.setState(undoMove(this.state));
  }

  onDebugState() {
    console.info(JSON.stringify(this.state, null, 2));
  }

  onStartGame(gameName, nickName, numPlayers) {
    console.info(JSON.stringify({ gameName, nickName, numPlayers }, null, 2));
    let game = constructGame(gameName, nickName, numPlayers);
    console.info(JSON.stringify(game, null, 2));
    this.setState(game);
  }

  render() {
    const gbp = currentSnapshot(this.state);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <GameStartForm onStartGame={this.onStartGame} />
            </div>
            <div className="game col-9">
              <GameBoard
                {...gbp}
                onClick={this.onSquare}
                onReset={this.onReset}
                onUndo={this.onUndo}
                onDebug={this.onDebugState}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
