import assign from 'lodash.assign';
import toSquaresArray from './toSquaresArray';

export default function expandGameBoardPieces({ squares_obj, player, idx }) {
  return assign({}, { squares_arr: toSquaresArray(squares_obj) }, { player, idx });
}
