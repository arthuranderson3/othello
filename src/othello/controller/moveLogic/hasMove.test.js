import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';
import hasMove from './hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove', () => {
    const pieces = createGameBoardPieces();
    const ep = expandGameBoardPieces(pieces);
    expect(hasMove(ep, 'W')).toBe(true);
  });
});
