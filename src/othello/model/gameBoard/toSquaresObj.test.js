import toSquaresObj from './toSquaresObj';


describe('toSquaresObj suite', () => {
  let pieces;
  beforeAll( () => {
    const SQUARES = [
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
    ];
    pieces = toSquaresObj( { squaresArr: [...SQUARES] });
  });
  it( 'pieces.squaresObj', () => {
    expect( pieces ).toHaveProperty('squaresObj');
  });
  it('pieces.SquaresObj={ [27]: W, [28]: B, [35]: B, [36]: W } ', () => {
    expect(pieces.squaresObj).toEqual({ '27': 'W', '28': 'B', '35': 'B', '36': 'W' });
  });
});
