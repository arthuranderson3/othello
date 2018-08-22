import React, { Component } from 'react';
import './OthelloApp.css';
import GameBoard from './view/GameBoard';
import GameState from './model/GameState';
import getLastBoard from './model/state/getLastBoard';
import checkMove from './controller/moveLogic/checkMove';
import undoMove from './model/state/undoMove';
import resetBoard from './model/state/resetBoard';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    const gs = new GameState();
    this.state = gs;
  }

  click_Square(i) {
    const self = this;
    checkMove(i, self.state)
      .then(state => {
        self.setState(state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  onReset() {
    this.setState(new GameState(resetBoard()));
  }

  onUndo() {
    this.setState(new GameState(undoMove(this.state)));
  }

  render() {
    const gbp = getLastBoard(this.state);
    return (
      <React.Fragment>
        <header>
          <h1 className="h1">Othello</h1>
        </header>
        <div className="game">
          <GameBoard
            {...gbp}
            onClick={i => this.click_Square(i)}
            onReset={() => this.onReset()}
            onUndo={() => this.onUndo()}
          />
        </div>
      </React.Fragment>
    );
  }
}
