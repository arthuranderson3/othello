import slice from 'lodash.slice';

export default function createGameBoardPiecesSquaresArray(squares_arr, player, idx) {
  return { squares_arr: slice(squares_arr), player, idx };
}
