import _ from 'lodash';

export function getTurn( gameState ) {
    if( ! _.isUndefined( gameState ) && !_.isUndefined(gameState.history) ) {
        return gameState.history.length;
    } else {
        return undefined;
    }
}
