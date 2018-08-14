import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Game from './game/Game';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <header>
            <h1 className="h1">Othello</h1>
          </header>
          <div>
            <Game />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
