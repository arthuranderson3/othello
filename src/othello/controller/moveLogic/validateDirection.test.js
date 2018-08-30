import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { expandGameBoardPieces } from '../../model/gameBoardPieces';
import validateDirection from './validateDirection';
import { right } from '../boardNavigation';
import { left } from '../boardNavigation';

describe('validateDirection Test Suite', () => {
  it('validateDirection#true', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);
    expect(validateDirection(ep, left)).toBe(true);
  });

  it('validateDirection#false', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);
    expect(validateDirection(ep, right)).toBe(false);
  });
});
