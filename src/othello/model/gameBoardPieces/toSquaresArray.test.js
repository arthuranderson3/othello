import toSquaresArray from './toSquaresArray';

describe('toSquaresArray suite', () => {
  it('#toSquaresArray default ', () => {
    const pieces = toSquaresArray();
    expect(pieces.length).toEqual(64);
  });
});
