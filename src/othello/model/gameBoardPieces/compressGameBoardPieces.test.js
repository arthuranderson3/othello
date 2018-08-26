import createGameBoardPieces from './createGameBoardPieces';
import compressGameBoardPieces from './compressGameBoardPieces';
import expandGameBoardPieces from './expandGameBoardPieces';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

describe('compressGameBoardPieces suite', () => {
  it('#compressGameBoardPieces default ', () => {
    const gpb = createGameBoardPieces();
    const egpg = expandGameBoardPieces(gpb);
    const pieces = compressGameBoardPieces(egpg);
    expect(pieces.player).toBe('W');
    expect(pieces.idx).toBeUndefined();
    expect(pieces.squares_obj).toEqual(DEFAULT_SQUARES);
  });
});
