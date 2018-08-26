import React, { Component } from 'react';

export default class GameStart extends Component {
  constructor(props) {
    super(props);
    this._numPlayer = 1;
    this._nickName = '';
    this.gameStartClick = this.gameStartClick.bind(this);
  }

  gameStartClick(e) {
    e.preventDefault();
    const gs = {
      numPlayers: this._numPlayer.value,
      nickName: this._nickName.value,
    };
    this._nickName.value = '';
    console.info(gs);
  }

  render() {
    return (
      <form onSubmit={this.gameStartClick}>
        <fieldset>
          <legend>Start a new Othello Game</legend>
          <label htmlFor="onePersonGame">One Player</label>&nbsp;
          <input
            id="onePersonGame"
            name="numberPlayers"
            type="radio"
            value="1"
            ref={input => (this._numPlayer = input)}
          />&nbsp;
          <label htmlFor="twoPersonGame">Two Players</label>&nbsp;
          <input
            id="twoPersonGame"
            name="numberPlayers"
            type="radio"
            value="2"
            ref={input => (this._numPlayer = input)}
          />
          <br />
          <label htmlFor="nickName">Nickname</label>&nbsp;
          <input
            id="nickName"
            name="nickName"
            placeholder="Enter your nickname"
            ref={input => (this._nickName = input)}
          />
          <br />
          <button id="gameStart" onClick={this.gameStartClick}>
            Start
          </button>
        </fieldset>
      </form>
    );
  }
}
