import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function getLastBoard({ history }) {
  if (Array.isArray(history) && history.length) {
    return createGameBoardPieces(history[history.length - 1]);
  }

  return undefined;
}
