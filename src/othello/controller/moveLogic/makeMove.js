import hasMove from './hasMove';
import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import recordLastBoard from '../../model/game/recordLastBoard';
import getTurn from '../../model/stats/getTurn';
import toSquaresArray from '../../model/gameBoard/toSquaresArray';
import gatherValidMoves from './gatherValidMoves';

export default function makeMove(state, index) {
    let currentState = state;
    const gameBoard = currentState.history[ currentState.history.length - 1];
    gameBoard.index = index;
    const squaresArr = toSquaresArray( gameBoard );

    if (!hasMove( gameBoard.player, squaresArr )) {
      throw new Error(`no move for player ${gameBoard.player}`);
    } else if (isValidMove( gameBoard, squaresArr )) {

      const newGamePieces = updateSquares(gameBoard, squaresArr);
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
		throw new Error(`not a valid move ${index}`);
}
