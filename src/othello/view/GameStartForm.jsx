import bindAll from 'lodash.bindall';
import React, { Component } from 'react';

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
        <div className="gameStartForm bg-light rounded p-2">
          <form action="submit">
            <div className="form-group">
              <label className="col-form-label" htmlFor="idGameName">
                Game Name
              </label>
              <input
                type="text"
                className="form-control"
                id="idGameName"
                value={this.gameName}
                onChange={e => (this.gameName = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="idNickName">
                Nick Name
              </label>
              <input
                type="text"
                className="form-control"
                id="idNickName"
                value={this.nickName}
                onChange={e => (this.nickName = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="idNumPlayers">
                # Players
              </label>
              <input
                id="idNumPlayers"
                type="number"
                className="form-control"
                min="1"
                max="2"
                value={this.numPlayers}
                onChange={e => (this.numPlayers = e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success" onClick={e => this.submit(e)}>
              Start Game
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
