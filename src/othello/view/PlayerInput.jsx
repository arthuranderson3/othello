import React, { Component } from 'react';
import GamePiece, { WHITE_CIRCLE, BLACK_CIRCLE } from './GamePiece';
import constructPlayer from '../model/player/constructPlayer';
import TextInput from './controls/TextInput';

export default class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = constructPlayer(props.player.name, props.player.color, props.player.type);
  }
  updateState(name, value) {
    this.setState({ [name]: value });
    this.props.updatePlayer(this.state);
  }

  get name() {
    return this.state.name;
  }
  set name(value) {
    this.updateState('name', value);
  }

  get color() {
    return this.state.color;
  }
  set color(value) {
    if (value === 'W' || value === 'B') {
      this.updateState('color', value);
    }
  }

  get type() {
    return this.state.type;
  }
  set type(value) {
    if (value === 'human' || value === 'computer') {
      this.updateState('type', value);
    }
  }

  render() {
    if (this.type === 'computer') {
      return (
        <React.Fragment>
          <div className="form-group">
            <h4> Player {this.props.playerNumber}</h4>
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="idType">
              Type
            </label>
            <select
              id="idType"
              className="form-control"
              value={this.type}
              onChange={e => (this.type = e.target.value)}
            >
              <option value="human">Human</option>
              <option value="computer">Computer</option>
            </select>
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="idName">
              Type
            </label>
            <select
              id="idName"
              className="form-control"
              value={this.name}
              onChange={e => (this.name = e.target.value)}
            >
              <option value="Randy">Randy</option>
              <option value="Gollum">Gollum</option>
            </select>
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="idColor">
              Color
            </label>
            <select
              id="idColor"
              className="form-control"
              value={this.color}
              onChange={e => (this.color = e.target.value)}
            >
              <option value="W">
                White&nbsp;
                {WHITE_CIRCLE}
              </option>
              <option value="B">
                Black&nbsp;
                {BLACK_CIRCLE}
              </option>
            </select>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="form-group">
          <h4>Player {this.props.playerNumber}</h4>
          <div className="form-group">
            <label className="col-form-label" htmlFor="idType">
              Type
            </label>
            <select
              id="idType"
              className="form-control"
              value={this.type}
              onChange={e => (this.type = e.target.value)}
            >
              <option value="human">Human</option>
              <option value="computer">Computer</option>
            </select>
          </div>
          <TextInput
            label="Name"
            value={this.name}
            textChange={text => (this.name = text)}
            placeholder="player name"
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="idColor">
            Color
          </label>
          <select
            id="idColor"
            className="form-control"
            value={this.color}
            onChange={e => (this.color = e.target.value)}
          >
            <option value="W">
              White&nbsp;
              {WHITE_CIRCLE}
            </option>
            <option value="B">
              Black&nbsp;
              {BLACK_CIRCLE}
            </option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}
