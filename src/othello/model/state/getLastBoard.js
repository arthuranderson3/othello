import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function getLastBoard({ history }) {
  if (history.length > 0) {
    return createGameBoardPieces(history[history.length - 1]);
  }
  return undefined;
}
