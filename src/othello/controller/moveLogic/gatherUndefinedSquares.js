import map from 'lodash.map';
import filter from 'lodash.filter';

function toSquareIndex(square, idx) {
  return { idx, square };
}
function filterUndefinedSquare(piece) {
  return piece.square === undefined;
}

export default function gatherUndefinedSquares(squares_arr) {
  // gather all potential movement squares.
  const board_map = map(squares_arr, toSquareIndex);
  return filter(board_map, filterUndefinedSquare);
}
