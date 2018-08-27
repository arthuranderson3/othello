import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';
import createGameState from './createGameState';

export default function resetBoard() {
  return createGameState([createGameBoardPieces()]);
}
