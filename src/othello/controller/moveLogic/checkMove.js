import hasMove from './hasMove';
import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import { getLastBoard } from '../../model/state';
import { recordLastBoard } from '../../model/state';
import getTurn from '../../model/stats/getTurn';
import toSquaresArray from '../../model/gameBoardPieces/toSquaresArray';
import gatherValidMoves from './gatherValidMoves';
// import toSquaresObj from '../../model/gameBoardPieces/toSquaresObj';

export default function checkMove(state, idx) {
  return new Promise((resolve, reject) => {

    let currentState = state;
    const gameBoardPieces = getLastBoard(currentState);
    gameBoardPieces.idx = idx;
    const squaresArr = toSquaresArray( gameBoardPieces );

    if (!hasMove( gameBoardPieces.player, squaresArr )) {
      return reject(new Error('not valid move'));
    } else if (isValidMove( gameBoardPieces, squaresArr )) {

      const newGamePieces = updateSquares(gameBoardPieces, squaresArr);
      //
      // see if the next player has a move.
      //
      let next = toOppositePlayer(newGamePieces);

      if (!hasMove(next.player, squaresArr)) {
        next = toOppositePlayer(next);
      } else if( !hasMove( newGamePieces.player, squaresArr )){
        // end game - no more moves
        console.info("end game!!!");
      }
      newGamePieces.player = next.player;
      newGamePieces.turn = getTurn(currentState) + 1;
      newGamePieces.validSquares = gatherValidMoves(
        toSquaresArray( newGamePieces ),
        newGamePieces.player );

      currentState = recordLastBoard(currentState, newGamePieces);

      return resolve(currentState);
    }
  });
}
