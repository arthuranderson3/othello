import SQUARES from './SQUARES';

const defaultGameBoard = {
  squares: [...SQUARES],
  player: 'W',
  turn: 1,
};

export default function createGameBoardPieces(gb = { ...defaultGameBoard }) {
  return { squares: [...gb.squares], player: gb.player, turn: gb.turn, idx: gb.idx };
}
