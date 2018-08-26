import hasMove from './hasMove';
import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import getLastBoard from '../../model/state/getLastBoard';
import recordLastBoard from '../../model/state/recordLastBoard';
import getTurn from '../../model/stats/getTurn';

export default function checkMove(state, idx) {
  return new Promise((resolve, reject) => {
    let currentState = state;
    const gameBoardPieces = getLastBoard(currentState);
    gameBoardPieces.idx = idx;

    if (!hasMove(gameBoardPieces)) {
      return reject(new Error('not valid move'));
    } else if (isValidMove(gameBoardPieces)) {
      const newGamePieces = updateSquares(gameBoardPieces);
      // see if the next player has a move.
      const next = toOppositePlayer(newGamePieces);
      newGamePieces.player = next.player;
      newGamePieces.turn = getTurn(currentState) + 1;

      if (!hasMove(newGamePieces)) {
        const revert = toOppositePlayer(newGamePieces);
        newGamePieces.player = revert.player;
      }

      currentState = recordLastBoard(currentState, newGamePieces);

      return resolve(currentState);
    }
  });
}
