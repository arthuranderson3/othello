import assign from 'lodash.assign';
import slice from 'lodash.slice';

export default function buildGameBoardPiecesArray(squares_arr, player, idx) {
  return assign({}, { idx, squares_arr: slice(squares_arr), player });
}
