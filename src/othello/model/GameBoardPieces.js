import createGameBoardPieces from './gameBoardPieces/createGameBoardPieces';

export default class GameBoardPieces {
  constructor({ squares_obj, player, idx } = createGameBoardPieces()) {
    this.squares_obj = { ...squares_obj };
    this.player = player;
    this.idx = idx;
  }
}
