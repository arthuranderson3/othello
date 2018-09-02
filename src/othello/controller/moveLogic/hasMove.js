import some from 'lodash.some';
import isValidMove from './isValidMove';
import gatherUndefinedSquares from './gatherUndefinedSquares';
import { createGameBoardPiecesSquaresArray } from '../../model/gameBoardPieces';

export default function hasMove({ squares_arr }, player) {
  return some(gatherUndefinedSquares(squares_arr), ({ idx }) => {
    return isValidMove(createGameBoardPiecesSquaresArray(squares_arr, player, idx));
  });
}
