import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="h1">Welcome to Othello</h1>
        </header>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}
