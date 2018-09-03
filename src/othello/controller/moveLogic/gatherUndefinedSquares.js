import map from 'lodash.map';
import filter from 'lodash.filter';

function toSquareIndex(square, idx) {
  return { idx, square };
}
function filterUndefinedSquare(piece) {
  return piece.square === undefined;
}

export default function gatherUndefinedSquares({ squaresArr }) {
  // gather all potential movement squares.
  const board_map = map(squaresArr, toSquareIndex);
  return filter(board_map, filterUndefinedSquare);
}
