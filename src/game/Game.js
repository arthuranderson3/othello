import React, { Component } from 'react';
import './game.css';
import GameBoard from './view/GameBoard';
import { checkMove } from './controller/moveLogic';
import { GameState } from './model';
import { getLastBoard } from './model/state/';
import { getTurn, countSquareColor } from './model/stats';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = new GameState();
  }

  render() {
    const gameBoardPieces = getLastBoard(this.state);
    const whiteScore = countSquareColor('W', gameBoardPieces);
    const blackScore = countSquareColor('B', gameBoardPieces);
    const currentTurns = getTurn(this.state);
    return (
      <div>
        <div className="game">
          <GameBoard
            squares={gameBoardPieces.squares}
            player={gameBoardPieces.player}
            turn={currentTurns}
            whiteScore={whiteScore}
            blackScore={blackScore}
            onClick={i => this.click_Square(i)}
          />
        </div>
      </div>
    );
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
}
