import createGameBoardPieces from './gameBoardPieces/createGameBoardPieces';

export default class GameBoardPieces {
  constructor({ squares, player, idx } = createGameBoardPieces()) {
    this.squares = [...squares];
    this.player = player;
    this.idx = idx;
  }
}
