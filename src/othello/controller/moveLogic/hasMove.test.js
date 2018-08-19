import GameBoardPieces from '../../model/GameBoardPieces';
import hasMove from './hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove', () => {
    const pieces = new GameBoardPieces();
    expect(hasMove(pieces)).toBe(true);
  });
});
