import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { toSquaresArray } from '../../model/gameBoardPieces';
import findMovesInDirection from './findMovesInDirection';
import { left } from '../boardNavigation';

describe('findMovesInDirection Test Suite', () => {
  it('findMovesInDirection#success', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    expect(findMovesInDirection(pieces, toSquaresArray( pieces.squaresObj ), left)).toEqual(expect.arrayContaining([28]));
  });
});
