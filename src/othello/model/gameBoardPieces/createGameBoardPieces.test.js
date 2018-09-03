import createGameBoardPieces from './createGameBoardPieces';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

describe('createGameBoardPieces suite', () => {
  it('#createGameBoardPieces default ', () => {
    const pieces = createGameBoardPieces();
    expect(pieces).toHaveProperty('id');
    expect(pieces).toHaveProperty('player');
    expect(pieces).toHaveProperty('squaresObj');
    expect(pieces).toHaveProperty('turn');
    expect(pieces).toHaveProperty('idx');
    expect(pieces).toHaveProperty('validSquares');
    expect(pieces.player).toBe('W');
    expect(pieces.idx).toBeUndefined();
    expect(pieces.squaresObj).toEqual(DEFAULT_SQUARES);
    expect(pieces.turn).toBe(1);
    expect(pieces.validSquares).toEqual([20,29,34,44]);
  });
});
