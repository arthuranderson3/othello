import createGameBoardPieces from './createGameBoardPieces';

describe('createGameBoardPieces suite', () => {
  it('#createGameBoardPieces default ', () => {
    const pieces = createGameBoardPieces();
    expect(pieces.player).toBe('W');
    expect(pieces.idx).toBeUndefined();
    expect(pieces.squares.length).toBe(64);
  });
});
