import createGameBoardPieces from './createGameBoardPieces';
import expandGameBoardPieces from './expandGameBoardPieces';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';
import toSquaresArray from './toSquaresArray';

describe('expandGameBoardPieces suite', () => {
  it('#expandGameBoardPieces default ', () => {
    const pieces = createGameBoardPieces({
      squares_obj: { ...DEFAULT_SQUARES },
      idx: 1,
      player: 'W',
    });
    const squares_arr = toSquaresArray(DEFAULT_SQUARES);
    const ep = expandGameBoardPieces(pieces);
    expect(ep.player).toBe('W');
    expect(ep.idx).toEqual(1);
    expect(ep.squares_arr).toEqual(expect.arrayContaining(squares_arr));
  });
});
