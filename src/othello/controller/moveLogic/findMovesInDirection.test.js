import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';

import findMovesInDirection from './findMovesInDirection';
import left from '../boardNavigation/left';

describe('findMovesInDirection Test Suite', () => {
  it('findMovesInDirection#success', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);
    expect(findMovesInDirection(ep, left)).toEqual(expect.arrayContaining([28]));
  });
});
