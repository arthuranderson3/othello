import GameBoardPieces from '../../model/GameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';

import findMovesInDirection from './findMovesInDirection';
import left from '../boardNavigation/left';

describe('findMovesInDirection Test Suite', () => {
  it('findMovesInDirection#success', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);
    expect(findMovesInDirection(ep, left)).toEqual(expect.arrayContaining([28]));
  });
});
