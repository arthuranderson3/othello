import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import './OthelloApp.css';
import GameBoard from './view/GameBoard';
import createGameState from './model/state/createGameState';
import getLastBoard from './model/state/getLastBoard';
import checkMove from './controller/moveLogic/checkMove';
import undoMove from './model/state/undoMove';
import resetBoard from './model/state/resetBoard';
import GameStartForm from './view/GameStartForm';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    this.state = createGameState();

    bindAll(this, ['click_Square', 'reset', 'undo', 'start']);
  }

  /////////////////////////////////////////////////
  // Method click_Square
  // delegates to checkMove function
  /////////////////////////////////////////////////
  click_Square(idx) {
    const self = this;
    checkMove(self.state, idx)
      .then(state => {
        //console.log(JSON.stringify(state));
        self.setState(state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  reset() {
    const newState = resetBoard();
    this.setState(newState);
  }

  undo() {
    const newState = undoMove(this.state);
    this.setState(newState);
  }

  start(nickName, numPlayers) {
    //console.info({ nickName, numPlayers });
    let game = constructGame( numPlayers, nickName );
    console.info( game );
  }

  render() {
    const gbp = getLastBoard(this.state);
    return (
      <React.Fragment>
        <header>
          <h1 className="h1">Othello</h1>
        </header>
        <GameStartForm onStartGame={this.start} />
        <div className="game">
          <GameBoard {...gbp} onClick={this.click_Square} onReset={this.reset} onUndo={this.undo} />
        </div>
      </React.Fragment>
    );
  }
}
