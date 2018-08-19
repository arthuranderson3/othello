import React, { Component } from 'react';
import './OthelloApp.css';
import GameBoard from './view/GameBoard';
import getTurn from './model/stats/getTurn';
import countSquareColor from './model/stats/countSquareColor';
import GameState from './model/GameState';
import getLastBoard from './model/state/getLastBoard';
import checkMove from './controller/moveLogic/checkMove';

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

  render() {
    const gbp = getLastBoard(this.state);
    return (
      <React.Fragment>
        <header>
          <h1 className="h1">Othello</h1>
        </header>
        <div className="game">
          <GameBoard {...gbp} onClick={i => this.click_Square(i)} />
        </div>
      </React.Fragment>
    );
  }
}
