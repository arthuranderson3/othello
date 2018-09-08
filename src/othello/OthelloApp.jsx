import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import './OthelloApp.css';
import GameBoard from './view/GameBoard';
// import createGameState from './model/state/createGameState';
import getLastBoard from './model/state/getLastBoard';
import makeMove from './controller/moveLogic/makeMove';
import undoMove from './model/state/undoMove';
import resetBoard from './model/state/resetBoard';
import GameStartForm from './view/GameStartForm';
import constructGame from './model/game/constructGame';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    this.state = constructGame();

    bindAll(this, ['click_Square', 'reset', 'undo', 'start', 'debugLog']);
  }

  /////////////////////////////////////////////////
  // Method click_Square
  // delegates to checkMove function
  /////////////////////////////////////////////////
  click_Square(idx) {
    try{
      const state = makeMove( this.state, idx );
      this.setState( state );
    } catch( err ) {
      console.error( err );
    }
  }

  reset() {
    this.setState(resetBoard());
  }

  undo() {
    this.setState(undoMove(this.state));
  }
  debugLog() {
    const debugState = JSON.stringify( this.state );
    console.info( debugState );
  }
  start(nickName, numPlayers) {
    let game = constructGame( "gameName", nickName, numPlayers );
    this.setState(game);
  }

  render() {
    const gbp = getLastBoard(this.state);
    return (
      <React.Fragment>
        <GameStartForm onStartGame={this.start} />
        <div className="game">
          <GameBoard {...gbp} onClick={this.click_Square} onReset={this.reset} onUndo={this.undo} onDebug={this.debugLog} />
        </div>
      </React.Fragment>
    );
  }
}
