import toSquaresArray from './toSquaresArray';

export default function expandGameBoardPieces({ squares_obj, player, idx }) {
  return { squares_arr: toSquaresArray(squares_obj), player, idx };
}
