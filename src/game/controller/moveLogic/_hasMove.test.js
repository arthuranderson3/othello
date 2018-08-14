import { GameBoardPieces } from '../../model';
import { hasMove } from './_hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove', () => {
    const pieces = new GameBoardPieces();
    expect(hasMove(pieces)).toBe(true);
  });
});
