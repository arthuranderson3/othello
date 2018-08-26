import GameBoardPieces from '../../model/GameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';
import isValidMove from './isValidMove';

describe('isValidMove Test Suite', () => {
  it('isValidMove#true', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);

    expect(isValidMove(ep)).toBe(true);
  });

  it('isValidMove#false', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 15;
    const ep = expandGameBoardPieces(pieces);
    expect(isValidMove(ep)).toBe(false);
  });
});
