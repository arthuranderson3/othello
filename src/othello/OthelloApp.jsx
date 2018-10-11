import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import GameBoard from './view/GameBoard';
import currentSnapshot from './model/game/currentSnapshot';
import GameStats, { createGameStats } from './view/GameStats';
import ActionPanel from './view/ActionPanel';
import createActionResetGame from './actions/createActionResetGame';
import createActionUndoMove from './actions/createActionUndoMove';
import createActionDebugState from './actions/createActionDebugState';
import createActionMakeMove from './actions/createActionMakeMove';
import createActionStartGame from './actions/createActionStartGame';
import gameStati from './model/gameBoard/gameStati';
import GameStartForm from './view/GameStartForm';

import './othelloApp.css';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    bindAll(this, 'onReset', 'onUndo', 'onDebugState', 'onMakeMove', 'onStartGame');
  }
  onReset() {
    this.props.store.dispatch(createActionResetGame());
  }
  onUndo() {
    this.props.store.dispatch(createActionUndoMove());
  }
  onDebugState() {
    this.props.store.dispatch(createActionDebugState());
  }
  onMakeMove(idx) {
    this.props.store.dispatch(createActionMakeMove(idx));
  }
  onStartGame(gameName, playerOne, playerTwo) {
    this.props.store.dispatch(createActionStartGame(gameName, playerOne, playerTwo));
  }
  render() {
    const state = this.props.store.getState();
    const { onReset, onUndo, onDebugState, onMakeMove, onStartGame } = this;
    const gameBoard = currentSnapshot(state);
    if (gameBoard.gameStatus === gameStati.GAME_START) {
      return (
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <h4>Othello</h4>
              <GameStartForm onStartGame={onStartGame} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-3">
            <ActionPanel
              title="Othello"
              gameName={state.gameName}
              onReset={onReset}
              onUndo={onUndo}
              onDebugState={onDebugState}
            />
          </div>
          <div className="col-3">
            <GameStats {...createGameStats(state)} />
          </div>
        </div>
        <div className="row game">
          <GameBoard {...gameBoard} onClick={onMakeMove} />
        </div>
      </div>
    );
  }
}
