import { createGameState } from './_createGameState';

export function recordLastBoard( { history }, gb ) {
    history.push( gb );
    return createGameState( history );
}
