import bindAll from 'lodash.bindall';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GameStartForm extends Component {
  //export default function GameStartForm({ onStartGame = f => f }) {
  constructor(props) {
    super(props);
    this.state = { gameName: '', nickName: '', numPlayers: 1 };
    bindAll(this, ['submit']);
  }

  submit(e) {
    e.preventDefault();
    this.props.onStartGame(this.gameName, this.nickName, this.numPlayers);
  }

  updateState(name, value) {
    this.setState({ [name]: value });
  }

  get gameName() {
    return this.state.gameName;
  }
  set gameName(value) {
    this.updateState('gameName', value);
  }

  get nickName() {
    return this.state.nickName;
  }
  set nickName(value) {
    this.updateState('nickName', value);
  }
  get numPlayers() {
    return this.state.numPlayers;
  }
  set numPlayers(value) {
    const val = parseInt(value, 10);
    this.updateState('numPlayers', val);
  }

  render() {
    return (
      <React.Fragment>
        <form action="submit">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="idGameName"
              value={this.gameName}
              onChange={e => (this.gameName = e.target.value)}
              placeholder="Game Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="idNickName"
              value={this.nickName}
              onChange={e => (this.nickName = e.target.value)}
              placeholder="Nickname"
            />
          </div>
          <label for="idNumPlayers"># Players</label>
          <input
            type="number"
            min="1"
            max="2"
            value={this.numPlayers}
            onChange={e => (this.numPlayers = e.target.value)}
          />
          <button type="submit" onClick={e => this.submit(e)}>
            Start Game
          </button>
        </form>
      </React.Fragment>
    );
  }
}
