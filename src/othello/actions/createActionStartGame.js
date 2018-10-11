import { START_GAME } from './othelloActionConstants';
import createAction from './createAction';
import copyPlayer from '../model/player/copyPlayer';

export default function createActionStartGame(gameName, playerOne, playerTwo) {
  return createAction(START_GAME, {
    gameName,
    playerOne: copyPlayer(playerOne),
    playerTwo: copyPlayer(playerTwo),
  });
}
