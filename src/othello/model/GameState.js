import createGameState from './state/createGameState';

export default class GameState {
  constructor(props = createGameState()) {
    this.history = props.history.slice();
  }
}
