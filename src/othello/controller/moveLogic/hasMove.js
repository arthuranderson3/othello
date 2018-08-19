import _ from 'lodash';
import isValidMove from './isValidMove';

export default function hasMove(pieces) {
  // gather all potential movement squares.
  const tempSquares = [...pieces.squares];

  const board_map = _.map(tempSquares, (square, idx) => {
    return { idx, square };
  });
  const potential_moves = _.filter(board_map, board_piece => {
    return _.isUndefined(board_piece.square);
  });
  return _.some(potential_moves, ({ idx }) => {
    return isValidMove({
      idx,
      squares: tempSquares,
      player: pieces.player,
    });
  });
}
