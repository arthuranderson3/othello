import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import OthelloApp from './othello/OthelloApp';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <OthelloApp />
      </React.Fragment>
    );
  }

}
