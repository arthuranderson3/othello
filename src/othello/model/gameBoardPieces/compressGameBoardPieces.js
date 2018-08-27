import assign from 'lodash.assign';
import toSquaresObj from './toSquaresObj';

export default function compressGameBoardPieces({ squares_arr, player, idx }) {
  return assign({}, { squares_obj: toSquaresObj(squares_arr) }, { player, idx });
}
