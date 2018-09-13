import hasMove from './hasMove';
import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import recordLastBoard from '../../model/game/recordLastBoard';
import getTurn from '../../model/game/getTurn';
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

      const newGameBoard = updateSquares(gameBoard, squaresArr);
      //
      // see if the next player has a move.
      //
      let next = toOppositePlayer(newGameBoard);

      if (!hasMove(next.player, squaresArr)) {
        next = toOppositePlayer(next);
      } else if( !hasMove( newGameBoard.player, squaresArr )){
        // end game - no more moves
        console.info("end game!!!");
      }
      newGameBoard.player = next.player;
      newGameBoard.turn = getTurn(currentState) + 1;
      newGameBoard.validSquares = gatherValidMoves(
        toSquaresArray( newGameBoard ),
        newGameBoard.player );

      currentState = recordLastBoard(currentState, newGameBoard);
      return currentState;
    }
		throw new Error(`not a valid move ${index}`);
}
