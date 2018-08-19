import SQUARES from './SQUARES';

const defaultGameBoard = {
  squares: [...SQUARES],
  player: 'W',
};

export default function createGameBoardPieces(gb = { ...defaultGameBoard }) {
  return { squares: [...gb.squares], player: gb.player, idx: gb.idx };
}
