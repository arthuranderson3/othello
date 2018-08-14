import { GameBoardPieces } from '../../model';
import { validateDirection } from './_validateDirection';
import { right, left } from '../boardNavigation';

describe('validateDirection Test Suite', () => {
  it('validateDirection#true', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    expect(validateDirection(left, pieces)).toBe(true);
  });

  it('validateDirection#false', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    expect(validateDirection(right, pieces)).toBe(false);
  });
});
