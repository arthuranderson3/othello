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
import gameStati from './model/gameBoard/gameStati';

import './othelloApp.css';

export default class OthelloApp extends Component {
  constructor(props) {
    super(props);
    bindAll(this, 'onReset', 'onUndo', 'onDebugState', 'onMakeMove');
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
  onStartGame() {
    this.props.store.dispatch(createActionStartGame());
  }
  render() {
    const state = this.props.store.getState();
    const { onReset, onUndo, onDebugState, onMakeMove } = this;
    if (state.gameState === gameStati.GAME_START) {
      return (
        <div className="container">
          <div className="row">
            <GameStartForm onStartGame={this.onStartGame} />
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ActionPanel
              title="Othello"
              onReset={onReset}
              onUndo={onUndo}
              onDebugState={onDebugState}
            />
          </div>
          <div className="col-6">
            <GameStats {...createGameStats(state)} />
          </div>
        </div>
        <div className="row game">
          <GameBoard {...currentSnapshot(state)} onClick={onMakeMove} />
        </div>
      </div>
    );
  }
}
