import toSquaresArray from './toSquaresArray';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

describe('toSquaresArray suite', () => {
  it('#toSquaresArray default ', () => {
    const pieces = toSquaresArray( { ...DEFAULT_SQUARES });
    expect(pieces.length).toEqual(64);
  });
});
