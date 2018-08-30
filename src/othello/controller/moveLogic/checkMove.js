import hasMove from './hasMove';
import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import { getLastBoard } from '../../model/state';
import recordLastBoard from '../../model/state/recordLastBoard';
import getTurn from '../../model/stats/getTurn';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';
import compressGameBoardPieces from '../../model/gameBoardPieces/compressGameBoardPieces';

export default function checkMove(state, idx) {
  return new Promise((resolve, reject) => {
    let currentState = state;
    const gameBoardPieces = getLastBoard(currentState);
    gameBoardPieces.idx = idx;
    const epGBP = expandGameBoardPieces(gameBoardPieces);

    if (!hasMove(epGBP, epGBP.player)) {
      return reject(new Error('not valid move'));
    } else if (isValidMove(epGBP, epGBP.player)) {
      const newEPGamePieces = updateSquares(epGBP);

      const newGamePieces = compressGameBoardPieces(newEPGamePieces);
      //
      // see if the next player has a move.
      //
      let next = toOppositePlayer(newEPGamePieces);

      if (!hasMove(newEPGamePieces, next.player)) {
        next = toOppositePlayer(next);
      }
      newGamePieces.player = next.player;
      newGamePieces.turn = getTurn(currentState) + 1;
      currentState = recordLastBoard(currentState, newGamePieces);

      return resolve(currentState);
    }
  });
}
