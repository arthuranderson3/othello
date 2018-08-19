import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function createGameState(history = [createGameBoardPieces()]) {
  return { history };
}
