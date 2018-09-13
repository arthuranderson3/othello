import { constructGameBoard } from '../../model/gameBoard';
import { toSquaresArray } from '../../model/gameBoard';
import validateDirection from './validateDirection';
import { right } from '../boardNavigation';
import { left } from '../boardNavigation';

describe('validateDirection Test Suite', () => {
  it('validateDirection#true', () => {
    const pieces = constructGameBoard();
    pieces.index = 29;
    const squaresArr = toSquaresArray(pieces);
    expect(validateDirection(pieces, squaresArr, left)).toBe(true);
  });

  it('validateDirection#false', () => {
    const pieces = constructGameBoard();
    pieces.index = 29;
    const squaresArr = toSquaresArray(pieces);
    expect(validateDirection(pieces, squaresArr, right)).toBe(false);
  });
});
