import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import './OthelloApp.css';
import GameBoard from './view/GameBoard';
import makeMove from './controller/moveLogic/makeMove';
import undoMove from './model/game/undoMove';
import resetBoard from './model/game/resetBoard';
import GameStartForm from './view/GameStartForm';
import constructGame from './model/game/constructGame';
import currentSnapshot from './model/game/currentSnapshot';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    this.state = constructGame();

    bindAll(this, ['click_Square', 'reset', 'undo', 'startGame', 'debugState']);
  }

  /////////////////////////////////////////////////
  // Method click_Square
  // delegates to checkMove function
  /////////////////////////////////////////////////
  click_Square(idx) {
    try {
      const state = makeMove(this.state, idx);
      this.setState(state);
    } catch (err) {
      console.error(err);
    }
  }

  reset() {
    this.setState(resetBoard());
  }

  undo() {
    this.setState(undoMove(this.state));
  }

  debugState() {
    console.info(JSON.stringify(this.state, null, 2));
  }

  startGame(nickName, numPlayers) {
    let game = constructGame('gameName', nickName, numPlayers);
    this.setState(game);
  }

  render() {
    const gbp = currentSnapshot( this.state );
    return (
      <React.Fragment>
        <GameStartForm onStartGame={this.startGame} />
        <div className="game">
          <GameBoard
            {...gbp}
            onClick={this.click_Square}
            onReset={this.reset}
            onUndo={this.undo}
            onDebug={this.debugLog}
          />
        </div>
      </React.Fragment>
    );
  }
}
