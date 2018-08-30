import toSquaresObj from './toSquaresObj';

export default function compressGameBoardPieces({ squares_arr, player, idx }) {
  return { squares_obj: toSquaresObj(squares_arr), player, idx };
}
