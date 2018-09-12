import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { toSquaresArray } from '../../model/gameBoardPieces';
import findMovesInDirection from './findMovesInDirection';
import { left } from '../boardNavigation';

describe('findMovesInDirection Test Suite', () => {
  it('findMovesInDirection#success', () => {
    const pieces = createGameBoardPieces();
    pieces.index = 29;
    expect(findMovesInDirection(pieces, toSquaresArray( pieces ), left)).toEqual(expect.arrayContaining([28]));
  });
});
