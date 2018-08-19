import GameBoardPieces from './GameBoardPieces';

describe('GameBoardPieces suite', () => {
  it('#defaultGameBoard ', () => {
    const pieces = new GameBoardPieces();
    expect(pieces.player).toBe('W');
    expect(pieces.idx).toBeUndefined();
    expect(pieces.squares.length).toBe(64);
  });

  it('#ctor props', () => {
    const props = {
      player: 'B',
      idx: 27,
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'W',
        'B',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'B',
        'W',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    };
    const pieces = new GameBoardPieces(props);
    expect(pieces.player).toBe('B');
    expect(pieces.squares.length).toBe(64);
    expect(pieces.idx).toBe(27);
  });
});
