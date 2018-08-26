import GameBoardPieces from './GameBoardPieces';
import DEFAULT_SQUARES from './gameBoardPieces/DEFAULT_SQUARES';

describe('GameBoardPieces suite', () => {
  it('#defaultGameBoard ', () => {
    const pieces = new GameBoardPieces();
    expect(pieces.player).toBe('W');
    expect(pieces.idx).toBeUndefined();
    expect(pieces.squares_obj).toEqual(DEFAULT_SQUARES);
  });

  it('#ctor props', () => {
    const props = {
      player: 'B',
      idx: 27,
      squares_obj: DEFAULT_SQUARES,
    };
    const pieces = new GameBoardPieces(props);
    expect(pieces.player).toBe('B');
    expect(pieces.squares_obj).toEqual(DEFAULT_SQUARES);
    expect(pieces.idx).toBe(27);
  });
});
