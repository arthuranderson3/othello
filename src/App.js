import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game';
import KnownCodePoints from './KnownCodePoints';

export default class App extends Component {
    render() {
        return (
            <div className="container text-center">
                <header className="jumbotron">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="h1">Welcome to Othello</h1>
                </header>
                <div>
                    <Game/>
                </div>
            </div>
        );
    }
}
