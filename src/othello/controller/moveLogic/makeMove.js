import hasMove from './hasMove';
import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import { getLastBoard } from '../../model/state';
import { recordLastBoard } from '../../model/state';
import getTurn from '../../model/stats/getTurn';
import toSquaresArray from '../../model/gameBoardPieces/toSquaresArray';
import gatherValidMoves from './gatherValidMoves';

export default function makeMove(state, idx) {
    let currentState = state;
    const gameBoardPieces = getLastBoard(currentState);
    gameBoardPieces.idx = idx;
    const squaresArr = toSquaresArray( gameBoardPieces );

    if (!hasMove( gameBoardPieces.player, squaresArr )) {
      throw new Error(`no move for player ${gameBoardPieces.player}`);
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
      return currentState;
    }
		throw new Error(`not a valid move ${idx}`);
}
