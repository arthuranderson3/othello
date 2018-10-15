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
import createActionOptions from './actions/createActionOptions';
import gameStati from './model/gameBoard/gameStati';
import GameStartForm from './view/GameStartForm';
import Version from './view/Version';
import randomInt from './utility/randomInt';

import './othelloApp.css';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    bindAll(
      this,
      'onReset',
      'onUndo',
      'onDebugState',
      'onMakeMove',
      'onStartGame',
      'onOptions',
      'onComputerMove',
      'randomMove',
      'componentWillUpdate'
    );
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
  componentWillUpdate() {
    const state = this.props.store.getState();
    const snapshot = currentSnapshot(state);
    if (
      snapshot.gameStatus === gameStati.WHITE_TURN ||
      snapshot.gameStatus === gameStati.BLACK_TURN
    ) {
      this.onComputerMove();
    }
  }

  onOptions() {
    this.props.store.dispatch(createActionOptions());
  }

  randomMove() {
    const state = this.props.store.getState();
    const snapshot = currentSnapshot(state);
    if (snapshot.validSquares.length > 0) {
      const idx = randomInt(0, snapshot.validSquares.length - 1);
      this.onMakeMove(snapshot.validSquares[idx]);
    }
  }

  onComputerMove() {
    const state = this.props.store.getState();
    if (state.view.currentPlayer.type === 'computer') {
      setTimeout(this.randomMove, state.view.currentPlayer.delay * 1000);
    }
  }

  render() {
    const state = this.props.store.getState();
    const snapshot = currentSnapshot(state);
    const humanPlayer = state.view.currentPlayer.type === 'human';

    const { onReset, onUndo, onDebugState, onMakeMove, onStartGame, onOptions } = this;
    const gameStats = createGameStats(state);
    if (snapshot.gameStatus === gameStati.GAME_START) {
      return (
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <h2>Othello</h2>
              <GameStartForm onStartGame={onStartGame} />
            </div>
          </div>
        </div>
      );
    }
    const disabled = snapshot.gameStatus === gameStati.GAME_OVER || humanPlayer ? undefined : true;
    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-3">
            <ActionPanel
              title="Othello"
              subtitle={state.name}
              onReset={onReset}
              onUndo={onUndo}
              onDebugState={onDebugState}
              onOptions={onOptions}
              disabled={disabled}
            />
          </div>
          <div className="col-3">
            <GameStats {...gameStats} />
          </div>
        </div>
        <div className="row game">
          <GameBoard snapshot={snapshot} view={gameStats.view} onClick={onMakeMove} />
        </div>
        <div className="row">
          <Version ver={process.env.REACT_APP_OTHELLO_VERSION} />
        </div>
      </div>
    );
  }
}
