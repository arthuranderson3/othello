import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';
import validateDirection from './validateDirection';
import right from '../boardNavigation/right';
import left from '../boardNavigation/left';

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
