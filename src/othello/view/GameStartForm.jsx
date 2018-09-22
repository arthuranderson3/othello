import bindAll from 'lodash.bindall';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button/dist';
import './reactButtonOverrides.css';

import TextField, { HelperText, Input } from '@material/react-text-field/dist';

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
        <TextField label="Game Name">
          <Input value={this.gameName} onChange={e => (this.gameName = e.target.value)} />
        </TextField>
        <br />
        <TextField label="Nick name">
          <Input value={this.nickName} onChange={e => (this.nickName = e.target.value)} />
        </TextField>
        <br />
        <TextField label="# Players" helperText={<HelperText>1 or 2 players</HelperText>}>
          <Input
            min="1"
            max="2"
            value={this.numPlayers}
            onChange={e => (this.numPlayers = e.target.value)}
          />
        </TextField>
        <Button raised onClick={e => this.submit(e)}>
          Start Game
        </Button>
      </React.Fragment>
    );
  }
}
