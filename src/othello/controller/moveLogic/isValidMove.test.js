import GameBoardPieces from '../../model/GameBoardPieces';
import isValidMove from './isValidMove';

describe('isValidMove Test Suite', () => {
  it('isValidMove#true', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;
    expect(isValidMove(pieces)).toBe(true);
  });

  it('isValidMove#false', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 15;
    expect(isValidMove(pieces)).toBe(false);
  });
});
