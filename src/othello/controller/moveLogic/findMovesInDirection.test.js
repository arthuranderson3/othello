import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { expandGameBoardPieces } from '../../model/gameBoardPieces';

import findMovesInDirection from './findMovesInDirection';
import { left } from '../boardNavigation';

describe('findMovesInDirection Test Suite', () => {
  it('findMovesInDirection#success', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);
    expect(findMovesInDirection(ep, left)).toEqual(expect.arrayContaining([28]));
  });
});
