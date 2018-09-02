import * as uuid from 'uuid/v4';
const START_ONE_PLAYER_GAME = 'START_ONE_PLAYER_GAME';

function createOnePlayerGame(game) {
  return {
    id: uuid(),
  };
}
