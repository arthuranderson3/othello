import { createGameBoard } from '../../model/gameBoard';
import { toSquaresArray } from '../../model/gameBoard';
import isValidMove from './isValidMove';

describe('isValidMove Test Suite', () => {
  it('isValidMove#true', () => {
    const pieces = createGameBoard();
    pieces.index = 29;
    const squaresArr = toSquaresArray(pieces);

    expect(isValidMove(pieces, squaresArr)).toBe(true);
  });

  it('isValidMove#false', () => {
    const pieces = createGameBoard();
    pieces.index = 15;
    const squaresArr = toSquaresArray(pieces);
    expect(isValidMove(pieces, squaresArr)).toBe(false);
  });
});
