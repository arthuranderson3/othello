import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import GameBoard from './view/GameBoard';
import makeMove from './controller/moveLogic/makeMove';
import undoMove from './model/game/undoMove';
import reset from './model/game/reset';
import GameStartForm from './view/GameStartForm';
import constructGame from './model/game/constructGame';
import currentSnapshot from './model/game/currentSnapshot';
import GameStats from './view/GameStats';
import ActionPanel from './view/ActionPanel';
import './othelloApp.css';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    this.state = constructGame();

    bindAll(this, ['onSquare', 'onReset', 'onUndo', 'onStartGame', 'onDebugState']);
  }

  /////////////////////////////////////////////////
  // Method click_Square
  // delegates to checkMove function
  /////////////////////////////////////////////////
  onSquare(idx) {
    try {
      this.setState(makeMove(this.state, idx));
    } catch (err) {
      console.error(err);
    }
  }

  onReset() {
    if (this.state.view) {
      this.setState(reset(this.state));
    }
  }

  onUndo() {
    this.setState(undoMove(this.state));
  }

  onDebugState() {
    console.info(JSON.stringify(this.state, null, 2));
  }

  onStartGame(gameName, nickName, numPlayers) {
    // console.info(JSON.stringify({ gameName, nickName, numPlayers }, null, 2));
    let game = constructGame(gameName, nickName, numPlayers);
    console.info(JSON.stringify(game, null, 2));
    this.setState(game);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3-md col-12-xs">
            <ActionPanel
              title="Othello"
              onReset={this.onReset}
              onUndo={this.onUndo}
              onDebugState={this.onDebugState}
            />
            <GameStats {...this.state.view} />
            <GameStartForm onStartGame={this.onStartGame} />
          </div>
          <div className="game col-9-md col-12-xs">
            <GameBoard {...currentSnapshot(this.state)} onClick={this.onSquare} />
          </div>
        </div>
      </div>
    );
  }
}
