import isValidMove from './isValidMove';
import updateSquares from './updateSquares';
import toOppositePlayer from './toOppositePlayer';
import recordSnapshot from '../../model/game/recordSnapshot';
import toSquaresArray from '../../model/gameBoard/toSquaresArray';
import gatherValidMoves from './gatherValidMoves';
import currentSnapshot from '../../model/game/currentSnapshot';

export default function makeMove(state, index) {
  let currentState = state;
  const gameBoard = currentSnapshot(currentState);
  gameBoard.index = index;
  const squaresArr = toSquaresArray(gameBoard);

  if (isValidMove(gameBoard, squaresArr)) {
    const newGameBoard = updateSquares(gameBoard, squaresArr);
    //
    // see if the next player has a move.
    //
    let next = toOppositePlayer(newGameBoard);
    let validSq = gatherValidMoves(toSquaresArray(newGameBoard), next.player);

    //
    // if the next player does not have a move
    // revert back to currentplayer to see if they have a move.
    //
    if (validSq.length === 0) {
      next = toOppositePlayer(next);
      validSq = gatherValidMoves(toSquaresArray(newGameBoard), next.player);
    }
    if (validSq.length === 0) {
      // end game - neither player has a move
    }
    newGameBoard.player = next.player;
    newGameBoard.turn = currentState.snapshots.length + 1;
    newGameBoard.validSquares = validSq.slice();

    currentState = recordSnapshot(currentState, newGameBoard);
    return currentState;
  }
  throw new Error(`not a valid move ${index}`);
}
