import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { toSquaresArray } from '../../model/gameBoardPieces';
import validateDirection from './validateDirection';
import { right } from '../boardNavigation';
import { left } from '../boardNavigation';

describe('validateDirection Test Suite', () => {
  it('validateDirection#true', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const squaresArr = toSquaresArray(pieces.squaresObj);
    expect(validateDirection(pieces, squaresArr, left)).toBe(true);
  });

  it('validateDirection#false', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const squaresArr = toSquaresArray(pieces.squaresObj);
    expect(validateDirection(pieces, squaresArr, right)).toBe(false);
  });
});
