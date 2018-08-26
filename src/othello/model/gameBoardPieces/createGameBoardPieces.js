import DEFAULT_SQUARES from './DEFAULT_SQUARES';

const defaultGameBoard = {
  squares_obj: { ...DEFAULT_SQUARES },
  player: 'W',
  turn: 1,
};

//
// using an object variable allows for undefined optional parameters
// object destructuring causes errors to be thrown when we have undefined parameter.
//
export default function createGameBoardPieces(gb = { ...defaultGameBoard }) {
  return { squares_obj: { ...gb.squares_obj }, player: gb.player, turn: gb.turn, idx: gb.idx };
}
