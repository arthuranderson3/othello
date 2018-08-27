import assign from 'lodash.assign';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function createGameState(history = [createGameBoardPieces()]) {
  if (Array.isArray(history)) {
    return assign({}, { history });
  }
  return undefined;
}
