import GameBoardPieces from '../../model/GameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';
import hasMove from './hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove', () => {
    const pieces = new GameBoardPieces();
    const ep = expandGameBoardPieces(pieces);
    expect(hasMove(ep)).toBe(true);
  });
});
