import GameBoardPieces from '../../model/GameBoardPieces';
import validateDirection from './validateDirection';
import right from '../boardNavigation/right';
import left from '../boardNavigation/left';

describe('validateDirection Test Suite', () => {
  it('validateDirection#true', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    expect(validateDirection(pieces, left)).toBe(true);
  });

  it('validateDirection#false', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    expect(validateDirection(pieces, right)).toBe(false);
  });
});
