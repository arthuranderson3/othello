
import { createGameState } from './state/';

const gameStateDefaults = createGameState();

export class GameState {

    constructor( props = gameStateDefaults ) {

        this.history = props.history.slice();
    }

}
