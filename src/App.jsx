import React, { Component } from 'react';

import OthelloApp from './othello/OthelloApp';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <OthelloApp />
      </React.Fragment>
    );
  }
}
