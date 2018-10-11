import bindAll from 'lodash.bindall';
import React, { Component } from 'react';
import PlayerInput from './PlayerInput';
import constructPlayer from '../model/player/constructPlayer';
import constructRandy from '../model/player/constructRandy';

export default class GameStartForm extends Component {
  //export default function GameStartForm({ onStartGame = f => f }) {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      playerOne: constructPlayer('', 'W', 'human'),
      playerTwo: constructRandy(),
    };
    bindAll(this, ['submit']);
  }

  submit(e) {
    e.preventDefault();
    this.props.onStartGame(this.gameName, this.playerOne, this.playerTwo);
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

  get playerOne() {
    return this.state.playerOne;
  }
  set playerOne(value) {
    this.updateState('playerOne', value);
  }
  get playerTwo() {
    return this.state.playerTwo;
  }
  set playerTwo(value) {
    this.updateState('playerTwo', value);
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-light rounded p-4">
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
            <PlayerInput
              player={this.playerOne}
              playerNumber="One"
              updatePlayer={player => (this.playerOne = player)}
            />
            <PlayerInput
              player={this.playerTwo}
              playerNumber="Two"
              updatePlayer={player => (this.playerTwo = player)}
            />
            <button type="submit" className="btn btn-success" onClick={e => this.submit(e)}>
              Start Game
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
