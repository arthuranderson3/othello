import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function getLastBoard({ history }) {
  const len = history.length;
  if (len > 0) {
    return createGameBoardPieces(history[len - 1]);
  } else {
    return undefined;
  }
}
