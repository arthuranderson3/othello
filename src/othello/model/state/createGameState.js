import slice from 'lodash.slice';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function createGameState(history = [createGameBoardPieces()]) {
  if (Array.isArray(history)) {
    return { history: slice(history) };
  }
  return undefined;
}
