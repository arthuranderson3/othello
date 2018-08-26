import createGameBoardPieces from './createGameBoardPieces';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

describe('createGameBoardPieces suite', () => {
  it('#createGameBoardPieces default ', () => {
    const pieces = createGameBoardPieces();
    expect(pieces.player).toBe('W');
    expect(pieces.idx).toBeUndefined();
    expect(pieces.squares_obj).toEqual(DEFAULT_SQUARES);
  });
});
