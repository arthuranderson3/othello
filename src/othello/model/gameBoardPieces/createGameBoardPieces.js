import DEFAULT_SQUARES from './DEFAULT_SQUARES';

const defaultGameBoard = {
  squares_obj: { ...DEFAULT_SQUARES },
  player: 'W',
  turn: 1,
  idx: undefined,
};

//
// using an object variable allows for undefined optional parameters
// object destructuring causes errors to be thrown when we have undefined parameter.
//
export default function createGameBoardPieces({
  squares_obj,
  player,
  turn,
  idx,
} = defaultGameBoard) {
  return { squares_obj, player, turn, idx };
}
