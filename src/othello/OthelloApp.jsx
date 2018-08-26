import React, { Component } from 'react';
import _ from 'lodash';
import './OthelloApp.css';
import GameBoard from './view/GameBoard';
import GameState from './model/GameState';
import getLastBoard from './model/state/getLastBoard';
import checkMove from './controller/moveLogic/checkMove';
import undoMove from './model/state/undoMove';
import resetBoard from './model/state/resetBoard';
import GameStart from './view/GameStart';
import GameStartForm from './view/GameStartForm';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    const gs = new GameState();
    this.state = gs;

    _.bindAll(this, ['click_Square', 'reset', 'undo', 'start']);
  }

  /////////////////////////////////////////////////
  // Method click_Square
  // delegates to checkMove function
  /////////////////////////////////////////////////
  click_Square(idx) {
    const self = this;
    checkMove(self.state, idx)
      .then(state => {
        console.log(JSON.stringify(state));
        self.setState(state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  reset() {
    this.setState(new GameState(resetBoard()));
  }

  undo() {
    this.setState(new GameState(undoMove(this.state)));
  }

  start(nickName, numPlayers) {
    console.info({ nickName, numPlayers });
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
