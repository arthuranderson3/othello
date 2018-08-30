import some from 'lodash.some';
import isValidMove from './isValidMove';
import gatherUnusedSquares from './gatherUnusedSquares';
import createGameBoardPiecesArray from '../../model/gameBoardPieces/createGameBoardPiecesArray';

export default function hasMove({ squares_arr }, player) {
  return some(gatherUnusedSquares(squares_arr), ({ index }) => {
    return isValidMove(createGameBoardPiecesArray(squares_arr, player, index));
  });
}
