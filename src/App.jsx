import React, { Component } from 'react';

import OthelloApp from './othello/OthelloApp';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <OthelloApp store={this.props.store} />
      </React.Fragment>
    );
  }
}
