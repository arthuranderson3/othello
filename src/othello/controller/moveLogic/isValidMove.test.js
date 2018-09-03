import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { toSquaresArray } from '../../model/gameBoardPieces';
import isValidMove from './isValidMove';

describe('isValidMove Test Suite', () => {
  it('isValidMove#true', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const squaresArr = toSquaresArray(pieces.squaresObj);

    expect(isValidMove(pieces, squaresArr)).toBe(true);
  });

  it('isValidMove#false', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 15;
    const squaresArr = toSquaresArray(pieces.squaresObj);
    expect(isValidMove(pieces, squaresArr)).toBe(false);
  });
});
