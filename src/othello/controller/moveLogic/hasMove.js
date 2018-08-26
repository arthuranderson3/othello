import _ from 'lodash';
import isValidMove from './isValidMove';

export default function hasMove({ squares_arr, idx, player }) {
  // gather all potential movement squares.
  const board_map = _.map(squares_arr, (square, index) => {
    return { index, square };
  });
  const potential_moves = _.filter(board_map, board_piece => {
    return _.isUndefined(board_piece.square);
  });
  return _.some(potential_moves, ({ index }) => {
    return isValidMove({
      idx: index,
      squares_arr,
      player,
    });
  });
}
