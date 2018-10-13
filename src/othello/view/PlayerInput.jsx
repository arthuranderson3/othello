import React, { Component } from 'react';
import GamePieceSelection from './controls/GamePieceSelection';
import LabeledSelection, { createOptions } from './controls/LabeledSelection';
import NumberInput from './controls/NumberInput';
import PlayerNumber from './controls/PlayerNumber';
import PlayerTypeSelection from './controls/PlayerTypeSelection';
import TextInput from './controls/TextInput';

export default class PlayerInput extends Component {
  updatePlayer(name, value) {
    let player = { ...this.props.player, ...{ [name]: value } };
    this.props.updatePlayer(player);
  }

  get name() {
    return this.props.player.name;
  }
  set name(value) {
    this.updatePlayer('name', value);
  }

  get color() {
    return this.props.player.color;
  }
  set color(value) {
    if (value === 'W' || value === 'B') {
      this.updatePlayer('color', value);
    }
  }

  get type() {
    return this.props.player.type;
  }
  set type(value) {
    if (value === 'human' || value === 'computer') {
      this.updatePlayer('type', value);
    }
  }

  get delay() {
    return this.props.player.delay;
  }
  set delay(value) {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      this.updatePlayer('delay', value);
    }
  }
  render() {
    const { playerNumber } = this.props;
    if (this.type === 'computer') {
      return (
        <React.Fragment>
          <PlayerNumber number={playerNumber} />
          <PlayerTypeSelection value={this.type} onChange={value => (this.type = value)} />
          <LabeledSelection
            label="Name"
            value={this.name}
            onChange={value => (this.name = value)}
            options={createOptions(['Randy', 'Gollum'])}
          />
          <NumberInput
            label="Delay"
            value={this.delay}
            numberChange={num => (this.delay = num)}
            placeholder="delay (seconds)"
          />

          <GamePieceSelection value={this.color} onChange={value => (this.color = value)} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <PlayerNumber number={playerNumber} />
        <PlayerTypeSelection value={this.type} onChange={value => (this.type = value)} />
        <TextInput
          label="Name"
          value={this.name}
          textChange={text => (this.name = text)}
          placeholder="player name"
        />
        <GamePieceSelection value={this.color} onChange={value => (this.color = value)} />
      </React.Fragment>
    );
  }
}
