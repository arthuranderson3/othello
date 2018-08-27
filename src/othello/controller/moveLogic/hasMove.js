import isUndefined from 'lodash.isUndefined';
import some from 'lodash.some';
import map from 'lodash.map';
import filter from 'lodash.filter';
import isValidMove from './isValidMove';
import buildGameBoardPiecesArray from '../../model/gameBoardPieces/buildGameBoardPiecesArray';

function toSquareIndex(square, index) {
  return { index, square };
}
function filterUndefinedSquare(p) {
  return isUndefined(p.square);
}

export default function hasMove({ squares_arr, idx }, player) {
  // gather all potential movement squares.
  const board_map = map(squares_arr, toSquareIndex);
  const potential_moves = filter(board_map, filterUndefinedSquare);
  return some(potential_moves, ({ index }) => {
    return isValidMove(buildGameBoardPiecesArray(squares_arr, player, index));
  });
}
